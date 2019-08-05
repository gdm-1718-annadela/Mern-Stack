import React from 'react';
import { StyleSheet, Text, View, Button , Image, ScrollView, Alert } from 'react-native';

import Card from '../components/Card';
class HomeScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            dataSource: null,
        }
    }

   async componentDidMount() {
        return await fetch("http://127.0.0.1:8002/api/v1/musea")
            .then( (response) => response.json() )
            .then( (responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson,
                })

            })
            .catch((error) => {
                console.log(error)
                console.log('error hey')
            })
    }
    // getMusea();



    render() {

        return (
        <View style={styles.container}>
            <Text style={styles.title}>Overzicht</Text>
            <ScrollView style={styles.content}>
            {/* {Array.from(this.state.dataSource).map(museum => (
                <h1>{museum.name}</h1>
            ))} */}
            </ScrollView>
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