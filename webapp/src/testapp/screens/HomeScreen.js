import React from 'react';
import { StyleSheet, Text, View, Button , Image, ScrollView, Dimensions  } from 'react-native';
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
                <View style={styles.header}>
                <Text style={styles.title}>Musea</Text>
                </View>
                {this.renderMusea()}
            <Text>Hi</Text>
            </View>
            
        );
        
    }
}

export default HomeScreen;

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const styles = StyleSheet.create({
    test: {
        color: 'red',
    },
    title:{
        color: 'white',
    },
    header: {
        flex: 1,
        backgroundColor: '#47054E',
        height: 200,
        width: width,
        overflow: 'hidden',
        position: 'relative',
        borderBottomLeftRadius: 20,
    }
  });