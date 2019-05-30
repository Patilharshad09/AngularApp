import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginComponent from "./app/Login";
import {connect} from 'react-redux';
import * as action from '../mercury/app/store/actions';
export default class App extends React.Component {
  state = {
    myState:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, used do."
  };
  updateState = () => {
    this.setState({ myState: "The state is updated" });
  };
  render() {
    return (
      <View style={styles.container}>
        <LoginComponent />
      </View>
    );
  }
}
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  }
});

const mapStatetoProps= state=>{
  return {
    userName: state.login.userName,
    passWord: state.login.passWord
  };
};

const mapDispatchToProps= dispatch=>{
  return {
    onLogin:(userName,passWord)=> dispatch(action.onLogin(userName,passWord)),
    onForgotPassWord:(userName)=> dispatch(action.onLogin(userName)),
  };
}

export default connect()(app);