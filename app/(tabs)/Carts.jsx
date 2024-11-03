import { View, Text, ScrollView, StyleSheet,TouchableOpacity } from 'react-native';
import React from 'react';
import Mycart from '../../component/Mycart';

const Carts = () => {
  return (
    <View className="flex-1 p-4">
      <Text className="text-center text-2xl font-semibold py-2 mt-10 rounded-lg bg-purple-500">
        My Carts
      </Text>
      <View className="flex flex-row justify-between mx-3 my-2">
        <Text className="text-2xl font-medium">Total</Text>
        <Text className="text-2xl font-medium">₹1200/-</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Mycart />
        <Mycart />
        <Mycart />
        <Mycart />
        <Mycart />
        <Mycart />
      </ScrollView>
      <View style={styles.footer}>
        <View className="flex-row justify-between">
          <Text className="text-xl font-medium">Total ₹1200/-</Text>
          <TouchableOpacity className="rounded-md bg-blue-500 py-1 px-10 w-auto" activeOpacity={0.6}>
            <Text className="text-center font-medium text-lg text-white py-1">Proceed</Text>
         </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingBottom: 80, // Adjust padding for the footer space
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 14,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
});

export default Carts;
