import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./LoginScreen.styles";

export class LoginScreen extends React.Component {
    render() {
        return (
            <View style={styles.loginContainer}>
                <View style={styles.headerContainer}>
                    <Image style={styles.imageStyle} source={require("../assets/logo.png")}/>
                </View> 
                <View style={styles.formContainer}>
                    <Text>Hello from the form area </Text>
                </View>

            </View>
        )
    }
}
// 1/ (1 + 1) = 50%