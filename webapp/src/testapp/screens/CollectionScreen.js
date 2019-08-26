import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FormLabel, FormInput, FormValidationMessage, Input } from 'react-native-elements'

class OrderScreen extends React.Component {
  state = {
    data: []
    }

    getCollection() {
    fetch(`http://192.168.1.147:8002/api/v1/collections`)
    .then((response) => {return response.json()})
    .then((responseJson) => {
    //    console.log(responseJson);
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
  this.getCollection();
}

renderCollection() {
    return this.state.data.map((collection, key) =>{
        return(
            
            <View key={key}>
                <Text style={styles.test}>{collection['title']}</Text>
                <Text >{collection['location']}</Text>
            </View>
        )
    })
}
render(){
    return (
        <View>
            <Text style={styles.header}>Collections</Text>
            {this.renderCollection()}
        </View>
        
    );
}
}
export default OrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    paddingBottom: 0,
  },
});