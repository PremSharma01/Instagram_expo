import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { Feather} from '@expo/vector-icons';

class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
            <TouchableOpacity>
            <Feather name="camera" size={27} color="black" style={styles.iconstyle} />
            </TouchableOpacity>
            <Text style={[styles.iconstyle, { fontSize: 18, }]}>Instagram</Text>
            <TouchableOpacity>
            <Feather name="send" size={27} color="black" style={styles.iconstyle} />
            </TouchableOpacity>
        </View>
        );
    }
}
export default Header;

const styles = StyleSheet.create({
    header: {
        height: "8%",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        padding: 15,
        elevation: 12,
        shadowColor: "#000",
        backgroundColor: "#fff"
    },
    iconstyle: {
        paddingTop: "3.5%"
    },
});