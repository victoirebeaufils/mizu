
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
  

  export default class Map extends React.Component {
  
    render() {
      return (
        <View>
          <MapView
            styles={styles.map}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
  
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      },
  });
  

