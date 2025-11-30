---
custom_edit_url: https://github.com/rnmapbox/maps/blob/main/src/components/CameraGestureObserver.tsx
---

  

```tsx
import { CameraGestureObserver } from '@rnmapbox/maps';

CameraGestureObserver

```
CameraGestureObserver

Unified native observer optimized for onMapSteady.

## props

  
### quietPeriodMs

```tsx
number
```
Time in milliseconds to wait after last camera change before emitting 'steady' event.
Default is 200ms.

[Camera Gesture Observer](../examples/Map/CameraGestureObserver)
  
### maxIntervalMs

```tsx
number
```
Maximum time in milliseconds before emitting 'timeout' event during continuous activity.

[Camera Gesture Observer](../examples/Map/CameraGestureObserver)
  
### onMapSteady

```tsx
func
```
Callback when the map reaches a steady state (no active gestures or animations).
*signature:*`(event:{nativeEvent: OnMapSteadyEvent}) =&gt; void`

[Camera Gesture Observer](../examples/Map/CameraGestureObserver)
  






