import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../Screens/Splash';
import Starter from '../Screens/Starter';
import Login from '../Screens/Login';
import Signup from '../Screens/Signin';
import Otp from '../Screens/Otp';
import Home from '../Screens/Home';
import Videocall from '../Screens/Videocall';
import Hospital from '../Screens/Hospital';
import Hoslogin from '../Screens/Hoslogin';
import Hossign from '../Screens/Hossign';
import HosOtp from '../Screens/HosOtp';
import Hoshome from '../Screens/Hoshome';
import Map from '../Screens/Map';
import Hosdoc from '../Screens/Hosdoc';
import Sceduletime from '../Screens/Sceduletime';
import Singledoc from '../Screens/Sngledoc';
import Singleabu from '../Screens/Singleabu';
import Sucessamb from '../Screens/Sucessamb';
import Profile from '../Screens/Profile';
import Ambulancebook from '../Screens/Ambulancebookliat';
import Doctorbook from '../Screens/Doctorbooklist';
import Doctorvideo from '../Screens/Doctorvideo';
import Doctorprofile from '../Screens/Doctorprofile';
import Patientmedicalreport from '../Screens/Patientmedicalreport';
import Patientprofileambulance from '../Screens/Patientprofileambulance';
import Patientprofiledoctor from '../Screens/Patientprofiledoctor';
import Report from '../Screens/Report';
import Patientreport from '../Screens/Patientreport';
import HostPage from '../Screens/Stream';
import Hoststream from '../Screens/Hoststream';
import Scuess from '../Screens/Scuess';
import Deases from '../Screens/Deases';
import Signledeases from '../Screens/singledeases';
import Health from '../Screens/Health';
import PatientMap from '../Screens/PatientMap';


const Stack = createNativeStackNavigator();

const Stackroute = () => {
    const [load, setLoad] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoad(false)
        }, 3000)
    }, [])
    return (
        <NavigationContainer>
            <Stack.Navigator >
                {
                    load ? <Stack.Screen options={{
                        headerShown: false
                    }} name="Splash" component={Splash} /> : null
                }
                <Stack.Screen options={{
                    headerShown: false
                }} name="Starter" component={Starter} />
                <Stack.Screen options={{
                    headerShown: false
                }} name="login" component={Login} />
                <Stack.Screen options={{
                    headerShown: false
                }} name="signup" component={Signup} />
                <Stack.Screen options={{
                    headerShown: false
                }} name="otp" component={Otp} />
                <Stack.Screen options={{
                    headerShown: false
                }} name="Home" component={Home} />
                <Stack.Screen options={{
                    headerShown: false
                }} name="profile" component={Profile} />
                <Stack.Screen options={{
                    headerShown: false
                }} name="video" component={Videocall} />
                <Stack.Screen options={{
                    headerShown: false
                }} name="hospital" component={Hospital} />
                <Stack.Screen name="singlehos" component={Singleabu} />
                <Stack.Screen options={{
                    headerShown: false
                }} name="hoslogin" component={Hoslogin} />
                <Stack.Screen options={{
                    headerShown: false
                }} name="hossign" component={Hossign} />
                <Stack.Screen options={{
                    headerShown: false
                }} name="hosotp" component={HosOtp} />
                <Stack.Screen options={{
                    headerShown: false
                }} name="hoshome" component={Hoshome} />
                <Stack.Screen options={{
                    headerShown: false
                }} name="map" component={Map} />
                <Stack.Screen options={{
                    headerShown: false
                }} name="dos" component={Hosdoc} />
                <Stack.Screen name="singledos" component={Singledoc} />
                <Stack.Screen options={{
                    headerShown: false
                }} name="shedule" component={Sceduletime} />
                <Stack.Screen options={{
                    headerShown: false
                }} name="sucessamb" component={Sucessamb} />
                <Stack.Screen options={{
                    headerShown: false
                }} name="ambulance" component={Ambulancebook} />
                <Stack.Screen options={{
                    headerShown: false
                }} name="doctor" component={Doctorbook} />
                <Stack.Screen options={{
                    headerShown: false
                }} name="doctorvideo" component={Doctorvideo} />
                <Stack.Screen options={{
                    headerShown: false
                }} name="doctorprofile" component={Doctorprofile} />
                <Stack.Screen options={{
                    headerShown: false
                }} name="patientreport" component={Patientmedicalreport} />
                <Stack.Screen options={{
                    headerShown: false
                }} name="patientambulance" component={Patientprofileambulance} />
                <Stack.Screen options={{
                    headerShown: false
                }} name="patientdoctor" component={Patientprofiledoctor} />
                <Stack.Screen options={{ headerShown: false }}
                    name='report' component={Report}
                >
                </Stack.Screen>
                <Stack.Screen options={{ headerShown: false }}
                    name='patientmedical' component={Patientreport}
                >
                </Stack.Screen>
                <Stack.Screen options={{ headerShown: false }}
                    name='stream' component={HostPage}
                >
                </Stack.Screen>
                <Stack.Screen options={{ headerShown: false }}
                    name='hoststream' component={Hoststream}
                >
                </Stack.Screen>
                <Stack.Screen options={{ headerShown: false }}
                    name='scuess' component={Scuess}
                >
                </Stack.Screen>
                <Stack.Screen options={{ headerShown: false }}
                    name='deases' component={Deases}
                >
                </Stack.Screen>
                <Stack.Screen options={{ headerShown: false }}
                    name='singledeases' component={Signledeases}
                >
                </Stack.Screen>
                <Stack.Screen options={{ headerShown: false }}
                    name='health' component={Health}
                >
                </Stack.Screen>
                <Stack.Screen options={{ headerShown: false }}
                    name='patmap' component={PatientMap}
                >
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default Stackroute;