---
custom_edit_url: https://github.com/rnmapbox/maps/blob/main/src/components/BackgroundLayer.tsx
---
<!-- This file was autogenerated from BackgroundLayer.tsx do not modify -->

  Mapbox spec: [background](https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#background)
  

```tsx
import { BackgroundLayer } from '@rnmapbox/maps';

BackgroundLayer

```


## props

  
### id

```tsx
string
```
_required_
A string that uniquely identifies the layer in the style to which it is added.


  
### existing

```tsx
boolean
```
The id refers to en existing layer in the style. Does not create a new layer.


  
### sourceID

```tsx
string
```
The source from which to obtain the data to style.
If the source has not yet been added to the current style, the behavior is undefined.
Inferred from parent source only if the layer is a direct child to it.

  _defaults to:_ `MapboxGL.StyleSource.DefaultSourceID`

  
### sourceLayerID

```tsx
string
```
Identifier of the layer within the source identified by the sourceID property from which the receiver obtains the data to style.


  
### aboveLayerID

```tsx
string
```
Inserts a layer above aboveLayerID.


  
### belowLayerID

```tsx
string
```
Inserts a layer below belowLayerID


  
### layerIndex

```tsx
number
```
Inserts a layer at a specified index


  
### filter

```tsx
FilterExpression
```
Filter only the features in the source layer that satisfy a condition that you define


  
### minZoomLevel

```tsx
number
```
The minimum zoom level at which the layer gets parsed and appears.


  
### maxZoomLevel

```tsx
number
```
The maximum zoom level at which the layer gets parsed and appears.


  
### style

```tsx
BackgroundLayerStyleProps
```
Customizable style attributes


  






## styles

* <a href="#visibility">visibility</a><br/>
* <a href="#backgroundcolor">backgroundColor</a><br/>
* <a href="#backgroundpattern">backgroundPattern</a><br/>
* <a href="#backgroundopacity">backgroundOpacity</a><br/>

___

### visibility
Name: `visibility`

Mapbox spec: [visibility](https://docs.mapbox.com/style-spec/reference/layers/#layout-background-visibility)

#### Description
Whether this layer is displayed.

#### Type
`enum`
#### Default Value
`visible`

#### Supported Values
**visible** - The layer is shown.<br />
**none** - The layer is not shown.<br />



___

### backgroundColor
Name: `backgroundColor`

Mapbox spec: [background-color](https://docs.mapbox.com/style-spec/reference/layers/#paint-background-background-color)

#### Description
The color with which the background will be drawn.

#### Type
`color`
#### Default Value
`#000000`


#### Disabled By
`backgroundPattern`

#### Expression

Parameters: `zoom`
___

### backgroundColorTransition
Name: `backgroundColorTransition`

#### Description

The transition affecting any changes to this layer’s backgroundColor property.

#### Type

`{ duration, delay }`

#### Units
`milliseconds`

#### Default Value
`{duration: 300, delay: 0}`


___

### backgroundPattern
Name: `backgroundPattern`

Mapbox spec: [background-pattern](https://docs.mapbox.com/style-spec/reference/layers/#paint-background-background-pattern)

#### Description
Name of image in sprite to use for drawing an image background. For seamless patterns, image width and height must be a factor of two (2, 4, 8, ..., 512). Note that zoomDependent expressions will be evaluated only at integer zoom levels.

#### Type
`resolvedImage`


#### Expression

Parameters: `zoom`

___

### backgroundOpacity
Name: `backgroundOpacity`

Mapbox spec: [background-opacity](https://docs.mapbox.com/style-spec/reference/layers/#paint-background-background-opacity)

#### Description
The opacity at which the background will be drawn.

#### Type
`number`
#### Default Value
`1`

#### Minimum
`0`


#### Maximum
`1`

#### Expression

Parameters: `zoom`
___

### backgroundOpacityTransition
Name: `backgroundOpacityTransition`

#### Description

The transition affecting any changes to this layer’s backgroundOpacity property.

#### Type

`{ duration, delay }`

#### Units
`milliseconds`

#### Default Value
`{duration: 300, delay: 0}`

