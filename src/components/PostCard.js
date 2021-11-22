import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from "react-native";
import { Feather, AntDesign, Fontisto } from '@expo/vector-icons';
class PostCard extends Component {
    render() {
        return (
            <TouchableOpacity activeOpacity={1}
                style={styles.postcard}>
                <View style={styles.posthader}>
                    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", padding: 1 }}>
                        <Image source={{ uri: this.props.profile }} style={{ marginRight: 8, height: 35, width: 35, borderRadius: 40, }} />
                        <Text>
                            {this.props.name}
                        </Text>
                    </View>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <Feather name="more-horizontal" size={24} color="black" />
                    </View>
                </View>
                <Image source={{ uri: this.props.postimage }} style={{ aspectRatio: 1.4, backgroundColor: "red" }} />

                <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 5, marginBottom: 3 }}>
                    <View style={{ flexDirection: "row" }}>

                        <AntDesign name="hearto" size={30} color="black" style={{ marginHorizontal: 6, marginTop: 5 }} />
                        <Fontisto name="hipchat" size={30} color="black" style={{ marginHorizontal: 6, marginTop: 5, }} />
                        <Feather name="send" size={30} color="black" style={{ marginHorizontal: 6, marginTop: 5, }} />

                    </View>
                    <View>
                        <Feather name="bookmark" size={30} color="black" style={{ marginHorizontal: 6, marginTop: 5, }} />
                    </View>
                </View>
                <Text style={{ marginHorizontal: 4 }}>Liked by Rohit and others</Text>
                {this.props.comment.map((item_c, index_c) => {
                    return (
                        <View key={index_c} style={{ flexDirection: "row", justifyContent: "space-between", padding: 2, marginBottom: 3 }}>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ marginHorizontal: 2 }}>
                                    {item_c.username}
                                </Text>
                                <Text >
                                    {item_c.comment}
                                </Text>

                            </View>
                            <View>
                                <AntDesign name="hearto" size={15} color="black" style={{ marginHorizontal: 6, marginTop: 5 }} />
                            </View>
                        </View>)
                })}
                <Text style={{ marginHorizontal: 4, color: "gray" }}>{this.props.c_at}</Text>

            </TouchableOpacity>
        );
    }
}
export default PostCard;

const styles = StyleSheet.create({
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