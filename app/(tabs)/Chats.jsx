import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import UserChat from "../../component/UserChat";

const Chats = () => {
  const [section, setSection] = useState(true);
  return (
    <View className="py-5 my-5 mx-4">
      <View className="bg-white border border-gray-300 rounded-2xl shadow-lg py-1 my-3 mx-2 flex-row items-center">
        <TextInput
          placeholder="Search..."
          className="flex-1 py-2 text-lg text-gray-500 px-3"
          placeholderTextColor="gray"
          style={{ outline: "none" }} // To remove the default outline on focus
        />
        <Entypo
          name="magnifying-glass"
          size={30}
          color="gray"
          className="mx-2"
        />
      </View>

      {/* Chats Section */}
      <View className="flex flex-row justify-around px-4 py-2 my-1 rounded-lg bg-teal-500">
        <TouchableOpacity
          className="flex flex-row items-center"
          onPress={() => {
            setSection(true);
          }}
        >
          {section ? (
            <>
              <Entypo name="chat" size={24} color="black" />
              <Text className="text-2xl font-medium ml-2 text-black">
                General
              </Text>
            </>
          ) : (
            <>
              <Entypo name="chat" size={24} color="white" />
              <Text className="text-2xl font-medium ml-2 text-white">
                General
              </Text>
            </>
          )}
        </TouchableOpacity>
        <Text className="text-3xl text-white">|</Text>
        <TouchableOpacity
          className="flex flex-row items-center"
          onPress={() => {
            setSection(false);
          }}
        >
          {section ? (
            <>
              <Entypo name="block" size={20} color="white" />
              <Text className="text-2xl font-medium ml-2 text-white">
                Blocked
              </Text>
            </>
          ) : (
            <>
              <Entypo name="block" size={20} color="black" />
              <Text className="text-2xl font-medium ml-2 text-black">
                Blocked
              </Text>
            </>
          )}
        </TouchableOpacity>
      </View>
      {/* Chats Section chats */}
      <ScrollView>
        <View className="mt-3">
          {section ? (
            <>
             <UserChat name="Rohit Singh" notifi={1} />
              <UserChat name="Amrit Lal" notifi={10} />
              <UserChat name="Nima Lepcha" notifi={5} />
              <UserChat name="Abishek khulal" notifi={8} />
            </>
          ) : (
            <>
              <UserChat name="Suman Yadav" notifi={1} />
              <UserChat name="Anurag Kashyab" notifi={3} />
            </>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default Chats;
