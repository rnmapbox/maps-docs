---
custom_edit_url: https://github.com/rnmapbox/maps/blob/main/src/components/NativeUserLocation.tsx
---
<!-- This file was autogenerated from NativeUserLocation.tsx do not modify -->

  

```tsx
import { NativeUserLocation } from '@rnmapbox/maps';

NativeUserLocation

```


## props

  
### androidRenderMode

```tsx
'normal' | 'compass' | 'gps'
```
Android render mode.

 - normal: just a circle
 - compass: triangle with heading
 - gps: large arrow

@deprecated use `puckBearing` for source and `bearingImage` for image
@platform android


  
### puckBearing

```tsx
'heading' | 'course'
```
The bearing of the puck.

 - heading: Orients the puck to match the direction in which the device is facing.
 - course: Orients the puck to match the direction in which the device is moving.


  
### puckBearingEnabled

```tsx
boolean
```
Whether the puck rotates to track the bearing source.


  
### iosShowsUserHeadingIndicator

```tsx
boolean
```
iOS only. A Boolean value indicating whether the user location annotation may display a permanent heading indicator.

@platform ios
@deprecated use `puckBearingEnabled={true} puckBrearing="heading"` instead


  
### topImage

```tsx
string
```
The name of image to use as the top layer for the location indicator. Images component should define this image.

[Custom Native UserLocation](../examples/UserLocation/CustomNativeUserLocation)
  
### bearingImage

```tsx
string
```
The name of image to use as the middle layer for the location indicator. Images component should define this image.


  
### shadowImage

```tsx
string
```
The name of image to use as the background for the location indicator. Images component should define this image.


  
### scale

```tsx
T | Expression
```
The size of the images, as a scale factor applied to the size of the specified image. Supports expressions based on zoom.

@example
["interpolate",["linear"], ["zoom"], 10.0, 1.0, 20.0, 4.0]]
@example
2.0

[Custom Native UserLocation](../examples/UserLocation/CustomNativeUserLocation)
  
### visible

```tsx
boolean
```
Whether location icon is visible, defaults to true


  





