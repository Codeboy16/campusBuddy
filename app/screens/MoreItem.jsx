import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import Moreitem from "../../component/Moreitemcart";

const MoreItem = () => {
  const [productdata, setProductData] = useState([]);
  useEffect(() => {
    try {
      const Api = async () => {
        const product = await fetch("https://fakestoreapi.com/products");
        const product_data = await product.json();
        setProductData(product_data);
      };
      Api();
    } catch (err) {
      Alert.alert("Somthing Went Wrong. Please Try Agian...");
    }
  }, []);
  return (
    <ScrollView>
      <View className="flex-1 flex-row justify-evenly flex-wrap">
        {productdata ? (
          productdata.map((val) => (
            <Moreitem
              key={val.id}
              title={val.title}
              image={val.image}
              description={val.description}
              price={val.price}
            />
            //  id, title, price, description,image
          ))
        ) : (
          <ActivityIndicator size={100} />
        )}
      </View>
    </ScrollView>
  );
};

export default MoreItem;
