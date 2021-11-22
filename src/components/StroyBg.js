import React, { Component } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import {StyleSheet} from "react-native";

class StoryBg extends Component {
    render() {
        const bg_stroy = ['#CA1D7E', '#E35157', '#F2703F']
        const story_start_axes = { x: 0.0, y: 1.0 }
        const story_start_end = { x: 1.0, y: 1.0 }
        return (
            <LinearGradient
            colors={bg_stroy}
            start={story_start_axes} end={story_start_end}
            style={styles.story_card}>
         {this.props.children}
        </LinearGradient>
        );
    }
}
export default StoryBg;


const styles = StyleSheet.create({
    story_card: {
        height: 82,
        width: 82,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 82 / 2
    },
});