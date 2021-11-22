
import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Image,
    FlatList
} from "react-native";
import { Feather, AntDesign, Fontisto } from '@expo/vector-icons';
import BottomTab from "../components/BottomTab";
import Header from "../components/Header";
import { Post, profile, Story } from "../Json/Data";
import StoryCard from "../components/StroyCard";
import PostCard from "../components/PostCard";


class Home extends Component {
    renderStory = ({ item, index }) => {
        return (
            <StoryCard profile={item.profile} name={item.name} />
        )
    }
    renderPost = ({ item, index }) => {
        return (
            <PostCard profile={item.profile} postimage={item.postimage} name={item.name} comment={item.comment} c_at={item.c_at} />
        )
    }
    render() {
        return (
            <View style={styles.container}>
                {/* header */}
                <Header />

                <FlatList
                    ListHeaderComponent={() => (
                        <View style={styles.story}>
                            <View style={styles.story_container}>
                                <StoryCard profile={profile} name={"Your Story"} own={true} />
                            </View>
                            <FlatList
                                data={Story}
                                renderItem={this.renderStory}
                                keyExtractor={(item, index) => index.toString()}
                                horizontal={true}
                                contentContainerStyle={{
                                    marginTop: "5%",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    alignSelf: "center"
                                }}
                                ItemSeparatorComponent={(props) => {
                                    return (<View style={{ width: 5, }} />);
                                }}
                            />

                        </View>
                    )}
                    data={Post}
                    renderItem={this.renderPost}
                    keyExtractor={(item, index) => index.toString()}
                />
                <View style={{ height: "7%" }} />

                <BottomTab />
            </View>
        );
    }
}
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },

    iconstyle: {
        paddingTop: "3.5%"
    },
    story_container: {
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginTop: "4%",
        marginHorizontal: "1%"
    },
    story: {
        height: 130,
        flexDirection: "row",
        alignItems: "center"
    },
    story_card: {
        height: 82,
        width: 82,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 82 / 2
    },
    profile: {
        width: 75,
        height: 75,
        borderRadius: 75 / 2,
        alignSelf: 'center',
        borderColor: '#fff',
        borderWidth: 3
    },
    postcard: {
        flex: 1,
        backgroundColor: '#222',
        width: "100%",
        marginTop: 3,
        marginBottom: "8%",
        backgroundColor: "#fff"
    },
    posthader: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 5,
        marginBottom: 3
    },
});