import React from 'react';
import { StyleSheet, Text, View, Button , Image, ScrollView } from 'react-native';
import api from '../config/api';




class HomeScreen extends React.Component {
        state = {
        data: []
        }

    getMusea() {
        fetch(`http://192.168.1.147:8002/api/v1/musea`)
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
      this.getMusea();
    }
    
    renderMusea() {
        return this.state.data.map((musea, key) =>{
            return(
                <View key={key}>
                    <Text>{musea['name']}</Text>
                    <Text >{musea['location']}</Text>
                </View>
            )
        })
    }
    render(){
        return (
            <View>
                <Text>Musea</Text>
                {this.renderMusea()}
            <Text>Hi</Text>
            </View>
            
        );
        
    }
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      paddingTop: 50,
      paddingBottom: 0,
    },
    title: {
        alignItems: 'center',

    }

    
  });