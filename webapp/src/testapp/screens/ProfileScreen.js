import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';


class ProfileScreen extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text>Profiel</Text>
        </View>
      );
    }
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      paddingTop: 50,
      paddingBottom: 0,
    }, 
  });