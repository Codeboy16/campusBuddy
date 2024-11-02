import {
  Text,
  TextInput,
  View,
  ScrollView,
  Image,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import react from "react";
import "../../global.css";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { useState, useEffect } from "react";
import CartBox from "../../component/Cartbox";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import AntDesign from "@expo/vector-icons/AntDesign";
import Shopbox from "../../component/Shopbox";

export default function HomeScreen() {
  const [msg, setMsg] = useState(true);
  return (
    <View className="mx-3 mt-5 pt-5">
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <ScrollView>
        {/* Header Section */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            flex: 1,
            marginHorizontal: 2,
          }}
        >
          <Ionicons name="menu" size={46} color="black" />
          <TextInput
            style={{
              flex: 1,
              marginHorizontal: 6,
              borderWidth: 2,
              height: 48,
              borderRadius: 25,
              paddingHorizontal: 15,
              fontSize: 20,
            }}
            placeholder="Search here...."
            placeholderTextColor="black"
            autoComplete="off"
            maxLength={30}
          />
          {msg ? (
            <Ionicons
              name="notifications-sharp"
              size={37}
              color="blue"
              onPress={() => setMsg(false)}
            />
          ) : (
            <MaterialIcons
              name="notifications-active"
              size={37}
              color="blue"
              onPress={() => setMsg(true)}
            />
          )}
        </View>
        {/* Body Section */}
        <View className="my-4 mx-4">
          <Text className="text-3xl font-medium">Hi' Rohit Singh 👋</Text>
          <Text className="text-2xl font-medium py-2">
            Why Buy New When One Can Share😊
          </Text>
        </View>
        <View style={styles.container}>
          <Image
            source={require("../../assets/images/poster.png")}
            style={styles.image}
            resizeMode="cover" // or "contain" depending on your needs
          />
        </View>
        {/* Caterogry Section */}
        <View className="my-5 mx-2">
          <View className="flex-1 flex-row justify-between ">
            <Text className="text-3xl font-medium">Categories</Text>
            <Text className="text-2xl font-medium underline text-amber-600">
              See All →
            </Text>
          </View>
          {/* CartBox */}
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View className="my-4 flex-1 flex-row justify-around flex-wrap ">
              <CartBox
                color="red"
                icon={
                  <FontAwesome5
                    name="home"
                    size={84}
                    color="white"
                    className="text-center"
                  />
                }
                name="Home"
              />
              <CartBox
                color="yellow"
                icon={
                  <FontAwesome6
                    name="shirt"
                    size={84}
                    color="white"
                    className="text-center"
                  />
                }
                name="Cloths"
              />
              <CartBox
                color="blue"
                icon={
                  <AntDesign
                    name="copy1"
                    size={84}
                    color="white"
                    className="text-center"
                  />
                }
                name="Notes"
              />
              <CartBox
                color="purple"
                icon={
                  <FontAwesome5
                    name="donate"
                    size={84}
                    color="white"
                    className="text-center"
                  />
                }
                name="Donate"
              />
              <CartBox
                color="yellow"
                icon={
                  <FontAwesome5
                    name="utensils"
                    size={84}
                    color="white"
                    className="text-center"
                  />
                }
                name="Utensils"
              />
            </View>
          </ScrollView>
          {/* Recommended */}
          <View>
            <View className="flex-1 flex-row justify-between py-2">
            <Text className="text-3xl font-medium">Suggested😄</Text>
            <Text className="text-2xl font-medium underline text-amber-600">
              More →
            </Text>
          </View>
            {/* Import Shop Box */}
            <View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <Shopbox/>
                <Shopbox/>
                <ActivityIndicator size={100} />
              </ScrollView>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%", // Use full width of the container
    height: 200, // Set a fixed height or use a percentage if needed
    borderRadius: 5, // optional: adds rounded corners
  },
});
