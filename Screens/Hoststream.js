import React from 'react';
import { StyleSheet, View } from 'react-native';
import ZegoUIKitPrebuiltLiveStreaming, { HOST_DEFAULT_CONFIG, } from '@zegocloud/zego-uikit-prebuilt-live-streaming-rn'

export default function Hoststream(navigation) {
    return (
        <View style={{ flex: 1 }}>
            <ZegoUIKitPrebuiltLiveStreaming
                appID={1339262393}
                appSign={'ad90dd246bf588ce877976a83a04948dea8a2ab7baa1f8ebc9623a805bfbf91d'}
                userID={"alok"}
                userName={"alok"}
                liveID={"alok"}

                config={{
                    ...HOST_DEFAULT_CONFIG,
                    onLeaveLiveStreaming: () => { console.log("Homes") }
                }}
            />
        </View>
    );
}