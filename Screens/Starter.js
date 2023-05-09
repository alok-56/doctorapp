import React, { useState } from "react";
import { View, Text, TouchableOpacity, ImageBackground, FlatList, Dimensions } from "react-native";
const { height, width } = Dimensions.get('window')

const Starter = ({ navigation }) => {
    const [currindex, setCurrindex] = useState(0)
    const [data, setDate] = useState([
        { con: "Specialist Doctors", img: require('../assets/build.png') },
        { con: "Easy Ambulance", img: require('../assets/build1.png') },
        { con: "Online Appoinment", img: require('../assets/build2.png') }

    ])
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <View style={{ justifyContent: "center", flex: 3, alignItems: "center" }}>
                <FlatList data={data}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    onScroll={(e) => {
                        const x = e.nativeEvent.contentOffset.x;
                        setCurrindex((x / width).toFixed(0))

                    }}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{
                                width: width,
                                height: height / 2,
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <Text style={{
                                    marginTop: "45%", fontSize: 30, fontWeight: "bold",color:"black"
                                }}>{item.con}</Text>
                                <View style={{
                                    width: "100%",
                                    height: "100%",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>
                                    <ImageBackground source={item.img} style={{
                                        width: "100%",
                                        height: "90%",
                                        marginTop: "5%",
                                    }} />

                                </View>


                            </View>
                        )
                    }}
                />
            </View>
            <View style={{
                width: width,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                flex: 1
            }}>
                {
                    data.map((item, index) => {
                        return (
                            <View
                                key={index}
                                style={{
                                    height: 10,
                                    width: 10,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderRadius: 10,
                                    backgroundColor: currindex == index ? "red" : "black",
                                    marginLeft: 10
                                }}
                            ></View>
                        )
                    })
                }
            </View>
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 30
            }}>
                <TouchableOpacity style={{
                    width: 350,
                    backgroundColor: 'rgba(226, 62, 87, 1)',
                    padding: 15,
                    borderRadius: 25
                }}><Text style={{
                    fontSize: 17,
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#fff",
                    fontWeight: "bold",
                    textAlign: "center"
                }} onPress={() => navigation.navigate('login')}>Login as Patient</Text></TouchableOpacity>
                <TouchableOpacity style={{
                    width: 350,
                    backgroundColor: '#2cbfe6',
                    padding: 15,
                    borderRadius: 25,
                    marginTop: 20
                }}><Text style={{
                    fontSize: 17,
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#fff",
                    fontWeight: "bold",
                    textAlign: "center"
                }} onPress={() => navigation.navigate('hoslogin')}>Login as Hospital</Text></TouchableOpacity>

            </View>

        </View>


    )
}
export default Starter;