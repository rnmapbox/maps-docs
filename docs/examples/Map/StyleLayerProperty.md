---
title: Style Layer Property
tags: [MapView#setStyleLayerProperty]
custom_props:
  example_rel_path: Map/StyleLayerProperty.tsx
  snack_supported: false
custom_edit_url: https://github.com/rnmapbox/maps/tree/master/example/src/examples/Map/StyleLayerProperty.tsx
---
Toggles the visibility of the `building` layer of the default style with `setStyleLayerProperty`.

```jsx
import { useRef, useState } from 'react';
import { Button } from 'react-native';
import { Camera, MapView } from '@rnmapbox/maps';

import { type ExampleWithMetadata } from '../common/ExampleMetadata'; // exclude-from-doc

const StyleLayerProperty = () => {
  const mapRef = useRef<MapView>(null);
  const [visible, setVisible] = useState(true);

  const toggleBuildings = async () => {
    await mapRef.current?.setStyleLayerProperty(
      'building',
      'visibility',
      visible ? 'none' : 'visible',
    );
    setVisible(!visible);
  };

  return (
    <>
      <Button
        title={visible ? 'Hide buildings' : 'Show buildings'}
        onPress={toggleBuildings}
      />
      <MapView ref={mapRef} style={{ flex: 1 }}>
        <Camera centerCoordinate={[-74.005974, 40.712776]} zoomLevel={15} />
      </MapView>
    </>
  );
};

export default StyleLayerProperty;


```

}

