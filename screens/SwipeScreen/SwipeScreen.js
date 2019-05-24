import React from "react";
import { View, Text } from "react-native";
import { AppContext } from "../../AppProvider";

export class SwipeScreen extends React.Component {
    render() {
        return (
            <View>
                <AppContext.Consumer>
                    {
                        (value) => {
                            return <Text>{value.name}</Text>
                        }
                    }
                </AppContext.Consumer>
            </View>
        )
    }
}
