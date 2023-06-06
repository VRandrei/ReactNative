import React from "react";
import {StyleSheet, Text, View} from "react-native";

const Loading = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Getting the weather...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#333',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 30,
        color: '#fff'
    }

})

export default Loading;