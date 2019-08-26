import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Dimensions, Image  } from 'react-native';
import api from '../config/api';
import Card from '../components/Card'




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
                
                <View style={styles.museum} key={key}>
                    <Text style={styles.test}>{musea['name']}</Text>
                    <Text >{musea['location']}</Text>
                </View>
            )
        })
    }
    render(){
        return (
            <View>
                <Text style={styles.header}>Musea</Text>
                {this.renderMusea()}
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
        backgroundColor: '#47054E',
        height: 200,
        fontSize: 30,
        color: 'white',
        borderBottomLeftRadius: 200
    },
    museum:{
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        height: 50,
    }
  });