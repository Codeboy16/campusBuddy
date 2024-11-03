import { View, Text, ActivityIndicator, ScrollView, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import Moreitem from "../../component/Moreitemcart";

const MoreItem = () => {
  const [productdata, setProductData] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const Api = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const product_data = await response.json();
        setProductData(product_data);
      } catch (err) {
        Alert.alert("Something Went Wrong. Please Try Again...");
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };
    
    Api();
  }, []);

  return (
    <ScrollView>
      <View className="flex-1 flex-row justify-evenly flex-wrap">
        {loading ? ( // Show ActivityIndicator while loading
          <ActivityIndicator size={100} color="#0000ff" />
        ) : (
          productdata.map((val) => (
            <Moreitem
              key={val.id}
              title={val.title}
              image={val.image}
              description={val.description}
              price={val.price}
            />
          ))
        )}
      </View>
    </ScrollView>
  );
};

export default MoreItem;
