import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'



const foods = [
    {
        title: "Lasagna",
        description: "With butter lettuce, tomato and sauce ",
        price: "$13.50",
        image: "https://media.istockphoto.com/photos/hot-dogs-for-game-day-picture-id1326146587?b=1&k=20&m=1326146587&s=170667a&w=0&h=PXRYyxj4ZN5HXPzQIRG8t5a-B4Np0z-vqVWlRYDQ7g4="
    },
    {
        title: "Bread",
        description: "With butter lettuce, tomato and sauce ",
        price: "$13.50",
        image: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
        title: "Burger",
        description: "With butter lettuce, tomato and sauce ",
        price: "$13.50",
        image: "https://media.istockphoto.com/photos/hot-dogs-for-game-day-picture-id1326146587?b=1&k=20&m=1326146587&s=170667a&w=0&h=PXRYyxj4ZN5HXPzQIRG8t5a-B4Np0z-vqVWlRYDQ7g4="
    },
    {
        title: "Lasagna",
        description: "With butter lettuce, tomato and sauce ",
        price: "$13.50",
        image: "https://media.istockphoto.com/photos/hot-dogs-for-game-day-picture-id1326146587?b=1&k=20&m=1326146587&s=170667a&w=0&h=PXRYyxj4ZN5HXPzQIRG8t5a-B4Np0z-vqVWlRYDQ7g4="
    }

]

const styles = StyleSheet.create({
    menuItemStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20
    },
    titleStyle: {
        fontSize: 19,
        fontWeight: '600'
    }
})



export default function MenuItems() {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {foods.map((food, index) => (
                <View key={index}>
                    <View style={styles.menuItemStyle}>
                        <FoodInfo food={food} />
                        <FoodImage food={food} />
                    </View>
                    <Divider width={0.5} orientation="vertical" />
                </View>
            ))}
        </ScrollView>
    )
}



const FoodInfo = (props) => {
    return (
        <View style={{ width: 220, justifyContent: 'space-evenly' }}>
            <Text style={styles.titleStyle}>{props.food.title}</Text>
            <Text>{props.food.description}</Text>
            <Text>{props.food.price}</Text>
        </View>
    )
}


const FoodImage = (props) => {
    return (
        <View>
            <Image
                source={{ uri: props.food.image }}
                style={{ width: 100, height: 100, borderRadius: 8 }
                } />
        </View>
    )

}


