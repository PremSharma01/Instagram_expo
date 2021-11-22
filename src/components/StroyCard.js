import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";
import StoryBg from "./StroyBg";
import { AntDesign } from '@expo/vector-icons';

class StoryCard extends Component {
    render() {
        if (this.props.own)
            return (
                <>
                    <View>
                        <StoryBg>
                            <Image source={{ uri: this.props.profile }} style={styles.profile} />
                        </StoryBg>
                        <AntDesign name="pluscircle" size={27} color="skyblue" style={{ position: "absolute", bottom: 0, right: 0, backgroundColor: "#fff", borderRadius: 40, height: 30, width: 30 }} />
                    </View>
                    <Text>{this.props.name}</Text>

                </>
            )
        else return (
            <View style={{ alignItems: "center" }} >
                <StoryBg>
                    <Image source={{ uri: this.props.profile }} style={styles.profile} />
                </StoryBg>
                <Text>{this.props.name}</Text>
            </View>
        );
    }
}
export default StoryCard;

const styles = StyleSheet.create({
    profile: {
        width: 75,
        height: 75,
        borderRadius: 75 / 2,
        alignSelf: 'center',
        borderColor: '#fff',
        borderWidth: 3
    },
});