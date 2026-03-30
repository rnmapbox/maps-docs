---
custom_edit_url: https://github.com/rnmapbox/maps/blob/main/src/components/Rain.tsx
---

  

```tsx
import { Rain } from '@rnmapbox/maps';

Rain

```


## props

  
### style

```tsx
RainLayerStyleProps
```
Rain particle effect style properties.

@note The default `color` and `vignetteColor` values use `measure-light("brightness")`
expressions that are only available in Mapbox Standard-based styles
(`mapbox://styles/mapbox/standard`, `mapbox://styles/mapbox/standard-satellite`).
When using legacy or custom styles, set `color` and `vignetteColor` explicitly to
avoid "Brightness is unavailable in the current evaluation context" warnings and
invisible rain. For example: `color="#a8adbc" vignetteColor="#464646"`.


  






