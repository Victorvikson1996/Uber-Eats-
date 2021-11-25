import React from "react";
import { View, Text } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import About from "..//Components/resturantDetail/About";
import MenuItems from "../Components/resturantDetail/MenuItems";
import ViewCart from "../Components/resturantDetail/ViewCart";



export default function ResturantDetail({ route, navigation }) {
  return (
    <View>
      <About route={route} />
      <Divider width={1.5} style={{ marginVertical: 20 }} />
      <MenuItems resturantName={route.params.name} />
      <ViewCart navigation={navigation} resturantName={route.params.name} />
    </View>
  );
}


