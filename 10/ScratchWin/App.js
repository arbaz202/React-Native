import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions,Alert } from 'react-native';
import { Button } from 'native-base'
import { FontAwesome } from '@expo/vector-icons'

var itemArray = new Array(25).fill('empty')
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomNumber: "",
      count:0
    };
  }
  componentDidMount() {
    this.setState({randomNumber:this.generateRandomNumber()})

  }

  generateRandomNumber = () => {
    let randomNumber = Math.floor(Math.random() * 32);
    this.setState({ randomNumber: randomNumber, isScratched: true });
    return randomNumber;
  }

  scratchItem = (itemNumber) => {
    if (this.state.randomNumber === itemNumber) {
      itemArray[itemNumber] = "lucky"
      Alert.alert(
        'Hurray!You Win..'
     )

    }else{
      itemArray[itemNumber] = "unlucky"
      
      
      this.state.count += 1
      if (this.state.count === 5){
        Alert.alert(
          'Sorry!You Exceed your limit'
       )
        this.resetGame()
        

      }
      
    }
    this.forceUpdate();

  }
  scratchItemText = (itemNumber) => {
    if (itemArray[itemNumber] === "lucky") {
      return "Hurray!You Win"
  }else if (this.state.count === 5){
    return "Sorry!Max Tries Exceed"}
    }

  scratchItemIcon = (itemNumber) => {

    if (itemArray[itemNumber] === "lucky") {
      
        
      return "dollar"
      
      

    }else if (itemArray[itemNumber] === "unlucky"){
      

      return "frown-o"

    }else{
      return "circle"
    }
    
  }

  scratchItemColor = (itemNumber) => {

    if (itemArray[itemNumber] === "lucky") {
      return "green"
      

    }else if (itemArray[itemNumber] === "unlucky"){
      return "red"

    }else{
      return "blue"
    }
    
  }




  showAllItem = () => {
    itemArray.fill("unlucky")
    itemArray[this.state.randomNumber] = 'lucky'
    this.forceUpdate();

  }

  resetGame = () => {
    this.setState({randomNumber:this.generateRandomNumber()},
    ()=> {
      itemArray.fill("empty")
      this.state.count = 0
      this.forceUpdate();

    })

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
    <Text style={styles.topText}>Scratch and win! </Text>
        
        
      </View>
      <View style={styles.topBar}>
    <Text style={styles.topText}>Life Count {this.state.count} out of 5</Text>
  
        
        
      </View>
      <View style={styles.grid}>
        
     

        <View style={styles.row}>
        <TouchableOpacity 
        style={styles.item}
        onPress={() => {this.scratchItem(0)}}>
          <FontAwesome 
          name = {this.scratchItemIcon(0)}
          size = {40}
          color = {this.scratchItemColor(0)}
          
          />
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.item}
        onPress={() => {this.scratchItem(1),this.state.count+1}}>
          <FontAwesome 
          name = {this.scratchItemIcon(1)}
          size = {40}
          color = {this.scratchItemColor(1)}
          
          />
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.item}
        onPress={() => {this.scratchItem(2),this.state.count += 1}}>
          <FontAwesome 
          name = {this.scratchItemIcon(2)}
          size = {40}
          color = {this.scratchItemColor(2)}
          
          />
        </TouchableOpacity>
        
        <TouchableOpacity 
        style={styles.item}
        onPress={() => {this.scratchItem(3)}}>
          <FontAwesome 
          name = {this.scratchItemIcon(3)}
          size = {40}
          color = {this.scratchItemColor(3)}
          
          />
        </TouchableOpacity>

        
        <TouchableOpacity 
        style={styles.item}
        onPress={() => {this.scratchItem(4)}}>
          <FontAwesome 
          name = {this.scratchItemIcon(4)}
          size = {40}
          color = {this.scratchItemColor(4)}
          
          />
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.item}
        onPress={() => {this.scratchItem(5)}}>
          <FontAwesome 
          name = {this.scratchItemIcon(5)}
          size = {40}
          color = {this.scratchItemColor(5)}
          
          />
        </TouchableOpacity>
        </View>
        
        <View style={styles.row}>
        <TouchableOpacity 
        style={styles.item}
        onPress={() => {this.scratchItem(6)}}>
          <FontAwesome 
          name = {this.scratchItemIcon(6)}
          size = {40}
          color = {this.scratchItemColor(6)}
          
          />
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.item}
        onPress={() => {this.scratchItem(7)}}>
          <FontAwesome 
          name = {this.scratchItemIcon(7)}
          size = {40}
          color = {this.scratchItemColor(7)}
          
          />
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.item}
        onPress={() => {this.scratchItem(8)}}>
          <FontAwesome 
          name = {this.scratchItemIcon(8)}
          size = {40}
          color = {this.scratchItemColor(8)}
          
          />
        </TouchableOpacity>
        
        <TouchableOpacity 
        style={styles.item}
        onPress={() => {this.scratchItem(9)}}>
          <FontAwesome 
          name = {this.scratchItemIcon(9)}
          size = {40}
          color = {this.scratchItemColor(9)}
          
          />
        </TouchableOpacity>

        
        <TouchableOpacity 
        style={styles.item}
        onPress={() => {this.scratchItem(10)}}>
          <FontAwesome 
          name = {this.scratchItemIcon(10)}
          size = {40}
          color = {this.scratchItemColor(10)}
          
          />
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.item}
        onPress={() => {this.scratchItem(11)}}>
          <FontAwesome 
          name = {this.scratchItemIcon(11)}
          size = {40}
          color = {this.scratchItemColor(11)}
          
          />
        </TouchableOpacity>
        </View>
        
        <View style={styles.row}>
        <TouchableOpacity 
        style={styles.item}
        onPress={() => {this.scratchItem(12)}}>
          <FontAwesome 
          name = {this.scratchItemIcon(12)}
          size = {40}
          color = {this.scratchItemColor(12)}
          
          />
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.item}
        onPress={() => {this.scratchItem(13)}}>
          <FontAwesome 
          name = {this.scratchItemIcon(13)}
          size = {40}
          color = {this.scratchItemColor(13)}
          
          />
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.item}
        onPress={() => {this.scratchItem(14)}}>
          <FontAwesome 
          name = {this.scratchItemIcon(14)}
          size = {40}
          color = {this.scratchItemColor(14)}
          
          />
        </TouchableOpacity>
        
        <TouchableOpacity 
        style={styles.item}
        onPress={() => {this.scratchItem(15)}}>
          <FontAwesome 
          name = {this.scratchItemIcon(15)}
          size = {40}
          color = {this.scratchItemColor(15)}
          
          />
        </TouchableOpacity>

        
        <TouchableOpacity 
        style={styles.item}
        onPress={() => {this.scratchItem(16)}}>
          <FontAwesome 
          name = {this.scratchItemIcon(16)}
          size = {40}
          color = {this.scratchItemColor(16)}
          
          />
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.item}
        onPress={() => {this.scratchItem(17)}}>
          <FontAwesome 
          name = {this.scratchItemIcon(17)}
          size = {40}
          color = {this.scratchItemColor(17)}
          
          />
        </TouchableOpacity>
        </View>
        
        <View style={styles.row}>
        <TouchableOpacity 
        style={styles.item}
        onPress={() => {this.scratchItem(18)}}>
          <FontAwesome 
          name = {this.scratchItemIcon(18)}
          size = {40}
          color = {this.scratchItemColor(18)}
          
          />
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.item}
        onPress={() => {this.scratchItem(19)}}>
          <FontAwesome 
          name = {this.scratchItemIcon(19)}
          size = {40}
          color = {this.scratchItemColor(19)}
          
          />
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.item}
        onPress={() => {this.scratchItem(20)}}>
          <FontAwesome 
          name = {this.scratchItemIcon(20)}
          size = {40}
          color = {this.scratchItemColor(20)}
          
          />
        </TouchableOpacity>
        
        <TouchableOpacity 
        style={styles.item}
        onPress={() => {this.scratchItem(21)}}>
          <FontAwesome 
          name = {this.scratchItemIcon(21)}
          size = {40}
          color = {this.scratchItemColor(21)}
          
          />
        </TouchableOpacity>

        
        <TouchableOpacity 
        style={styles.item}
        onPress={() => {this.scratchItem(22)}}>
          <FontAwesome 
          name = {this.scratchItemIcon(22)}
          size = {40}
          color = {this.scratchItemColor(22)}
          
          />
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.item}
        onPress={() => {this.scratchItem(23)}}>
          <FontAwesome 
          name = {this.scratchItemIcon(23)}
          size = {40}
          color = {this.scratchItemColor(23)}
          
          />
        </TouchableOpacity>
        </View>
        <View style={styles.row}>
        <TouchableOpacity 
        style={styles.item}
        onPress={() => {this.scratchItem(24)}}>
          <FontAwesome 
          name = {this.scratchItemIcon(24)}
          size = {40}
          color = {this.scratchItemColor(24)}
          
          />
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.item}
        onPress={() => {this.scratchItem(27)}}>
          <FontAwesome 
          name = {this.scratchItemIcon(27)}
          size = {40}
          color = {this.scratchItemColor(27)}
          
          />
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.item}
        onPress={() => {this.scratchItem(28)}}>
          <FontAwesome 
          name = {this.scratchItemIcon(28)}
          size = {40}
          color = {this.scratchItemColor(28)}
          
          />
        </TouchableOpacity>
        
        <TouchableOpacity 
        style={styles.item}
        onPress={() => {this.scratchItem(29)}}>
          <FontAwesome 
          name = {this.scratchItemIcon(29)}
          size = {40}
          color = {this.scratchItemColor(29)}
          
          />
        </TouchableOpacity>

        
        <TouchableOpacity 
        style={styles.item}
        onPress={() => {this.scratchItem(30)}}>
          <FontAwesome 
          name = {this.scratchItemIcon(30)}
          size = {40}
          color = {this.scratchItemColor(30)}
          
          />
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.item}
        onPress={() => {this.scratchItem(31)}}>
          <FontAwesome 
          name = {this.scratchItemIcon(31)}
          size = {40}
          color = {this.scratchItemColor(31)}
          
          />
        </TouchableOpacity>
        </View>
        
        <Button
        onPress={() => {
          this.showAllItem();
        }}
        full
        success
        style={styles.button}
        ><Text style={styles.btnText}>Show all Coupons</Text></Button>
        <Button
        onPress={() => {
          this.resetGame();
        }}
        full
        primary
        style={styles.button}
        ><Text style={styles.btnText}>Reset</Text></Button>
      </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  grid:{},
 
  row:{
    flexDirection:"row"
  },
  item:{
    alignItems:"center",
    padding:10,
    borderWidth:2,
    borderColor:"#000",
    width:60
  },
  button:{marginVertical:15},
  btnText:{color:"#fff",
fontSize:18},
topBar:{
  backgroundColor:"#0A3D62",
  height:50,
  width:Dimensions.get('window').width,
  justifyContent:"center",
  alignItems:"center",
  marginVertical:20

},
topText:{color:"#fff"},


});
