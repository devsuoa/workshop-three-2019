import React from "react";
import { View, Text } from "react-native";
import styles from "./LoginScreen.styles";

export class LoginScreen extends React.Component {
    render() {
        return (
            <View style={styles.loginContainer}>
                <View style={styles.headerContainer}>
                    <Text>Hello from the header area </Text>
                </View> 
                <View style={styles.formContainer}>
                    <Text>Hello from the form area </Text>
                </View>

            </View>
        )
    }
}
// 1/ (1 + 1) = 50%