import React from "react";
import { View, Text, Image } from "react-native";




// const yelpResturantInfo = {
//   name: "Farmhouse Kitchen Thai Kitchen",
//   image: "https://images.unsplash.com/photo-1626777553635-be342a766750?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1331&q=80",
//   price: "$13.50",
//   rating: 4.5,
//   reviews: '1500',
//   categories: [ { title: 'Thai' }, { title: 'Comfortfood' } ]
// }



export default function About(props) {


  const { name, image, price, reviews, rating, categories } = props.route.params

  const formattedCategories = categories.map((cat) => cat.title).join(" · ")

  const description = `${formattedCategories} ${price ? "·" + price : ""} · 💳 · ${rating} 🌟(${reviews}+)`;


  return (
    <View>
      <ResturantImage image={image} />
      <ResturantName name={name} />
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

const ResturantName = (props) => {
  return (
    <Text
      style={{
        fontSize: 29,
        fontWeight: "400",
        marginTop: 10,
        marginHorizontal: 15,
      }}
    >
      {props.name}
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
