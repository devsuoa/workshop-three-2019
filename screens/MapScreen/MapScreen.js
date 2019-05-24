import React from "react";
import { View, Text } from "react-native";
import { MapView } from "expo";
import { Button } from "react-native-elements";
import axios from "axios";

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

    fetchJobs = async () => {
        const response = await axios.get("https://jobs.github.com/positions.json?lat=37.3229978&long=-122.0321823")
        console.log(response.data);
    }


    render() {
        return (
            <View style={{flex: 1}}>
                <MapView region={this.state.region} style={{flex: 1}} onRegionChangeComplete={this.onRegionChangeComplete}/>
                <Button title="Fetch Jobs!" onPress={this.fetchJobs} />
            </View>
        )
    }
}
