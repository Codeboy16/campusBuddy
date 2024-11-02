import { View, Text } from "react-native";
import React from "react";
import CartBox from "../../component/Cartbox";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import Animated,{ LightSpeedInLeft, LightSpeedInRight} from 'react-native-reanimated';

const Categories = () => {
  return (
    <View className="my-4 flex-1 flex-row justify-evenly flex-wrap py-2">
      <Animated.View entering={LightSpeedInLeft.delay(10).duration(1000)}>
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
      </Animated.View>
       {/* two */}
      <Animated.View entering={LightSpeedInRight.delay(10).duration(1100)}>
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
      </Animated.View>

      {/* Three */}
      <Animated.View entering={LightSpeedInLeft.delay(10).duration(1150)}>
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
      </Animated.View >
       {/* Four */}
       <Animated.View entering={LightSpeedInRight.delay(10).duration(1200)}>
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
      </Animated.View>
      {/* Five */}
      <Animated.View entering={LightSpeedInLeft.delay(10).duration(1250)}>
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
      </Animated.View>
      {/* Six */}
      <Animated.View entering={LightSpeedInRight.delay(10).duration(1300).damping(20)}>
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
      </Animated.View>

    </View>
  );
};

export default Categories;
