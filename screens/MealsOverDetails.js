import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MealsOverDetails = ({route}) => {
    const mealId = route.params.mealId;

  return (
    <View>
      <Text>MealsOverDetails ({mealId})</Text>
    </View>
  );
};

export default MealsOverDetails;

const styles = StyleSheet.create({

    




});
