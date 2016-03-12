'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  TouchableHighlight,
  Text,
  TextInput,  
  View,
  Navigator
} from 'react-native';




var LoginScreen = React.createClass({

  getInitialState: function(){
    return {
      username: 'yan'
    };
  },
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React BloodDonation!
        </Text>
    
        
        <View style={styles.inputs}>
          <View style={styles.inputContainer}>                     
            <TextInput 
              style={[styles.input]}
              placeholder="Username"
              placeholderTextColor="#AAA"
              value={this.state.username}  
              onChange={this.onChange}            
            />
          </View>
        <View style={styles.inputContainer}>
         <TextInput
             password={true}
             style={[styles.input]}
             placeholder="Pasword"
             placeholderTextColor="#AAA"             
         />
        </View>
           <View style={styles.forgotContainer}>
               <Text style={styles.greyFont}>Forgot Password</Text>
           </View>
        </View>
        <TouchableHighlight
            style={styles.signin}
            underlayColor={'#328FE6'}
            onPress={this.onPress}
            >
            <Text style={styles.whiteFont}>LOGIN</Text>
        </TouchableHighlight>


               
      </View>
    );
  },
  onPress: function() {
    this.props.navigator.push({
      id: 'MainPage',
      username: 'yan',
    });
    
  },
  onChange: function(event) {
  this.setState({ username: event.nativeEvent.text });
  }
 
})

  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',


  },

  welcome: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  signup: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: .15
  },
  signin: {
        backgroundColor: '#FF0000',
        padding: 20,
        alignItems: 'center'
    },    
    inputContainer: {
      padding: 10,
      borderWidth: 1,
      borderBottomColor: '#FFF',
      borderColor: 'transparent'
    },
    forgotContainer: {
      alignItems: 'flex-end',
      padding: 15,
    },  

    greyFont: {
      color: '#D8D8D8'
    },

    whiteFont: {
      color: '#FFF'
    }








});

module.exports = LoginScreen;