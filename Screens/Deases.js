import React, { useEffect, useState } from "react";
import { Button, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

const Deases = ({navigation}) => {
    const [key, setKey] = useState('')
    const [sym, setSym] = useState('')
    const [load, setLoad] = useState(false)
    const [age, setAge] = useState('')
    const [gender, setGender] = useState('')
    const [id, setId] = useState('')


    // const getData = async () => {
    //     let data = await fetch(`https://healthservice.priaid.ch/symptoms?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImFtYW5qZWV0a3VtYXJwYWwwNDMyQGdtYWlsLmNvbSIsInJvbGUiOiJVc2VyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc2lkIjoiOTUwNCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvdmVyc2lvbiI6IjEwOSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbGltaXQiOiIxMDAiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXAiOiJCYXNpYyIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbGFuZ3VhZ2UiOiJlbi1nYiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvZXhwaXJhdGlvbiI6IjIwOTktMTItMzEiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXBzdGFydCI6IjIwMjMtMDQtMTQiLCJpc3MiOiJodHRwczovL2F1dGhzZXJ2aWNlLnByaWFpZC5jaCIsImF1ZCI6Imh0dHBzOi8vaGVhbHRoc2VydmljZS5wcmlhaWQuY2giLCJleHAiOjE2ODE1NDM2ODIsIm5iZiI6MTY4MTUzNjQ4Mn0.X_xWVtH6lMYSwZ9zP3cTXrNTzIegDDLA9DFHjWO_iIo&format=json&language=en-gb`)
    //     data = await data.json()
    //     for (var i = 0; i < 281; i++) {
    //         console.log(data[i].ID)
    //         postdata(data[i].ID, data[i].Name)
    //     }
    // }
    // const postdata = async (ID, Name) => {
    //     let data = await fetch(`https://vertual-server.vercel.app/user/sympthom`, {
    //         method: "post",
    //         body: JSON.stringify({ ID, Name }),
    //         headers: {
    //             'content-type': 'application/json'
    //         }
    //     })
    //     data = await data.json()
    //     if(data){
    //         console.log(data)
    //     }
    // }

    const getdata = async (text) => {
        setLoad(true)
        setKey(text)
        console.log(key)
        let data = await fetch(`https://vertual-server.vercel.app/user/search/${key}`);
        data = await data.json()
        if (data) {
            setSym(data)
            console.log(data)
        }
    }

    const select = (ID, Name) => {
        setLoad(false)
        setKey(Name)
        setId(ID)
    }

    const send=()=>{
        navigation.navigate('singledeases',{
            id,
            gender,
            age

        })
        
    }

    return (
        <View style={{ flex: 1 }}>
            <Text style={{
                marginTop: 30,
                marginLeft: 40,
                fontSize: 30,
                fontWeight: "bold",
                color:'#2cbfe6'
            }}>GET Disease</Text>
            <View style={{
                width: "95%",
                backgroundColor: "#fff",
                elevation: 20,
                alignSelf: "center",
                padding: 20,
                marginTop: 100,

            }}>
                <TextInput style={{
                    width: 300,
                    padding: 10,
                    borderWidth: 1,
                    alignSelf: "center"
                }} value={key} onChangeText={(text) => getdata(text)} placeholder="Enter sympotoms"></TextInput>
                <ScrollView>
                    {
                        load ? <View style={{
                            width: 300,
                            elevation: 20,
                            marginTop: 20,
                            alignSelf: "center",
                            padding: 4
                        }}>
                            {
                                sym && sym.length > 0 ?
                                    sym.map((item, index) => (
                                        <TouchableOpacity style={{
                                            backgroundColor: "blue",
                                            padding: 5,
                                            borderRadius: 4,
                                            marginTop: 4
                                        }} key={index}>
                                            <Text style={{ fontSize: 20, color: "#fff" }} onPress={() => select(item.ID, item.Name)}>{item.Name}</Text>
                                        </TouchableOpacity>

                                    )) : null
                            }

                        </View> : null
                    }

                </ScrollView>
                <TextInput style={{
                    width: 300,
                    padding: 10,
                    borderWidth: 1,
                    alignSelf: "center",
                    marginTop: 10

                }} value={age} onChangeText={(text) => setAge(text)} placeholder="Enter age"></TextInput>
                <TextInput style={{
                    width: 300,
                    padding: 10,
                    borderWidth: 1,
                    alignSelf: "center",
                    marginTop: 10

                }} value={gender} onChangeText={(text) => setGender(text)} placeholder="Enter gender"></TextInput>
                <TouchableOpacity style={{
                    width: 300,
                    backgroundColor: "red",
                    alignSelf: "center",
                    marginTop: 20,
                    padding: 10
                }} onPress={()=>send()}>
                    <Text style={{
                        textAlign: "center",
                        fontSize: 18,
                        color: "#fff",
                        fontWeight: "bold"
                    }}>Get Disease</Text>
                </TouchableOpacity>
            </View>



        </View>
    )
}

export default Deases;