import React, { Component } from 'react';
import { StatusBar, Button, StyleSheet, Text, View } from 'react-native';

class Home extends Component {
	constructor(props) {
	  super(props);
	
	  this.navigate = this.navigate.bind(this)
	}

	navigate(name, text) {
		this.props.navigator.push({
			name,
			text
		});
	}

  render() {
    return (
      <View style={styles.container}>
      	<StatusBar
          barStyle="light-content"/>
        <Text >Homepage</Text>
        <Button
          onPress={()=> this.navigate('aboutPage', 'Hello Oleg!')}
          title="Go to Aboutpage"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
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

export default Home