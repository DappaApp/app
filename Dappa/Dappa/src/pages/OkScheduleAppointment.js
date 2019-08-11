import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import api from '../services/api';

export default class pages extends Component {
    static navigationOptions = {
        header: null
    }

  render() {
    return( 
    <View style={styles.container}>
        <Image source={require('../assets/iconOk2.png')} style={styles.iconOk} />
        <Text style={styles.helloText}>Tudo Certo</Text>
        <Text style={styles.introAppointment}>Em alguns instantes entratemos em contato com você !</Text>
    </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: '#009B83',
        alignItems: 'center',
        justifyContent: 'center',
      },
      iconOk: {
         marginBottom: 30
      },
      helloText: {
        fontSize: 30,
        color: '#FFF',
        textAlign: "center"
      },  
      introAppointment: {
        color: '#FFF',
        textAlign: 'center',
        paddingTop: 10
      },  
})
