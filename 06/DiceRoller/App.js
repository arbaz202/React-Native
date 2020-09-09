import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity
} from "react-native";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      uri: require("./src/images/dice1.png"),
      urii: require("./src/images/dice1.png")
    };
  }

  getRandomValue = () => {
    return (
      
      Math.floor(Math.random() * 6) +1
    );
  };

  playButtonPressed = () => {
   
    var rNumber= this.getRandomValue();
    var rNumber2= this.getRandomValue();
    
    switch(rNumber){
      case 1:
      this.setState({uri:require("./src/images/dice1.png")})
      break;
      case 2:
      this.setState({uri:require("./src/images/dice2.png")})
      break;
      case 3:
      this.setState({uri:require("./src/images/dice3.png")})
      break;
      case 4:
      this.setState({uri:require("./src/images/dice4.png")})
      break;
      case 5:
      this.setState({uri:require("./src/images/dice5.png")})
      break;
      case 6:
      this.setState({uri:require("./src/images/dice6.png")})
      break;
    }
    switch(rNumber2){
      case 1:
      this.setState({urii:require("./src/images/dice1.png")})
      break;
      case 2:
      this.setState({urii:require("./src/images/dice2.png")})
      break;
      case 3:
      this.setState({urii:require("./src/images/dice3.png")})
      break;
      case 4:
      this.setState({urii:require("./src/images/dice4.png")})
      break;
      case 5:
      this.setState({urii:require("./src/images/dice5.png")})
      break;
      case 6:
      this.setState({urii:require("./src/images/dice6.png")})
      break;
    }
  };

  render() {
    return (
      <View
        style={[styles.container]}
      >
        <Image source={this.state.uri} />
        <Image source={this.state.urii} />
        
        <TouchableOpacity onPress={this.playButtonPressed}>
          <Text style={styles.text}>Play Game</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E74292",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 30,
    backgroundColor: "#BB2CD9",
    paddingVertical: 10,
    paddingHorizontal: 40,
    color: "#FFFFFF",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#FFFFFF",
    marginTop:60
  }
});
