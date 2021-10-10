import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import Categories from '../Components/Categories'
import HeaderTabs from '../Components/HeaderTabs'
import SearchBar from '../Components/SearchBar'

export default function Home() {
    return (
        <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
            <View style={{ backgroundColor: 'white', padding: 15 }}>
                <HeaderTabs />
                <SearchBar />
            </View>
            <Categories />
        </SafeAreaView>
    )
}
