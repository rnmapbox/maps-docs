---
title: GetZoom
tags: [Camera, Camera#getZoom]
custom_props:
  example_rel_path: Camera/GetZoom.js
custom_edit_url: https://github.com/rnmapbox/maps/tree/master/example/src/examples/Camera/GetZoom.js
---

Get zoom level of map via Camera#getZoom


```jsx
import React from 'react';
import { Text } from 'react-native';
import MapboxGL from '@rnmapbox/maps';

import Bubble from '../common/Bubble';

const styles = {
  mapView: { flex: 1 },
};

class GetZoom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      zoom: 9,
    };

    this.onRegionDidChange = this.onRegionDidChange.bind(this);
  }

  async onRegionDidChange() {
    const zoom = await this._map.getZoom();
    this.setState({ zoom });
  }

  render() {
    return (
      <>
        <MapboxGL.MapView
          onRegionDidChange={this.onRegionDidChange}
          ref={(c) => (this._map = c)}
          onPress={this.onPress}
          style={styles.mapView}
        >
          <MapboxGL.Camera
            zoomLevel={9}
            centerCoordinate={[-73.970895, 40.723279]}
          />
        </MapboxGL.MapView>

        <Bubble>
          <Text>Current zoom: {this.state.zoom}</Text>
        </Bubble>
      </>
    );
  }
}

export default GetZoom;

```

}

