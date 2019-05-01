import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ButtonBasics from './buttons'
// import axios from 'axios'

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
        list:[]
    }

}
componentDidMount() {
    // axios.get(`https://rsvp-dct.herokuapp.com/events`)
    //   .then(res => {
    //     const list = res.data;
    //     this.setState({ list });
    //   }).catch(err => console.log(err))
    return fetch('https://rsvp-dct.herokuapp.com/events')
    .then((response) => response.json())
    .then((responseJson) => {

      this.setState({
        list: responseJson,
      })

    })
    .catch((error) =>{
      console.error(error);
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to DCT Academy</Text>
        <ButtonBasics />
        
        {this.state.list.map((event, index) => 
        <Text key={index+1}>{event.name}</Text>
        )}
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
