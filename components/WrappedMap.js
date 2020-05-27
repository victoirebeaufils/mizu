
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import MapView,{ Callout, PROVIDER_GOOGLE} from 'react-native-maps';
  

  export default class WrappedMap extends React.Component {
  
    render() {

      async function getMarkers() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const markers = await response.json();
        setMarkers(markers);
      }
      return (
        <MapView styles={styles.map}><Callout>
                <View>
                    <Text>Lat:, Lon:</Text>
                    <Text>Magnitude: Depth:</Text>
                </View>
                </Callout>
            </MapView>
      );
    }
  }
  const styles = StyleSheet.create({
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      },
  });
  

