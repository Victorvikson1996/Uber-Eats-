import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function HeaderTabs() {

    const [activeTab, setActiveTab] = useState('Delivery')
    return (
        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <HeaderButton
                text="Delivery"
                btnColor="black"
                textColor="white"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            <HeaderButton
                text="Pickup"
                btnColor="white"
                textColor="black"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
        </View>
    )
}


const HeaderButton = (props) => {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: props.activeTab === props.text ? "black" : 'white',
                paddingVertical: 6,
                paddingHorizontal: 16,
                borderRadius: 30,
                marginTop: 10,
            }}
            onPress={() => props.setActiveTab(props.text)}
        >
            <Text style={{ color: props.activeTab === props.text ? 'white' : "black" }}>{props.text}</Text>
        </TouchableOpacity>
    )
}