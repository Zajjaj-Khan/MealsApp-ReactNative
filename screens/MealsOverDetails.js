import { View, Text, Image, StyleSheet, ScrollView, Button } from "react-native";
import { useLayoutEffect } from "react";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";
import Subtitle from "../components/MealsDetails/Subtitle";
import List from "../components/MealsDetails/List";
import IconButton from "../components/IconButton";

function MealsOverDetails({ route,navigation }) {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
const headerButtonHandler = () =>{
  console.log('Pressed')
}
useLayoutEffect(()=>{
  navigation.setOptions({
    headerRight:()=>{
      return <IconButton onPress={headerButtonHandler} icon="star" color="white" />
    }
  });
},[navigation])


  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.outerList}>
        <View style={styles.listContianer}>
          <Subtitle>Ingredient</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealsOverDetails;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 16,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    color: "white",
    textAlign: "center",
  },
  detailText: {
    color: "white",
  },
  listContianer: {
    width: "80%",
  },
  outerList: {
    alignItems: "center",
  },
});
