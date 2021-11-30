import React from "react";
import { View, Text } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import About from "..//Components/resturantDetail/About";
import MenuItems from "../Components/resturantDetail/MenuItems";
import ViewCart from "../Components/resturantDetail/ViewCart";


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


export default function ResturantDetail({ route, navigation }) {
  return (
    <View>
      <About route={route} />
      <Divider width={1.5} style={{ marginVertical: 20 }} />
      <MenuItems resturantName={route.params.name} foods={foods} />
      <ViewCart navigation={navigation} />
    </View>
  );
}


