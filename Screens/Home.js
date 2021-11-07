import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import Categories from "../Components/Home/Categories";
import HeaderTabs from "../Components/Home/HeaderTabs";
import SearchBar from "../Components/Home/SearchBar";
import ResturantItems, {
  LocalResturants,
} from "../Components/Home/ResturantItems";
import { Divider } from "react-native-elements";
import BottomTabs from "../Components/Home/BottomTabs";

const YELP_API_KEY =
  "_R6U1T2m25B07OxYcxTu2qwTeaqvyEQVKVo5-jizULMbgUNYGpOXt9aixO9PSPPbZ88NPQym2NWJ4VTTbDsh9tdneBmTcLekU_OMERPLt153p-xGs_9x5-0zx9o5X3Yx";

export default function Home() {
  const [resturantData, setResturantData] = useState(LocalResturants);
  const [city, setCity] = useState("San Francisco");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getResturantFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setResturantData(
          json.businesses.filter((bussines) =>
            bussines.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };

  useEffect(() => {
    getResturantFromYelp();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <ResturantItems resturantData={resturantData} />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
}
