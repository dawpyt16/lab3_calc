import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: '0' };
  }



  onPress = (buttonValue: string) => {
    if(this.state.count == '0'){
        this.setState({
          count: buttonValue
        });
    }else{
        this.setState({
            count: this.state.count + buttonValue
        });
    }
  };

    onACPress = () => {
        this.setState({
             count: '0'
        });
    }

    onEQPress = () => {
        const text = this.state.count
        this.setState({
             count: eval(text)
        });
    }

  render() {
    const { count } = this.state;
    return (
      <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.wynikV}>
            <Text style={styles.wynikT}>{this.state.count}</Text>
        </View>
      </View>
        <View style={styles.row}>
            <TouchableOpacity style={styles.button} onPress={() => this.onACPress()}>
            <Text>AC</Text>
            </TouchableOpacity>
            <TouchableOpacity disabled={true} style={styles.button} onPress={() => this.onPress("1")}>
            <Text></Text>
            </TouchableOpacity>
            <TouchableOpacity disabled={true} style={styles.button} onPress={() => this.onPress("1")}>
            <Text></Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonB} onPress={() => this.onPress("/")}>
            <Text style={styles.textB}>/</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.row}>
            <TouchableOpacity style={styles.button} onPress={() => this.onPress("7")}>
            <Text>7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => this.onPress("8")}>
            <Text>8</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => this.onPress("9")}>
            <Text>9</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonB} onPress={() => this.onPress("*")}>
            <Text style={styles.textB}>X</Text>
            </TouchableOpacity></View>
        <View style={styles.row}>
            <TouchableOpacity style={styles.button} onPress={() => this.onPress("4")}>
            <Text>4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => this.onPress("5")}>
            <Text>5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => this.onPress("6")}>
            <Text>6</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonB} onPress={() => this.onPress("-")}>
            <Text style={styles.textB}>-</Text>
            </TouchableOpacity></View>
        <View style={styles.row}>
            <TouchableOpacity style={styles.button} onPress={() => this.onPress("1")}>
            <Text>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => this.onPress("2")}>
            <Text>2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => this.onPress("3")}>
            <Text>3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonB} onPress={() => this.onPress("+")}>
            <Text style={styles.textB}>+</Text>
            </TouchableOpacity></View>
        <View style={styles.row}>
            <TouchableOpacity style={styles.button} onPress={() => this.onPress("0")}>
            <Text>0</Text>
            </TouchableOpacity>
            <TouchableOpacity disabled={true} style={styles.button} onPress={() => this.onPress("1")}>
            <Text></Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => this.onPress(".")}>
            <Text>,</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonB} onPress={() => this.onEQPress()}>
            <Text style={styles.textB}>=</Text>
            </TouchableOpacity></View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  button: {
    flex: 1,
    backgroundColor: "#DDDDDD",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    },
  buttonB: {
    flex: 1,
    backgroundColor: "blue",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    },

  row: {
    maxwidth: '100%',
    flexDirection: 'row',
    backgroundColor: 'grey'
  },
  wynikV: {
    padding: 10,
    flexDirection: 'row',
    flex: 1
  },
  wynikT: {
    padding: 10,
    color: 'white',
    marginLeft: 'auto'
  },
  textB: {
  color: 'white',
  fontWeight: 'bold',
  }
});

export default App;