---
custom_edit_url: https://github.com/rnmapbox/maps/blob/main/src/components/Style.tsx
---

  

```tsx
import { Style } from '@rnmapbox/maps';

Style

```
Style is a component that automatically adds sources / layers to the map using Mapbox GL Style Spec.
Only [`sources`](https://docs.mapbox.com/mapbox-gl-js/style-spec/sources) & [`layers`](https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/) are supported.
Other fields such as `sprites`, `glyphs` etc. will be ignored. Not all layer / source attributes from the style spec are supported, in general the supported attributes will be mentioned under https://github.com/rnmapbox/maps/tree/main/docs.

## props

  
### json

```tsx
MapboxJSON | URL
```
_required_
A JSON object conforming to the schema described in the Mapbox Style Specification , or a URL to such JSON.

[Style JSON](../examples/Map/StyleJson)
  






