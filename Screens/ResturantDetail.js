import React from "react";
import { View, Text } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import About from "..//Components/resturantDetail/About";
import MenuItems from "../Components/resturantDetail/MenuItems";
export default function ResturantDetail() {
  return (
    <View>
      <About />
      <Divider width={1.5} style={{ marginVertical: 20 }} />
      <MenuItems />
    </View>
  );
}
