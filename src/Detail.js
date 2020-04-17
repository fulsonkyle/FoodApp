import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native';

export default class Home extends Component{
    render(){
        return(
            <View style ={styles.container}>
                <View style={styles.header}>
                    <ImageBackground
                    source={require("./asset/header.png")}
                    style ={styles.imageBackground}
                    resizeMode="contain"
                    >

                    </ImageBackground>
                </View>
                <View style={styles.tabbar}>

                </View>
            </View>
        );
    }
}

const width = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
      marginTop: 20
  },
  tabbar: {
      flex: 1
  },
  imageBackground: {
    width: width *0.4,
    height: width* 0.4,
    alignItems:"center",
  }
});
