import React from "react";
import {StyleSheet, Text, View, StatusBar} from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient'; 
import {weatherOptions} from "./Options";

const Weather = ({place, temp, condition}) => {
    return(
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}>
            <StatusBar barStyle={'light-content'}/>
            <Text style={styles.place}>{place}</Text>
            <View style={styles.weather}>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={90} color="white" />
                <Text style={styles.temp}>{temp}°</Text>
            </View>
        </LinearGradient>
    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    place: PropTypes.string.isRequired,
    condition: PropTypes.oneOf(['Thunderstorm', 'Drizzle', 'Rain', 'Snow', 'Haze', 'Mist', 'Clear', 'Clouds']).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    place: {
        fontSize: 25,
        color: 'white',
        marginTop: 150
    },
    weather: {
        flex: 1,
        alignItems: "center",
        marginTop: 150
    },
    temp: {
        fontSize: 25,
        marginTop: 20,
        flex:1,
        alignItems: "center",
        color: 'white'
    }
})

export default Weather;