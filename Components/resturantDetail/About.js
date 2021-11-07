import React from "react";
import { View, Text, Image } from "react-native";

const image =
  "https://images.unsplash.com/photo-1626777553635-be342a766750?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1331&q=80";

const title = "Farmhouse Kitchen Thai Cuisine";

const description = "This · Comfort Food · $$ · 💳  · 4 🌟 (2913+)";

export default function About() {
  return (
    <View>
      <ResturantImage image={image} />
      <ResturantTitle title={title} />
      <ResturantDescription description={description} />
    </View>
  );
}

const ResturantImage = (props) => {
  return (
    <Image
      source={{
        uri: props.image,
      }}
      style={{ width: "100%", height: 180 }}
    />
  );
};

const ResturantTitle = (props) => {
  return (
    <Text
      style={{
        fontSize: 29,
        fontWeight: "400",
        marginTop: 10,
        marginHorizontal: 15,
      }}
    >
      {props.title}
    </Text>
  );
};

const ResturantDescription = (props) => {
  return (
    <Text
      style={{
        fontSize: 15.5,
        marginHorizontal: 15,
        fontWeight: "400",
        marginTop: 10,
      }}
    >
      {props.description}
    </Text>
  );
};
