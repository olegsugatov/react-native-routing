import React, { Component } from 'react';
import { Navigator, Button, StyleSheet, Text, View } from 'react-native';
import Home from './Home';
import About from './About';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.renderScene = this.renderScene.bind(this)
  }

  renderScene(route, navigator) {
    if(route.name === 'homePage') {
      return <Home navigator={navigator}/>
    } else if (route.name === 'aboutPage') {
      return <About navigator={navigator} text={route.text}/>
    }
  }

  render() {
    return (
        <Navigator 
          initialRoute={{name: 'homePage'}}
          renderScene={this.renderScene}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
