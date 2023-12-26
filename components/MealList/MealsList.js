import {View, FlatList,StyleSheet} from 'react-native'

import MealItem from '../../screens/MealItem';

function MealsList({items}) {
    const renderMealItem = (itemData) => {
        const Item = itemData.item;
        return (
          <MealItem
            id = {Item.id}
            title={Item.title}
            imgUrl={Item.imageUrl}
            duration={Item.duration}
            complexity={Item.complexity}
            affordability={Item.affordability}
          />
        );
      };
      return (
        <View style={styles.container}>
          <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={renderMealItem}
          />
        </View>
      );



}
export default MealsList;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
  });