import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

// Importing Lottie React Native
import Animation from 'lottie-react-native';

// Importing Animation file for iOS
import anim from './android/app/src/main/assets/soda_loader.json';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  componentDidMount() {
    this.animation.play();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Lottie Animations on react-native is like</Text>
        <Text style={styles.wow}>WOW</Text>
        <View>
          <Animation
            ref={animation => {
              this.animation = animation;
            }}
            style={{
              width: 150,
              height: 150
            }}
            loop={true}
            source="wow.json"
          />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff'
  },
  wow:{
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color:'#ffffff',
    fontFamily:'monospace'
  }
});
