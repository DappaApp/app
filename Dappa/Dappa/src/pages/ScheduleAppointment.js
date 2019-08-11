import React, { Component } from 'react';
import api from '../services/api';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal} from 'react-native';

// import { Container } from './styles';

export default class ScheduleAppointment extends Component {
  static navigationOptions = {
    title: 'Dappa',
    headerStyle: {
      backgroundColor: '#009B83',
    },
    headerTintColor: '#fff',
  };

  state = {
    name: '',
    email: '',
    tel: '',

    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  handleSubmit = async () => {
    const data = new FormData();
    data.append('name', this.state.name);
    data.append('email', this.state.email);
    data.append('tel', this.state.tel);

    await api.post('schedule', data)
    this.props.navigation.navigate('OkSchedule');
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.helloText}>Olá</Text>

<Text style={styles.introAppointment}>Vamos agendar sua consulta. {`\n`}É bem rápido, vamos lá?</Text>

<TextInput
  placeholder="Nome Completo"
  placeholderTextColor="#999"
  autoCapitalize="none"
  autoCorrect={true}
  keyboardAppearance={'default'}
  returnKeyType="done"
  value={this.state.name}
  onChangeText={name => this.setState({ name })}
  style={styles.input}
  />
  
  <TextInput
    placeholder="E-mail"
    placeholderTextColor="#999"
    autoCapitalize="none"
    autoCorrect={false}
    keyboardAppearance={'default'}
    returnKeyType="done"
    keyboardType={'email-address'}
    value={this.state.email}
    onChangeText={email => this.setState({ email })}
    style={styles.input}
  />

  <TextInput
    placeholder="Telefone"
    placeholderTextColor="#999"
    autoCapitalize="none"
    autoCorrect={false}
    keyboardAppearance={'default'}
    returnKeyType="done"
    keyboardType={'number-pad'}
    maxLength={11}
    value={this.state.tel}
    onChangeText={tel => this.setState({ tel })}
    style={styles.input}
  />

  

  <TouchableOpacity style={styles.appointmentButton} onPress={this.handleSubmit}>
    <Text style={styles.appointmentButtonText }>Agendar Consulta</Text>
  </TouchableOpacity>

<View style={styles.footer}>
  <TouchableOpacity style={styles.knowDappaButton} onPress={() => {
    this.setModalVisible(true)
  }}>
    <Text style={styles.knowDappa}>Conheça a Dappa</Text>
  </TouchableOpacity>
  </View>

              <View style={{marginTop: 22}}>
                <Modal
                  animationType="slide"
                  transparent={false}
                  visible={this.state.modalVisible}
                >
                  <View style={{marginTop: 22}}>
                    <View>
                      <Text style={styles.helloText}>Conheça a Dappa</Text>
                      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel lobortis erat. Vivamus odio velit, pellentesque et magna vel, bibendum malesuada quam. In magna nulla, suscipit a sollicitudin facilisis, hendrerit sed massa. Donec erat est, varius quis finibus scelerisque, dapibus eu odio. Fusce vehicula nec mauris ut ultrices. Morbi id tristique dolor, quis aliquet nisl. Nulla posuere neque pellentesque, bibendum lectus ut, mollis orci. Vivamus consectetur malesuada nunc vel blandit.{`\n \n`}

Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam eleifend ultricies. Donec cursus, enim a sodales pulvinar, lacus arcu tincidunt quam, quis malesuada odio lectus in arcu. Etiam eleifend bibendum augue ac bibendum. Vivamus at ultrices nisl. Donec luctus luctus consectetur.</Text>
                      <TouchableOpacity onPress={() => {
                        this.setModalVisible(!this.state.modalVisible);
                      }}>
                        <Text>Hide</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Modal>
              </View>
      
      </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  helloText: {
    fontSize: 30,
    color: '#009B83',
    textAlign: "center"
  },  
  introAppointment: {
    color: '#999',
    textAlign: 'center',
    paddingBottom: 30
  },  
  input: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    marginTop: 10,
    fontSize: 16,
  },
  appointmentButton: {
    backgroundColor: '#009B83',
    borderRadius: 4,
    height: 42,
    marginTop: 15,

    justifyContent: 'center',
    alignItems: 'center',
  },
  appointmentButtonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#FFF',
  },
  footer: {
    alignItems: 'center',
  },
  knowDappaButton: {
    top: 190,
  },
  knowDappa: {
    textAlign: 'center',
    color: '#009B83'
  }
});