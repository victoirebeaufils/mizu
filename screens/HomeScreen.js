
import MapView from 'react-native-maps';
import React from 'react';
import {View,
  StyleSheet, Button
} from 'react-native';

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
  button: {
    position: 'absolute',
    width: 20,
    height: 20,
    top: 10,
    left: 10,
    zIndex: 10
  },
  map: {
    position: 'absolute',
    flex:1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex:1}}>
      <MapView
        style={ styles.map }
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <View
        style={{
            position: 'absolute',//use absolute position to show button on top of the map
            top: '50%', //for center align
            alignSelf: 'flex-end' //for align to right
        }}
    >
        <Button title="Button"/>
    </View>
      </View>
    );
  }

}

export default HomeScreen;