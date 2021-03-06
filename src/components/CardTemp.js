import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function CardTemp(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.bodyContent}>
        <Text style={styles.titleStyle}>Temp</Text>
        <Text style={styles.subtitleStyle}>21º</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flexWrap: "nowrap",
    elevation: 3,
    borderRadius: 2,
    borderColor: "#CCC",
    borderWidth: 1,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    overflow: "hidden"
  },
  bodyContent: {
    justifyContent: "center",
    margin: 5,
    padding: 8
  },
  titleStyle: {
    color: "#000",
    paddingBottom: 10,
    fontSize: 13,
    fontFamily: "arial-regular"
  },
  subtitleStyle: {
    color: "#000",
    paddingTop: 15,
    fontSize: 25,
    fontFamily: "arial-regular",
    lineHeight: 16
  }
});

export default CardTemp;
