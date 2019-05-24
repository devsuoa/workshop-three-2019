import React from "react";
import { View, Text } from "react-native";
import { AppContext } from "../../AppProvider";
import { Card } from "react-native-elements";
import { MapView } from "expo";
import { Swiper } from "../../components/Swiper/Swiper"

export class SwipeScreen extends React.Component {
    renderCard = (job) => {
        return (
            <Card title={job.title} containerStyle={{ height: 600 }}>
	<View style={{ height: 300, marginBottom: 20 }}>
            <MapView
                scrollEnabled={false}
                style={{ flex: 1 }}
                cacheEnabled={true}
                initialRegion={{
                    longitude: -122,
                    latitude: 37,
                    longitudeDelta: 0.04,
                    latitudeDelta: 0.09
                }}
            />
        </View>
        <View
            style={{
                flexDirection: "row",
                justifyContent: "space-around",
                marginBottom: 10
            }}
        >
            <Text>{job.company}</Text>
            <Text>{job.type}</Text>
        </View>
        </Card>
        )
    }

    render() {
        return (
            <View>
                <AppContext.Consumer>
                    {
                        ({jobs}) => {
                            return <Swiper
                             renderCard={this.renderCard}
                             data = {jobs}
                             />
                        }
                    }
                </AppContext.Consumer>
            </View>
        )
    }
}
