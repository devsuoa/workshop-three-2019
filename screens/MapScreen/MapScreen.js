import React from "react";
import { View, Text } from "react-native";
import { MapView } from "expo";

const initialRegion = {
    longitude: -122,
    latitude: 37,
    longitudeDelta: 0.04,
    latitudeDelta: 0.09
}

export class MapScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            region: initialRegion
        }
    }

    onRegionChangeComplete = (region) => {
        this.setState({
            region: region
        })
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <MapView region={this.state.region} style={{flex: 1}} onRegionChangeComplete={this.onRegionChangeComplete}/>
                <Text>{this.state.region.longitude}</Text>
            </View>
        )
    }
}
