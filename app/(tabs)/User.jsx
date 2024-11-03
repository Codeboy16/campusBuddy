import { View, Text, Image, StyleSheet,ScrollView } from "react-native";
import React from "react";
import Animated, { LightSpeedInLeft, LightSpeedInRight } from "react-native-reanimated";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const User = () => {
  return (
    <ScrollView contentContainerStyle={{ paddingVertical: 50 }}>
    <View className="my-auto justify-center">
      <Image
        source={require("../../assets/images/UserMaleProfile.png")}
        className="w-48 h-52 mx-auto bg-cover rounded-full"
      />
      <Text className="text-lg text-center font-medium pt-3">22IT102030</Text>
      <Text className="text-2xl text-center font-semibold">Rohit Singh</Text>
      <Text className="text-base text-center font-medium">roithm_singh@srmus.edu.in</Text>
      {/* User Carts Section */}
      <Animated.View entering={LightSpeedInLeft.delay(10).duration(1000)}className="mt-5">
        <View className="border rounded-lg mx-6 flex flex-row items-center justify-around py-4 bg-blue-700 border-blue-600">
          <AntDesign name="user" size={30} color="white" />
          <Text className="text-2xl font-medium mx-2 text-white">My Profile</Text>
          <FontAwesome5 name="arrow-right" size={20} color="white" />
        </View>
      </Animated.View>
      {/* Section 2 */}
      <Animated.View entering={LightSpeedInRight.delay(10).duration(1000)}className="mt-2">
        <View className="border rounded-lg mx-6 flex flex-row items-center justify-around py-4 bg-green-700 border-green-600">
        <AntDesign name="message1" size={27} color="white" />
          <Text className="text-2xl font-medium mx-2 text-white">Message</Text>
          <FontAwesome5 name="arrow-right" size={20} color="white" />
        </View>
      </Animated.View>
      {/* Section 3 */}
      <Animated.View entering={LightSpeedInLeft.delay(10).duration(1000)}className="mt-2">
        <View className="border rounded-lg mx-6 flex flex-row items-center justify-around py-4 bg-orange-600 border-orange-500">
        <AntDesign name="hearto" size={26} color="white" />
          <Text className="text-2xl font-medium mx-2 text-white">Favourite</Text>
          <FontAwesome5 name="arrow-right" size={20} color="white" />
        </View>
      </Animated.View>
      {/* Section 4 */}
      <Animated.View entering={LightSpeedInRight.delay(10).duration(1000)}className="mt-2">
        <View className="border rounded-lg mx-6 flex flex-row items-center justify-around py-4 bg-indigo-600 border-indigo-500">
        <Ionicons name="location-outline" size={29} color="white" />
          <Text className="text-2xl font-medium mx-2 text-white">Location</Text>
          <FontAwesome5 name="arrow-right" size={20} color="white" />
        </View>
      </Animated.View>
      {/* Section 5 */}
      <Animated.View entering={LightSpeedInLeft.delay(10).duration(1000)}className="mt-2">
        <View className="border rounded-lg mx-6 flex flex-row items-center justify-around py-4 bg-gray-800 border-gray-700">
        <Feather name="settings" size={25} color="white" />
          <Text className="text-2xl font-semibold mx-2 text-white">Settings</Text>
          <FontAwesome5 name="arrow-right" size={20} color="white" />
        </View>
      </Animated.View>
      {/* Logout */}
      <View className="flex flex-row justify-center py-1 mx-6 my-2 rounded-3xl bg-red-600">
      <MaterialIcons name="logout" size={28} color="white" className="py-1"/>
      <Text className="text-2xl px-2 font-medium text-white py-1">Logout</Text>
      </View>
      {/* end */}
    </View>
    </ScrollView>
  );
};

export default User;
