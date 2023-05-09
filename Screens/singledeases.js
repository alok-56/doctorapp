import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native'

const Signledeases = ({ navigation, route }) => {
    const { id, gender, age } = route.params;
    const [db, setDb] = useState('')
    const [load, setLoad] = useState(true)
    useEffect(() => {
        getdata()
    }, [])

    const getdata = async () => {
        let data = await fetch(`https://healthservice.priaid.ch/diagnosis?symptoms=[${id}]&gender=${gender}&year_of_birth=${age}&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImFtYW5qZWV0a3VtYXJwYWwwNDMyQGdtYWlsLmNvbSIsInJvbGUiOiJVc2VyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc2lkIjoiOTUwNCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvdmVyc2lvbiI6IjEwOSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbGltaXQiOiIxMDAiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXAiOiJCYXNpYyIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbGFuZ3VhZ2UiOiJlbi1nYiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvZXhwaXJhdGlvbiI6IjIwOTktMTItMzEiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXBzdGFydCI6IjIwMjMtMDQtMTQiLCJpc3MiOiJodHRwczovL2F1dGhzZXJ2aWNlLnByaWFpZC5jaCIsImF1ZCI6Imh0dHBzOi8vaGVhbHRoc2VydmljZS5wcmlhaWQuY2giLCJleHAiOjE2ODE2NTI3NjMsIm5iZiI6MTY4MTY0NTU2M30.VtOI-SXzVEMBxuZCbnSL0olSdz413whXEyA3lmvUaqI&format=json&language=en-gb`)
        data = await data.json()
        if (data) {
            setDb(data)
            setLoad(false)
        }
        else {
            setLoad(false)
        }
    }
    return (
        <View style={{
            flex: 1
        }}>
            {
                load ? <ActivityIndicator style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }} size={44}></ActivityIndicator> : <ScrollView>
                    {
                        db && db.length > 0 ?
                            db.map((item, index) => (
                                <View style={{
                                    width: "95%",
                                    alignSelf: "center",
                                    marginTop: 40
                                }} key={index} >
                                    <View style={{
                                        borderRadius: 10,
                                        padding: 10,
                                        backgroundColor: "#fff",
                                        elevation: 20,
                                    }}>
                                        <View style={{
                                            marginLeft: 20,
                                            marginTop: 25
                                        }}>
                                            <Text>Disease Name : <Text style={{ color: "red", fontWeight: "bold" }}>{item.Issue.Name}</Text>  </Text>
                                            <Text>Icd : {item.Issue.Icd} </Text>
                                            <Text style={{ fontWeight: "bold" }}>ProfName : {item.Issue.ProfName} </Text>
                                            {
                                                item.Specialisation && item.Specialisation.length > 0 ?
                                                    item.Specialisation.map((item, index) => (
                                                        <Text style={{ fontWeight: "bold" }}>Doctors : {item.Name} </Text>
                                                    )) : null
                                            }

                                        </View>
                                        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                                            <TouchableOpacity style={{
                                                backgroundColor: "rgb(47,188,245)",
                                                padding: 5,
                                                borderRadius: 5,
                                                width: 150,
                                                marginTop: 10
                                            }} ><Text style={{
                                                textAlign: "center",
                                                color: "#fff",

                                            }} onPress={() => navigation.navigate('dos')}>Book Doctors</Text></TouchableOpacity>
                                            <TouchableOpacity style={{
                                                backgroundColor: "rgb(47,188,245)",
                                                padding: 5,
                                                borderRadius: 5,
                                                width: 150,
                                                marginTop: 10
                                            }} ><Text style={{
                                                textAlign: "center",
                                                color: "#fff",

                                            }}>Report</Text></TouchableOpacity>
                                        </View>
                                        <View style={{
                                            position: "absolute",
                                            right: 5
                                        }}>
                                            <Text style={{ color: "black" }}>Accurancy : <Text style={{ color: "red", fontWeight: "bold" }}>{item.Issue.Accuracy}%</Text></Text>
                                        </View>
                                        <View style={{
                                            position: "absolute",
                                            left: 5
                                        }}>
                                            <Text style={{ color: "black" }}>Ranking : <Text style={{ color: "red", fontWeight: "bold" }}>{item.Issue.Ranking}</Text></Text>
                                        </View>

                                    </View>
                                </View>

                            )) : <Text>No Disease found</Text>
                    }
                </ScrollView>
            }


        </View>
    )
}

export default Signledeases;