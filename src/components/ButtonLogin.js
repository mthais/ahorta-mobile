import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function ButtonLogin(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.caption}>LOGIN</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 16,
    paddingLeft: 16,
    elevation: 2,
    minWidth: 88,
    borderRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 5
  },
  caption: {
    color: "rgba(18,17,17,1)",
    fontSize: 14,
    fontFamily: "arial-regular"
  }
});

export default ButtonLogin;
