import { Tabs } from "expo-router";
import { Keyboard} from 'react-native';
import React, { useEffect, useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setIsKeyboardVisible(true);
    });
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setIsKeyboardVisible(false);
    });

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: { fontSize: 16, fontWeight: 'bold' },
        tabBarStyle: {
          height: isKeyboardVisible ? 0 : 72, // Hide tab bar when keyboard is open
          paddingBottom: isKeyboardVisible ? 0 : 5,
          paddingTop: isKeyboardVisible ? 0 : 5,
          display: isKeyboardVisible ? 'none' : 'flex', // Additional way to hide it
        },
        tabBarActiveTintColor: '#1529fe',
        tabBarInactiveTintColor: '#1e2a34',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <Feather name="home" size={35} color={color} />,
        }}
      />
      <Tabs.Screen
        name="Chats"
        options={{
          title: "Chats",
          tabBarIcon: ({ color }) => <Ionicons name="chatbubble-ellipses-outline" size={35} color={color} />,
        }}
      />
      <Tabs.Screen
        name="Camera"
        options={{
          title: "<-____->",
          tabBarIcon: ({ color }) => (
            <AntDesign name="pluscircleo" size={40} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Carts"
        options={{
          title: "Carts",
          tabBarIcon: ({ color }) => (
                      <AntDesign name="shoppingcart" size={35} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="User"
        options={{
          title: "User",
          tabBarIcon: ({ color }) => <AntDesign name="user" size={35} color={color} />,
        }}
      />
    </Tabs>
  );
}

