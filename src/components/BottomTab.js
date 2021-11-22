import React, { Component } from "react";
import {
    View,
    TouchableOpacity,
    StyleSheet
} from "react-native";
import { Feather, Ionicons, AntDesign, } from '@expo/vector-icons';


class BottomTab extends Component {
    render() {
        const icon_size=35
        return (
            <View style={styles.container}>
                <TouchableOpacity>
                    <Ionicons name="ios-home" size={icon_size} color="black" style={[styles.iconstyle, { transform: [{ rotateY: "180deg" }] }]} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Feather name="search" size={icon_size} color="gray" style={styles.iconstyle} />
                </TouchableOpacity>
                <TouchableOpacity >
                    <AntDesign name="pluscircle" size={icon_size} color="gray" style={styles.iconstyle} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <AntDesign name="heart" size={icon_size} color="gray" style={styles.iconstyle} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="ios-person" size={icon_size} color="gray" style={styles.iconstyle} />
                </TouchableOpacity>
            </View>
        );
    }
}
export default BottomTab;

const styles = StyleSheet.create({
    container: {

        position: "absolute",
        backgroundColor: "#fff",
        bottom: 0, height: 70,
        width: "100%", elevation: 12,
        shadowColor: "#000",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",

    }
  
});