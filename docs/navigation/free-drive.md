---
id: free-drive
sidebar_position: 6
title: "Free drive: road name and speed limit without a route"
sidebar_label: Free drive
description: "Track the device on the road network without a route with @rnmapbox/navigation: road name, speed limit, the navigation puck and the session state."
---

Outside guidance the navigation session is idle: no location events and no puck on navigation maps. `Navigation.startFreeDrive()` matches the device's location to the road network without a route, so `addLocationListener` reports the road name and speed limit, and navigation maps show the puck. `Navigation.stopNavigation()` ends it.

```tsx
import { useEffect, useState } from 'react';
import Navigation, { type LocationEvent } from '@rnmapbox/navigation';

export function useFreeDrive() {
  const [location, setLocation] = useState<LocationEvent>();

  useEffect(() => {
    const subscription = Navigation.addLocationListener(setLocation);
    Navigation.startFreeDrive().catch((error) => {
      // error.code === 'location_permission': ask for the permission first
      console.warn(error);
    });
    return () => {
      subscription.remove();
      Navigation.stopNavigation();
    };
  }, []);

  return location; // location?.roadName, location?.speedLimit?.speed, location?.speedLimit?.unit
}
```

- Mapbox bills free drive trips like guidance trips, see [Navigation SDK pricing](https://www.mapbox.com/pricing#navigation). Nothing in this package starts free drive on its own, CarPlay included. It runs from `startFreeDrive` until `stopNavigation` or a JS reload.
- Without location permission, `startFreeDrive` rejects with `code: 'location_permission'`, see [Location permission](install.md#location-permission).
- During guidance, `startFreeDrive()` ends the guidance and keeps the session in free drive.
- `<NavigationView>` and `<RNNavigationView>` started from free drive return to it when they unmount or the user ends the trip.

`speedLimit` is missing where the road has no known limit. Its `sign` is `'mutcd'` (US-style rectangle) or `'vienna'` (red circle), see [`LocationEvent`](api/Events/LocationEvent.md).

## Simulated location

`startFreeDrive({ simulatedLocation: [longitude, latitude] })` parks a simulated device at that position instead of using the device's location, and needs no location permission. After simulated guidance, `startFreeDrive()` keeps the simulated device where guidance stopped.

## Android background tracking

On Android, free drive runs without the Navigation SDK's foreground service, so Android throttles its location updates while the app is in the background. `startFreeDrive({ foregroundService: true })` keeps tracking in the background with the SDK's notification, which also keeps the billed trip going while the app isn't visible, until `stopNavigation`. Live guidance always uses the foreground service. iOS and simulated free drive ignore the option.

## Session state

`Navigation.getSessionState()` returns `'idle'`, `'freeDrive'` or `'activeGuidance'`, and `addSessionStateListener` reports changes, whether they come from JS, `<NavigationView>` or the car screen.

```tsx
const [sessionState, setSessionState] = useState(Navigation.getSessionState);

useEffect(() => {
  const subscription = Navigation.addSessionStateListener(setSessionState);
  return () => subscription.remove();
}, []);
```

On iOS they follow the SDK's session; on Android they follow this package's calls.
