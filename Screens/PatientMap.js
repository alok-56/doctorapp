import React, { useState,useEffect } from 'react'
import { WebView } from 'react-native-webview';

const PatientMap = ({ navigation, route }) => {
    const id = route.params;
    const [lat, setLat] = useState('')
    const [lon, setLon] = useState('')

    useEffect(() => {
        getlat()
    }, [])
    const getlat = async () => {
        let data = await fetch(`https://vertual-server.vercel.app/doctor/book/get/${id}`);
        data = await data.json();
        if (data) {
            console.log(data)
            setLat(data.lat)
            setLon(data.lon)
        }
    }

    return (
        <WebView source={{ uri: `https://www.google.com/maps?q=${lat},${lon}&z=17&hl=en` }} />
    )
}
export default PatientMap;