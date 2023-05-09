import React, { Component } from 'react';
import { View, stylesheet, Alert } from 'react-native';
import { ZegoUIKitPrebuiltCall, ONE_ON_ONE_VIDEO_CALL_CONFIG } from '@zegocloud/zego-uikit-prebuilt-call-rn'

export default function Doctorvideo({ navigation, route }) {
    const id = String(Math.floor(Math.random() * 100000))
    const videoid = route.params;

    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            zIndex: 0
        }}>
            <ZegoUIKitPrebuiltCall
                appID={625620669}
                appSign={"f35d399752789c29c3b1341eef13d80854b0021cf385514b2643f6d6e42f5116"}
                userID={id} // userID can be something like a phone number or the user id on your own user system. 
                userName={id}
                callID={videoid} // callID can be any unique string. 

                config={{
                    // You can also use ONE_ON_ONE_VOICE_CALL_CONFIG/GROUP_VIDEO_CALL_CONFIG/GROUP_VOICE_CALL_CONFIG to make more types of calls.
                    ...ONE_ON_ONE_VIDEO_CALL_CONFIG,
                    onOnlySelfInRoom: () => {
                        navigation.navigate('report');
                    },
                    onHangUp: () => {
                        navigation.navigate('report')
                    },
                }}
            />
        </View>
    );
}
