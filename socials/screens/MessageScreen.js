import React from "react";
import {View, Text, StyleSheet} from "react-native";

export default class MessageScreen extends React.Component{
    render() {
        return(
            <View style={StyleSheet.container}>
                <Text>Message Screen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: "center",
        justifyContent:"center"
    }
});