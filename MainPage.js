'use strict';

var React = require('react-native');
var {
  Component,
  View,
  Text,
  TextInput
} = React;

class MainPage extends Component {
  render() {
      return(
          <View> 
           <Text>Logado!</Text>                    
            <TextInput               
              placeholder="Username"
              placeholderTextColor="#AAA"
              value={this.props.navigator.username} 
            />
          </View>

      );
  }
  
}



module.exports = MainPage;