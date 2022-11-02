import React, { Component } from "react";
import {Alert, Dimensions, StyleSheet, Text, TouchableOpacity, View} from "react-native";

export default class App extends React.Component {
    constructor() {
        super();
        this.state = { count: 0 };
        const isPortrait = () => {
            const dim = Dimensions.get('screen');
            return dim.height >= dim.width;
        };

        this.state = {
            orientation: isPortrait() ? 'portrait' : 'landscape'
        };

        // Event Listener for orientation changes
        Dimensions.addEventListener('change', () => {
            this.setState({
                orientation: isPortrait() ? 'portrait' : 'landscape'
            });
        });

    }

  onPress = (buttonValue: string) => {
    if(this.state.count == '0' || this.state.count == undefined){
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

    onScPress = (buttonValue: string) => {
        let text = this.state.count
        switch (buttonValue){
            case 'sqrt':
                this.setState({
                    count: Math.sqrt(text)
                });
                break;
            case '!':
                if (text === 0) this.setState({
                    count: 1
                });
                let f = 1;
                for (let i = 1; i < text; i++) {
                    f = f * (i + 1);
                }
                this.setState({
                    count: f
                });
                break;
            case 'e^x':
                this.setState({
                    count: Math.exp(text)
                });
                break;
            case '10^x':
                this.setState({
                    count: Math.pow(10, text)
                });
                break;
            case 'ln':
                this.setState({
                    count: Math.log(text)
                });
                break;
            case 'log10':
                this.setState({
                    count: Math.log10(text)
                });
                break;
            case 'e':
                this.setState({
                    count: Math.E
                });
                break;
            case 'x^2':
                this.setState({
                    count: Math.pow(text, 2)
                });
                break;
            case 'pi':
                this.setState({
                    count: Math.PI
                });
                break;
            case 'x^3':
                this.setState({
                    count: Math.pow(text, 3)
                });
                break;
            case '%':
                this.setState({
                    count: (text * 100) / 100
                });
                break;
            case '+/-':
                if(Array.from(text[0]) == '-'){
                    this.setState({
                        count: text.substring(1)
                    });
                }else{
                    this.setState({
                        count: '-' + text
                    });
                }
                break;
            default:
                Alert.alert("err");
        }
    }

  render() {
    const { count } = this.state;
      if (this.state.orientation === 'portrait') {
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

              </View>);
      }
      else {
          return (
              <View style={styles.container}>
                  <View style={styles.row}>
                      <View style={styles.HwynikV}>
                          <Text style={styles.HwynikT}>{this.state.count}</Text>
                      </View>
                  </View>
                  <View style={styles.row}>
                      <TouchableOpacity style={styles.button} onPress={() => this.onScPress("sqrt")}>
                          <Text>√</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.button} onPress={() => this.onScPress("!")}>
                          <Text>x!</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.button} onPress={() => this.onACPress()}>
                          <Text>AC</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.button} onPress={() => this.onScPress("+/-")}>
                          <Text>+/-</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.button} onPress={() => this.onPress("%")}>
                          <Text>%</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.buttonB} onPress={() => this.onPress("/")}>
                          <Text style={styles.textB}>/</Text>
                      </TouchableOpacity>
                  </View>
                  <View style={styles.row}>
                      <TouchableOpacity style={styles.button} onPress={() => this.onScPress("e^x")}>
                          <Text>e^x</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.button} onPress={() => this.onScPress("10^x")}>
                          <Text>10^x</Text>
                      </TouchableOpacity>
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
                      <TouchableOpacity style={styles.button} onPress={() => this.onScPress("ln")}>
                          <Text>ln</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.button} onPress={() => this.onScPress("log10")}>
                          <Text>log10</Text>
                      </TouchableOpacity>
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
                      <TouchableOpacity style={styles.button} onPress={() => this.onScPress("e")}>
                          <Text>e</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.button} onPress={() => this.onScPress("x^2")}>
                          <Text>x^2</Text>
                      </TouchableOpacity>
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
                      <TouchableOpacity style={styles.button} onPress={() => this.onScPress("pi")}>
                          <Text>π</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.button} onPress={() => this.onScPress("x^3")}>
                          <Text>x^3</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.button} onPress={() => this.onPress("0")}>
                          <Text>0</Text>
                      </TouchableOpacity>
                      <TouchableOpacity disabled={true} style={styles.button} onPress={() => this.onPress("5")}>
                          <Text></Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.button} onPress={() => this.onPress(",")}>
                          <Text>,</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.buttonB} onPress={() => this.onEQPress()}>
                          <Text style={styles.textB}>=</Text>
                      </TouchableOpacity></View>
              </View>

          )
      }

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
      marginLeft: 1,
      marginRight: 1,
      marginBottom: 1,
      borderRadius: 1
    },
  buttonB: {
    flex: 1,
    backgroundColor: "blue",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
      marginLeft: 1,
      marginRight: 1,
      marginBottom: 1,
      borderRadius: 1
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
  HwynikV: {
    padding: 10,
    flexDirection: 'row',
    flex: 1
  },
  HwynikT: {
    padding: 10,
    color: 'white',
    marginLeft: 'auto'
  },
  textB: {
  color: 'white',
  fontWeight: 'bold',
  }
});

