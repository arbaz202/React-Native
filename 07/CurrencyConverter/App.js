import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet, Text, View, SafeAreaView,
  TextInput, Alert,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';

const currencyPerRupee = {
  DOLLAR: 0.014,
  EURO: 0.012,
  POUND: 0.011,
  RUBEL: 0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  YEN: 1.54,
  DINAR: 0.0043,
  BITCOIN: 0.0000041
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      resultValue: "0.0"
    };
  }

  buttonPressed = currency => {
    if (this.state.inputValue === "") {
      Alert.alert("Enter some value");
    }
    let result = parseFloat(this.state.inputValue) * currencyPerRupee[currency];

    this.setState({ resultValue: result.toFixed(2) });
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress= {Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <View style={styles.screenview}>
          <View style={styles.resultview}>
            <Text style={styles.resultvalues}>{this.state.resultValue}</Text>
          </View>

          <View style={styles.inputValue}>
            <TextInput
              style={styles.input}
              selectionColor="#fff"
              keyboardType="numeric"
              placeholder="Enter value"
              value={this.state.inputValue}
              onChangeText={inputValue => this.setState({
                inputValue
              })}
            />
          </View>
          <View style={styles.convertContainer}>
          <TouchableOpacity
                onPress={() => this.buttonPressed("DOLLAR")}
                style={styles.convertButton}
              >
                <Text style={styles.convertText}>$</Text>
              </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.buttonPressed("YEN")}
              style={styles.convertButton}>
              <Text style={styles.convertText}>Yen

  </Text>

            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.buttonPressed("DINAR")}
              style={styles.convertButton}>
              <Text style={styles.convertText}>Dinar

  </Text>

            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.buttonPressed("BITCOIN")}
              style={styles.convertButton}>
              <Text style={styles.convertText}>Bitty

  </Text>

            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.buttonPressed("EURO")}
              style={styles.convertButton}>
              <Text style={styles.convertText}>Euro

  </Text>

            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.buttonPressed("POUND")}
              style={styles.convertButton}>
              <Text style={styles.convertText}>Pound

  </Text>

            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.buttonPressed("AUSDOLLAR")}
              style={styles.convertButton}>
              <Text style={styles.convertText}>Ausdollar

  </Text>

            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.buttonPressed("CANDOLLAR")}
              style={styles.convertButton}>
              <Text style={styles.convertText}>Candollar

  </Text>

            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.buttonPressed("RUBEL")}
              style={styles.convertButton}>
              <Text style={styles.convertText}>Rubel

  </Text>

            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#535C68',
    marginTop: 35
  },
  screenview: {
    flex: 1,

  },
  resultview: {
    height: 70,
    marginTop: 25,
    justifyContent: "center",
    borderColor: "#c1c1c1",
    backgroundColor: "#0A79DE",
    alignItems: "center",
    borderWidth: 2

  },
  resultvalues: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff"

  },
  inputValue: {
    height: 70,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#c1c1c1",
    borderWidth: 2,
    backgroundColor: "#0A79DE"
  },
  input: {
    color: "#fff",
    fontSize: 30
  },
  convertContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 30,
    borderColor: "#c1c1c1",
    borderWidth: 2
  },
  convertButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0A79DF",
    height: 100,
    borderColor: "#c1c1c1",
    borderWidth: 2,
    width: "33.3%"


  },
  convertText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold"
  },

});
