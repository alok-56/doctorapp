import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

const Patientreport = ({ navigation, route }) => {
    const id = route.params;
    console.log(id)
    const [report, setReport] = useState('')
    useEffect(() => {
        getdata();
    }, [])

    const getdata = async () => {
        let data = await fetch(`https://vertual-server.vercel.app/user/book/doctor/${id}`);
        data = await data.json();
        if(data){
            setReport(data)
            console.log(data)
        }

    }
    return (
        <View style={{
            flex: 1
        }}>
            <View style={{
                marginTop: 20,
                marginLeft: 20,
                flexDirection: "row",
            }}>
                <Icon onPress={() => navigation.goBack()} name="close" color="blue" size={48}></Icon>
                <Text style={{
                    fontSize: 35,
                    marginLeft: 10,
                    fontWeight: "bold"
                }}>Medical Report</Text>
            </View>
            <View style={{
                width: "95%",
                height: 540,
                backgroundColor: "#fff",
                elevation: 20,
                alignSelf: "center"
            }}>
                <View style={{
                    alignSelf: "center",
                    marginTop: 20,

                }}>
                    <Text style={{
                        fontSize: 30
                    }}>DR. {report.docname}(MBBS)</Text>
                    <Text style={{
                        textAlign: "center",
                        fontSize: 20,
                        fontWeight: "500"
                    }}>MOB NO : <Text style={{ fontWeight: "300" }}>{report.Hostpitalnumber}</Text></Text>
                    <Text style={{
                        textAlign: "center",
                        fontSize: 20
                    }}>DATE : 24 july</Text>
                </View>
                <Text style={{
                    marginTop: 20,
                    marginLeft: 10,
                    fontWeight: "500",
                    fontSize: 20
                }}>DESCRIPTION :-</Text>
                <TouchableOpacity style={{
                    width: "95%",
                    height: 100,
                    backgroundColor: "#2cbfe6",
                    alignSelf: "center",
                    elevation: 20
                }}>
                    <Text>{report.des}</Text>
                </TouchableOpacity>

                <Text style={{
                    marginTop: 20,
                    marginLeft: 10,
                    fontWeight: "500",
                    fontSize: 20
                }}>MEDICINE :-</Text>
                <TouchableOpacity style={{
                    width: "95%",
                    height: 80,
                    backgroundColor: "#2cbfe6",
                    alignSelf: "center",
                    elevation: 20
                }}>
                    <Text>{report.medicine}</Text>
                </TouchableOpacity>
                <Text style={{
                    marginTop: 20,
                    marginLeft: 10,
                    fontWeight: "500",
                    fontSize: 20
                }}>Test :-</Text>
                <TouchableOpacity style={{
                    width: "95%",
                    height: 50,
                    backgroundColor: "#2cbfe6",
                    alignSelf: "center",
                    elevation: 20
                }}>
                    <Text>{report.test}</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}

export default Patientreport;