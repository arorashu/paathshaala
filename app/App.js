import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Images = [
  {
    uri: "https://i.imgur.com/mxgtWKt.jpg",
    label: "Cat on a blue blanket"
  },
];

export default class App extends React.Component {

  state = {
    authenticated: 0
  }



  render() {
    return (
      <View style={styles.container}>
        <Text>PaathShaala App </Text>
        <View style={styles.box}>
          <Text>Login</Text>
        </View>
        <View>
          <Image source={{ uri: Images[0].uri }}
            style={styles.image}>
          </Image>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: 'green',
    borderWidth: 2,
    borderColor: 'steelblue',
    borderRadius: 20,
  },
  image: {
    flex: 2,
    width: 100,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
});
