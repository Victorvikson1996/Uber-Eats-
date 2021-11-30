import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'
import LottieView from 'lottie-react-native'
import MenuItems from '../Components/resturantDetail/MenuItems'
import firebase from '../firebase'


export default function OrderCompleted() {

    const [ lastOrder, setLastOrder ] = useState({
        items: [
            {
                title: "Burger",
                description: "With butter lettuce, tomato and sauce ",
                price: "$13.50",
                image: "https://media.istockphoto.com/photos/hot-dogs-for-game-day-picture-id1326146587?b=1&k=20&m=1326146587&s=170667a&w=0&h=PXRYyxj4ZN5HXPzQIRG8t5a-B4Np0z-vqVWlRYDQ7g4="
            }
        ]
    })

    const { items, resturantName } = useSelector((state) => state.cartReducer.selectedItems)

    const total = items
        .map((item) => Number(item.price.replace('$', '')))
        .reduce((prev, curr) => prev + curr, 0);

    const totalUSD = total.toLocaleString('en', {
        style: "currency",
        currency: "USD"
    })

    useEffect(() => {
        const db = firebase.firestore();
        const unsubscribe = db
            .collection("orders")
            .orderBy("createdAt", "desc")
            .limit(1)
            .onSnapshot((snapshot) => {
                snapshot.docs.map((doc) => {
                    setLastOrder(doc.data());
                });
            });

        return () => unsubscribe();
    }, []);



    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ margin: 15, alignItems: 'center', height: '100%' }}>
                <LottieView
                    style={{
                        height: 100, alignSelf: 'center', marginBottom: 30
                    }}
                    source={require('../assets/animations/check-mark.json')}
                    autoPlay
                    speed={0.3}
                    loop={false}
                />
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Your Order At {resturantName} has been placed for {totalUSD}</Text>
                <MenuItems foods={lastOrder.items} hideCheckbox={true} />
                <ScrollView>
                    <LottieView
                        style={{
                            height: 200, alignSelf: 'center'
                        }}
                        source={require('../assets/animations/cooking.json')}
                        autoPlay
                        speed={0.5}
                        loop={false}
                    />
                </ScrollView>
            </View>
        </SafeAreaView>

    )
}
