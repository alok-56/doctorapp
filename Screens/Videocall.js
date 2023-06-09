// App.js
import React, { Component } from 'react';
import { View, stylesheet, Alert } from 'react-native';
import { ZegoUIKitPrebuiltCall, ONE_ON_ONE_VIDEO_CALL_CONFIG } from '@zegocloud/zego-uikit-prebuilt-call-rn'

export default function Videocall({ navigation, route }) {
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
                appID={1612896257}
                appSign={"d87f22f7eed2d52f0cdefcefb8ba37a07a551b0314d5d80f30ccdf6e13267156"}
                userID={id} // userID can be something like a phone number or the user id on your own user system. 
                userName={id}
                callID={"alok"} // callID can be any unique string. 

                config={{
                    // You can also use ONE_ON_ONE_VOICE_CALL_CONFIG/GROUP_VIDEO_CALL_CONFIG/GROUP_VOICE_CALL_CONFIG to make more types of calls.
                    ...ONE_ON_ONE_VIDEO_CALL_CONFIG,
                    // onOnlySelfInRoom: () => { props.navigation.navigate('HomePage') },
                    // onHangUp: () => { props.navigation.navigate('HomePage') },
                }}
            />
        </View>
    );
}
