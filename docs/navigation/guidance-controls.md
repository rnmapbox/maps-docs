---
id: guidance-controls
sidebar_position: 7
title: "Guidance controls: stops, simulation speed, voice and screen"
sidebar_label: Guidance controls
description: "Control a running @rnmapbox/navigation guidance session: advance between stops, simulation speed, voice volume and mute, and keeping the screen on."
---

These settings apply to the app's single navigation session, so they also affect `<NavigationView>` and `<RNNavigationView>`.

## Multi-stop routes

Each non-silent waypoint after the origin ends a leg, see [Waypoints](route-options.md#waypoints). When guidance arrives at one, `addArriveListener` reports `{ waypointIndex, isFinalDestination }` and guidance moves on to the next leg by itself.

To wait at each stop, e.g. until a delivery is confirmed, turn that off and advance yourself:

```tsx
import { Alert } from 'react-native';
import Navigation from '@rnmapbox/navigation';

Navigation.setAutoAdvanceLegs(false);

const subscription = Navigation.addArriveListener(({ isFinalDestination }) => {
  if (!isFinalDestination) {
    Alert.alert('Delivered?', undefined, [
      { text: 'Next stop', onPress: () => Navigation.advanceToNextLeg() },
    ]);
  }
});
```

- With auto-advance off, guidance stays at the waypoint until `advanceToNextLeg()`, simulated guidance included. Turning it back on while guidance waits doesn't move on; call `advanceToNextLeg()`.
- `advanceToNextLeg()` also skips a stop. Away from the waypoint, guidance reroutes from where it is; simulated guidance jumps to the start of the next leg and reroutes again.
- It does nothing on the last leg or without active guidance.

## Simulation speed

`Navigation.setSimulationSpeed(multiplier)` drives simulated guidance faster or slower than the route's expected speeds, e.g. `2` for twice as fast. The default is `1`. It applies to the running simulation and later ones, and throws unless `multiplier` is positive.

```tsx
Navigation.setSimulationSpeed(2);
await Navigation.startActiveGuidance(route, { simulate: true });
```

- Simulated locations keep reporting the route's speed, not multiplied.
- Higher speeds can make guidance go off route at sharp turns and reroute. This was seen at U-turns from 4× on Android and at 8× on iOS.
- On Android the simulation doesn't follow reroutes, so after one it can stop short of the destination.

## Voice

The SDK speaks voice instructions during any guidance.

| Function                 | Description                                                                         |
| ------------------------ | ----------------------------------------------------------------------------------- |
| `setVoiceMuted(muted)`   | Mutes or unmutes them. `<NavigationView>`'s mute button toggles the same setting.    |
| `isVoiceMuted()`         | Whether they're muted, by `setVoiceMuted` or the mute button.                       |
| `setVoiceVolume(volume)` | Volume from 0 to 1, relative to the device's media volume, clamped to that range. Independent of mute. Throws for `NaN`. |

On iOS the volume doesn't apply to instructions spoken by the system voice, which the SDK falls back to when the Mapbox voice is unavailable, e.g. offline.

For your own text to speech, mute the SDK and subscribe to `addVoiceInstructionListener`, which is called whether or not the SDK speaks.

## Keep screen on

Active guidance, `<NavigationView>`'s included, keeps the screen on. When guidance stops, the app's own idle timer (iOS) or keep screen on (Android) setting is restored. If the app manages that itself, turn it off:

```tsx
Navigation.setKeepScreenOn(false);
```

See [`Navigation`](api/Core/Navigation.md) in the API reference.
