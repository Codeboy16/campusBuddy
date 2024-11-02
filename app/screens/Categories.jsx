import { View, Text } from "react-native";
import React from "react";
import CartBox from "../../component/Cartbox";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";

const Categories = () => {
  return (
    <View className="my-4 flex-1 flex-row justify-evenly flex-wrap py-2">
      <CartBox
        color="red"
        icon={
          <FontAwesome5
            name="home"
            size={80}
            color="white"
            className="text-center"
          />
        }
        name="Home"
      />
      <CartBox
        color="purple"
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
        color="green"
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
        color="orange"
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

      <CartBox
        color="#007BA7"
        icon={
          <Entypo
            name="laptop"
            size={84}
            color="white"
            className="text-center"
          />
        }
        name="Electronic"
      />
    </View>
  );
};

export default Categories;
