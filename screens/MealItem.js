import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "../components/MealDetails";
const MealItem = ({
  id,
  title,
  imgUrl,
  complexity,
  duration,
  affordability
}) => {
  const navigation = useNavigation();

  const selectMealHandler = () => {
    navigation.navigate("MealsOverDetails", {
      mealId: id,
    });
  };

  return (
    <View style={styles.mealItem}>
      <Pressable
      onPress={selectMealHandler}
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image style={styles.imgStyle} source={{ uri: imgUrl }} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails duration={duration} affordability={affordability} complexity={complexity} />
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  imgStyle: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  buttonPressed: {
    opacity: Platform.OS === "android" ? null : 0.5,
  },
});
