---
title: Custom Icon
tags: [ShapeSource, ShapeSource#onPress, SymbolLayer, Images, SymbolLayer#iconImage]
custom_props:
  example_rel_path: SymbolCircleLayer/CustomIcon.tsx
custom_edit_url: https://github.com/rnmapbox/maps/tree/master/example/src/examples/SymbolCircleLayer/CustomIcon.tsx
---

Renders a symbol layer with custom icon defined using the Images component. Clicking a location on a map add a new icon.


```jsx
import React, { useRef, memo, useState } from 'react';
import { Text } from 'react-native';
import MapboxGL, {
  MapView,
  Camera,
  ShapeSource,
  SymbolLayer,
  Images,
} from '@rnmapbox/maps';
import { featureCollection, feature, point } from '@turf/helpers';

import Bubble from '../common/Bubble';
import type { ExampleWithMetadata } from '../common/ExampleMetadata';
import exampleIcon from '../../assets/example.png';

const styles = {
  icon: {
    iconImage: 'icon',
    iconAllowOverlap: true,
  },
};

const CustomIcon = memo(() => {
  const cameraRef = useRef<Camera>(null);
  const [stateFeatureCollection, setStateFeatureCollection] =
    useState<GeoJSON.FeatureCollection>(
      featureCollection([point([-73.970895, 40.723279])]),
    );

  const onPress = (e: GeoJSON.Feature) => {
    const aFeature = feature(e.geometry);
    aFeature.id = `${Date.now()}`;

    setStateFeatureCollection(
      featureCollection([...stateFeatureCollection.features, aFeature]),
    );
  };

  const onSourceLayerPress = (e: any) => {
    console.log(
      'You pressed a layer here are your features:',
      e.features,
      e.coordinates,
      e.point,
    );
  };

  return (
    <>
      <MapView
        style={{ flex: 1 }}
        styleURL={MapboxGL.StyleURL.Light}
        onPress={onPress}
      >
        <Camera
          ref={cameraRef}
          defaultSettings={{
            zoomLevel: 9,
            centerCoordinate: [-73.970895, 40.723279],
          }}
        />
        <ShapeSource
          id="symbolLocationSource"
          hitbox={{ width: 20, height: 20 }}
          onPress={(e) => onSourceLayerPress(e)}
          shape={stateFeatureCollection}
        >
          <SymbolLayer
            id="symbolLocationSymbols"
            minZoomLevel={1}
            style={styles.icon}
          />
          <Images images={{ icon: exampleIcon }} />
        </ShapeSource>
      </MapView>
      <Bubble>
        <Text>Tap on Map to add an icon</Text>
      </Bubble>
    </>
  );
});

export default CustomIcon;

```

![CustomIcon.png](./CustomIcon.png)}
