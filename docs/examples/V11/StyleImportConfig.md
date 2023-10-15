---
title: Style Import Config
tags: [StyleImport, v11]
custom_props:
  example_rel_path: src/examples/V11/StyleImportConfig.tsx
custom_edit_url: https://github.com/rnmapbox/maps/tree/master/example/src/examples/V11/StyleImportConfig.tsx
---

# Style Import Config

This example shows how to change style import configs - v11 only.


```jsx
import React, { useState } from 'react';
import { Button } from 'react-native';
import { MapView, StyleImport, Camera } from '@rnmapbox/maps';

const StyleImportConfig = () => {
  const [lightPreset, setLightPreset] = useState('night');
  const nextLightPreset = lightPreset === 'night' ? 'day' : 'night';
  return (
    <>
      <Button
        title={`Change to ${nextLightPreset}`}
        onPress={() => {
          setLightPreset(nextLightPreset);
        }}
      />
      <MapView
        style={styles.mapView}
        styleURL={'mapbox://styles/mapbox/standard-beta'}
      >
        <Camera
          defaultSettings={{ centerCoordinate: [-74.00597, 40.71427] }}
          centerCoordinate={[-74.00597, 40.71427]}
          animationDuration={0}
          zoomLevel={18}
          pitch={33}
        />
        <StyleImport
          id="basemap"
          existing
          config={{
            lightPreset: lightPreset,
          }}
        />
      </MapView>
    </>
  );
};

const styles = {
  mapView: { flex: 1 },
};


```

}

