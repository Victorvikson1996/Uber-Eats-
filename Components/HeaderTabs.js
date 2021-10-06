import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function HeaderTabs() {
    return (
        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <HeaderButton text="Delivery" />
            <HeaderButton text="Pickup" />
        </View>
    )
}


const HeaderButton = (props) => {
    return (
        <TouchableOpacity style={{ backgroundColor: 'black' }}>
            <Text style={{ color: 'white' }}>{props.text}</Text>
        </TouchableOpacity>
    )
}