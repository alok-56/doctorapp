// import React from 'react';
// import { StyleSheet, View } from 'react-native';
// import { WebView } from 'react-native-webview';


// const Map = () => {
//     return (
//         <WebView source={{ uri: 'https://www.google.com/maps?q=23.970125,78.4209968&z=17&hl=en' }} />
//     );

// }

// export default Map;


import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button, PermissionsAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { WebView } from 'react-native-webview';
// Function to get permission for location
const requestLocationPermission = async () => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                title: 'Geolocation Permission',
                message: 'Can we access your location?',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
            },
        );
        // console.log('granted', granted);
        if (granted === 'granted') {
            // console.log('You can use Geolocation');
            return true;
        } else {
            // console.log('You cannot use Geolocation');
            return false;
        }
    } catch (err) {
        return false;
    }
};
const Map = ({ navigation, route }) => {
    const id = route.params;
    console.log(id)

    useEffect(() => {
        getLocation()
        getlat();
    }, [])

    // state to hold location
    const [location, setLocation] = useState(false);
    const [lat, setLat] = useState('')
    const [lon, setLon] = useState('')
    const [patlat, setPatlat] = useState('')
    const [patlon, setPatlon] = useState('')
    const [status, setStatus] = useState("arrived")
    // function to check permissions and get Location
    const getLocation = () => {
        const result = requestLocationPermission();
        result.then(res => {
            // console.log('res is:', res);
            if (res) {
                Geolocation.getCurrentPosition(
                    position => {
                        setLocation(position);
                        end(position.coords.latitude, position.coords.longitude);
                    }
                );
            }
        });

    };

    const end = async (lat, lon) => {

        let data = await fetch(`https://vertual-server.vercel.app/doctor/book/updateamb`, {
            method: "put",
            body: JSON.stringify({ id, lat, lon, status }),
            headers: {
                "content-type": "application/json"
            }

        })
        data = await data.json()
        if (data) {
            console.log(data)

        }



    }
    const getlat = async () => {
        let data = await fetch(`https://vertual-server.vercel.app/doctor/book/get/${id}`);
        data = await data.json();
        if (data) {
            console.log(data)
            setPatlat(data.patientlat)
            setPatlon(data.patientlog)
        }
    }
    return (
        <WebView source={{ uri: `https://www.google.com/maps?q=${patlat},${patlon}&z=17&hl=en` }} />
        // <View style={styles.container}>
        //     <Text>Welcome!</Text>
        //     <View
        //         style={{ marginTop: 10, padding: 10, borderRadius: 10, width: '40%' }}>
        //         <Button title="Get Location" onPress={()=>setL(l+1)} />
        //     </View>
        //     <Text>Latitude: {location ? location.coords.latitude : null}</Text>
        //     <Text>Longitude: {location ? location.coords.longitude : null}</Text>
        // </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default Map;


// import React, { useState, useEffect } from 'react';
// import { View, Text } from 'react-native';
// import Geolocation from '@react-native-community/geolocation';

// const Map = () => {
//     const [latitude, setLatitude] = useState(null);
//     const [longitude, setLongitude] = useState(null);

//     useEffect(() => {
//         function getLocation() {
//             if (navigator.geolocation) {
//                 navigator.geolocation.watchPosition(showPosition);
//             }
//         }

//         function showPosition(position) {
//             console.log(position.coords.longitude)
//         }
//     }, []);

//     return (
//         <View>
//             {latitude && longitude ? (
//                 <Text>
//                     Latitude: {latitude}, Longitude: {longitude}
//                 </Text>
//             ) : (
//                 <Text>Loading...</Text>
//             )}
//         </View>
//     );
// };

// export default Map;
