// HostPage.js
import React from 'react';
import { StyleSheet, View } from 'react-native';
import ZegoUIKitPrebuiltLiveStreaming, { AUDIENCE_DEFAULT_CONFIG, } from '@zegocloud/zego-uikit-prebuilt-live-streaming-rn'

export default function HostPage(navigation) {
    const userid = String(Math.floor(Math.random() * 10000))
    return (
        <View style={{ flex: 1, marginBottom: 100 }}>
            <ZegoUIKitPrebuiltLiveStreaming
                appID={1339262393}
                appSign={'ad90dd246bf588ce877976a83a04948dea8a2ab7baa1f8ebc9623a805bfbf91d'}
                userID={userid}
                userName={"alok"}
                liveID={"alok"}


                config={{
                    ...AUDIENCE_DEFAULT_CONFIG,
                    onLeaveLiveStreaming: () => { console.log("Home") }
                }}
            />
        </View>
    );
}