---
custom_edit_url: https://github.com/rnmapbox/maps/blob/main/src/modules/location/locationManager.ts
---

  

```tsx
import { locationManager } from '@rnmapbox/maps';

locationManager

```
LocationManager is a singleton, see 



## methods
### setLocationEventThrottle(throttleValue)

Sets the period at which location events will be sent over the React Native bridge.<br/>The default is 0, aka no limit. [V10, iOS only]

#### arguments
| Name | Type | Required | Description  |
| ---- | :--: | :------: | :----------: |
| `throttleValue` | `Number` | `Yes` | event throttle value in ms. |



```javascript
locationManager.setLocationEventThrottle(500);
```



