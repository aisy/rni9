import React from 'react'
import { View, StyleSheet } from 'react-native'
import Mapbox from '@react-native-mapbox-gl/maps' //import mapbox

Mapbox.setConnected(true);

const MapsApp = () => {

  Mapbox.setAccessToken("pk.eyJ1IjoiYWlzeW1yIiwiYSI6ImNrbGR2cmtmMDBtaW0ycHA3cjl1emM5M3YifQ.jSwFdbN-KK1sbyBLgwQ1yA");

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Mapbox.MapView
          style={styles.map}
        >
          <Mapbox.Camera
            zoomLevel={12}
            centerCoordinate={[106.84513, -6.21462]}
          />
        </Mapbox.MapView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    height: "100%",
    width: "100%",
  },
  map: {
    flex: 1
  }
});

export default MapsApp