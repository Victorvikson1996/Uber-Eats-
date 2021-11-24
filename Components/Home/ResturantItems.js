import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export const LocalResturants = [
    {
        name: "Ntachi",
        image_url: "https://images.unsplash.com/photo-1626777552795-3a5e3f6ee7ec?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHJlc3R1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        categories: [ "Soup", "Bar" ],
        reviews: 558,
        rating: 9.8
    },
    {
        name: "Sarova Potico",
        image_url: "https://images.unsplash.com/photo-1599354607459-81c8b0d90bf5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1167&q=80",
        categories: [ "Fried Rice", "Pasta" ],
        reviews: 69,
        rating: 9.8,

    },
    {
        name: "Eat More",
        image_url: "https://images.unsplash.com/photo-1626777552795-3a5e3f6ee7ec?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHJlc3R1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        categories: [ "Cake", "Ice Creame" ],
        reviews: 2554,
        rating: 6.8
    },
    {
        name: "More Eat",
        image_url: "https://images.unsplash.com/photo-1615750824528-4398b8e5cd93?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
        categories: [ "Chinese", "Bar" ],
        reviews: 685,
        rating: 5.5,
    },

]



export default function ResturantItems({ navigation, ...props }) {
    return (
        <>
            {
                props.resturantData.map((resturant, index) => (
                    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}
                        onPress={() =>
                            navigation.navigate("ResturantDetail", {
                                name: resturant.name,
                                image: resturant.image_url,
                                price: resturant.price,
                                reviews: resturant.reviews_count,
                                rating: resturant.rating,
                                categories: resturant.categories

                            }
                            )}>

                        <View key={index} style={{ marginTop: 10, padding: 15, backgroundColor: 'white' }}>
                            <ResturantImage image={resturant.image_url} />
                            <ResturantInfo
                                name={resturant.name}
                                rating={resturant.rating}

                            />
                        </View>
                    </TouchableOpacity>
                ))
            }

        </>
    );
}


const ResturantImage = (props) => (
    <>
        <Image
            source={{
                uri: props.image
            }}
            style={{ width: "100%", height: 180 }}
        />
        <TouchableOpacity style={{ position: 'absolute', right: 20, top: 20 }}>
            <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
        </TouchableOpacity>
    </>


);


const ResturantInfo = (props) => {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 10
        }}>
            <View>
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{props.name}</Text>
                <Text style={{ fontSize: 13, color: 'gray' }}>30-45 ·min </Text>
            </View>
            <View style={{
                backgroundColor: '#eee',
                height: 30,
                width: 30,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 15,
            }}>
                <Text>{props.rating}</Text>
            </View>
        </View>

    )

}