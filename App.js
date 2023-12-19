import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Ionicons from '@expo/vector-icons/Ionicons';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsDetail from "./screens/MealsDetail";
import MealsOverDetails from "./screens/MealsOverDetails";
import Favirotes from "./screens/Favirotes";


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        backgroundColor: "#342715",
        headerStyle: { backgroundColor: "#342715" },
        headerTintColor: "#FFFFFF",
        sceneContainerStyle: { backgroundColor: "#24180f" },
        drawerContentStyle:{ backgroundColor: "#342715"},
        drawerActiveTintColor:"#fff",
        drawerActiveBackgroundColor:"#92725a",
        drawerInactiveTintColor:"#ccc"
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{ title: "All Categories", 
        drawerIcon: ({focused, size}) => (
          <Ionicons
             name="md-list"
             size={size}
             color={focused ? '#fff' : '#ccc'}
          />
       ),
        }}
      />
      <Drawer.Screen name="FavirotesScreen" component={Favirotes} options={{drawerIcon: ({focused, size}) => (
          <Ionicons
             name="md-star"
             size={size}
             color={focused ? '#fff' : '#ccc'}
          />
       ),}} />
    </Drawer.Navigator>
  );
}
export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#342715",
            },
            headerTintColor: "#FFFFFF",
            contentStyle: { backgroundColor: "#24180f" },
          }}
        >
          <Stack.Screen
            name="DrawerScreen"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="MealsDetail" component={MealsDetail} />
          <Stack.Screen name="MealsOverDetails" component={MealsOverDetails} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
});
