import React from 'react';
import { StyleSheet, Text, View, Button, TextInput,TouchableOpacity } from 'react-native';

class ValidateScreen extends React.Component {
  state = {
    data: [],
    text: '',
    ticket: ''
    }

getTicket() {
    fetch(`http://192.168.1.147:8002/api/v1/order`)
    .then((response) => {return response.json()})
    .then((responseJson) => {
      //  console.log(responseJson);
       this.setState({
          data: responseJson
       })
    })
    .catch((error) => {
        console.log('error');
        console.error(error);
    });
  }
componentDidMount() {
  this.getTicket();
}

handleText = (newtext) => {
  this.setState({text: newtext})
}


renderTicket(text) {
  // console.log(text)
  return this.state.data.map((order, key) =>{
    // console.log(text === order['name'])
      this.result(order, text)
      order['name']==text?console.log(order['name']):null
    })
      
  }

    render() {
      return (
        <View style={styles.container}>
          <Text>Validate Screen</Text>
          <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}onChangeText={this.handleText} value={this.state.text}/>
          <TouchableOpacity
               onPress = {
                  () => this.renderTicket(this.state.text)
               }>
               <Text> Submit </Text>
            </TouchableOpacity>
            {this.result}
        </View>
      );
    }
}

export default ValidateScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      paddingTop: 50,
      paddingBottom: 0,
    },
  });