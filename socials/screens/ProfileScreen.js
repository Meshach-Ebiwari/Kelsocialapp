import React from "react";
import {View, Text, StyleSheet,SafeAreaView, Image, ScrollView} from "react-native";
import {Ionicons, MaterialIcons} from "@expo/vector-icons";



export default class ProfileScreen extends React.Component{
    // state = {
    //     photo:null,
    // };
    // handleChoosePhoto = () => {
    //     const options = {
    //     noData:true
    // };
    //     ImagePicker.launchImageLibrary(options, response => {
    //         console.log("response", response);
    //         if (response.uri) {
    //             this.setState({photo:response});
    //         }
    //     });
    // };
    render() {
        // const {photo} = this.state;
        return(
            <SafeAreaView style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.titleBar}>
                        <Ionicons name="ios-arrow-back" size={24} color="#52575D"></Ionicons>
                        <Ionicons name="md-more" size={24} color="#52575D"></Ionicons>
                    </View>

                    <View style={{alignSelf:"center"}}>
                        <View style={styles.profileImage}>
                            <Image source={require("../assets/profile-pic.jpg")} style={styles.image} resizeMode="center"></Image>
                        </View>
                        <View style={styles.dm}>
                            <MaterialIcons name="chat" size={18} color="#DFD8C8"></MaterialIcons>
                        </View>
                        <View style={styles.active}></View>
                        
                        <View style={styles.add}>
                            {/* {photo && (
                                <Image 
                                source={{uri:photo.uri}}
                                style={{width:300, height:300}}/>
                            )} */}
                            <Ionicons name="ios-add" size={48} color="#DFD8C8" 
                            // onPress={this.handleChoosePhoto}
                            ></Ionicons>                      
                        </View>
                    </View>

                    <View style={styles.infoContainer}>
                        <Text style={[styles.text, {fontWeight:"200", fontSize:36}]}>Ebiwari Meshach</Text>
                        <Text style={[styles.text, {color:"#AEB5BC", fontSize:14}]}>Photographer</Text>
                    </View>

                    <View style={styles.statsContainer}>
                        <View style={styles.statsBox}>
                            <Text style={[styles.text, {fontSize:24}]}>100</Text>
                            <Text style={[styles.text, styles.subText]}>Posts</Text>
                        </View>
                        <View style={styles.statsBox}>
                            <Text style={[styles.text, {fontSize:24}]}>30,000</Text>
                            <Text style={[styles.text, styles.subText]}>Followers</Text>
                        </View>
                        <View style={styles.statsBox}>
                            <Text style={[styles.text, {fontSize:24}]}>280</Text>
                            <Text style={[styles.text, styles.subText]}>Following</Text>
                        </View>
                    </View>

                    <View style={{marginTop:32}}>
                        <ScrollView horizontal={true} showsVerticalScrollIndicator={false}>
                            <View style={styles.mediaImageContainer}>
                                <Image source={require("../assets/model1.jpg")} style={styles.image} resizeMode="cover"></Image>
                            </View>
                            <View style={styles.mediaImageContainer}>
                                <Image source={require("../assets/model2.jpg")} style={styles.image} resizeMode="cover"></Image>
                            </View>
                            <View style={styles.mediaImageContainer}>
                                <Image source={require("../assets/model3.jpg")} style={styles.image} resizeMode="cover"></Image>
                            </View>
                        </ScrollView>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff"
    },
    text:{
        // fontFamily:"HelveticaNeue",
        color:"#52575D"
    },
    subText:{
        fontSize:12,
        color:"#AEB5BC",
        textTransform:"uppercase",
        fontWeight:"500"
    },
    image:{
        flex:1,
        width:undefined,
        height:undefined
    },
    titleBar:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:24,
        marginHorizontal:16
    },
    profileImage:{
        width:200,
        height:200,
        borderRadius:100,
        overflow:"hidden"
    },
    dm:{
        backgroundColor:"#41444B",
        position:"absolute",
        top:20,
        width:40,
        height:40,
        borderRadius:20,
        alignItems:"center",
        justifyContent:"center"
    },
    active:{
        backgroundColor:"#34FFB9",
        position:"absolute",
        bottom:28,
        left:10,
        padding:4,
        height:20,
        width:20,
        borderRadius:10
    },
    add:{
        backgroundColor:"#41444B",
        position:"absolute",
        bottom:0,
        right:0,
        width:60,
        height:60,
        borderRadius:30,
        alignItems:"center",
        justifyContent:"center"
    },
    infoContainer:{
        alignSelf:"center",
        alignItems:"center",
        marginTop:16
    },
    statsContainer:{
        flexDirection:"row",
        alignSelf:"center",
        marginTop:32,
    },
    statsBox:{
        alignItems:"center",
        flex:1
    },
    mediaImageContainer:{
        width:180,
        height:200,
        borderRadius:12,
        overflow:"hidden",
        marginHorizontal:10
    }
});