import React from "react";
import { View, Text } from "react-native";

export class LoginScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: "blue"}}>
                <View style={{backgroundColor: "white", flex: 2}}>
                    <Text>Hello from the header area </Text>
                </View> 
                <View style={{backgroundColor: "black", flex: 3}}>
                    <Text>Hello from the form area </Text>
                </View>

            </View>
        )
    }
}
// 1/ (1 + 1) = 50%