---
title: Raster Source tile requests
tags: [RasterSource, RasterSource#prefetchZoomDelta, RasterSource#tileNetworkRequestsDelay]
custom_props:
  example_rel_path: FillRasterLayer/RasterSourceTileRequests.js
  snack_supported: false
custom_edit_url: https://github.com/rnmapbox/maps/tree/master/example/src/examples/FillRasterLayer/RasterSourceTileRequests.js
---

Fetches only the tiles of the current zoom level (no parent tiles as a placeholder) and waits 200 ms
before requesting tiles while the map pans, so tiles that leave the screen during a fast pan are
never requested. Watch the network log while panning to compare with the Raster Source example.


```jsx
import React from 'react';
import { MapView, RasterLayer, RasterSource, Camera } from '@rnmapbox/maps';

const styles = {
  matchParent: { flex: 1 },
};

export default function RasterSourceTileRequestsExample() {
  return (
    <MapView style={styles.matchParent}>
      <Camera
        defaultSettings={{
          centerCoordinate: [-74.00597, 40.71427],
          zoomLevel: 10,
        }}
      />
      <RasterSource
        id="osm-tiles"
        tileSize={256}
        prefetchZoomDelta={0}
        tileNetworkRequestsDelay={200}
        tileUrlTemplates={['https://tile.openstreetmap.org/{z}/{x}/{y}.png']}
        attribution="© OpenStreetMap contributors"
      />
      <RasterLayer
        id="osm-tiles-layer"
        sourceID="osm-tiles"
        style={{ rasterOpacity: 0.85 }}
      />
    </MapView>
  );
}


```

}

