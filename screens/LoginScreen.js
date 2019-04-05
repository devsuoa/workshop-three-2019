import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./LoginScreen.styles";

export class LoginScreen extends React.Component {
    render() {
        return (
            <View style={styles.loginContainer}>
                <View style={styles.headerContainer}>
                    <Image style={styles.imageStyle} source={require("../assets/logo.png")}/>
                    <Text style={styles.headerText}>Your next job is only a Swipe away</Text>
                </View> 
                <View style={styles.formContainer}>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>SIGN IN </Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}
