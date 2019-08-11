import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import api from '../services/api';

export default class Feed extends Component {
  static navigationOptions = {
    title: 'Ultimos Dados',
    headerStyle: {
      backgroundColor: '#009B83'
    },
    headerTintColor: '#FFF'
  };

  state = {
    feed: [],
  };

  async componentDidMount() {
    //this.registerToSocket();

    const response = await api.get('schedule');
    this.setState({ feed: response.data });
  }

  render() {
    return(
      <View>
        <View style={styles.row}>
          
        </View>
        <FlatList 
          data={this.state.feed}
          keyExtractor={schedules => schedules._id}
          renderItem={({ item }) => (
            <View style={styles.container}>
              <View style={styles.feedItem}>
                  <Text style={styles.listTitle}>Nome</Text>
                  <Text style={styles.listItem}>{item.name}</Text>

                  <Text style={styles.listTitle}>Email</Text>
                  <Text style={styles.listItem}>{item.email}</Text>

                  <Text style={styles.listTitle}>Telefone</Text>
                  <Text style={styles.listItem}>{item.tel}</Text>
              </View>  
            </View> 
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f0f0' },
  titleFeed: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginTop: 20 },
  feedItem: { marginTop: 20, marginLeft: 5, marginRight: 5, paddingLeft: 10, paddingBottom: 10, backgroundColor: '#FFF', borderRadius: 7, },
  row: { flexDirection: 'row' },
  listTitle: { color: '#696969', fontSize: 20, fontWeight: 'bold', paddingTop: 10 },
  listItem: { fontSize: 16, color: '#096' }
});
