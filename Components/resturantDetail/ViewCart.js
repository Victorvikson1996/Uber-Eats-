import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'

export default function ViewCart(props) {

    const items = useSelector((state) => state.cartReducer.selectedItems.items)

    const total = items
        .map((item) => Number(item.price.replace('$', '')))
        .reduce((prev, curr) => prev + curr, 0);
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                flexDirection: 'row',
                position: 'absolute',
                bottom: 80,
                zIndex: 999,
                justifyContent: 'center'
            }}
        >
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                width: '100%'
            }}>
                <TouchableOpacity
                    style={{
                        marginTop: 20,
                        backgroundColor: 'black',
                        alignItems: 'center',
                        padding: 13,
                        borderRadius: 30,
                        width: 300,
                        position: 'relative'
                    }}
                >
                    <Text style={{ color: 'white', fontSize: 20 }}>View Cart</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}
