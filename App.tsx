import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SegmentedControl } from "./components/segmented-Control";
import { useState } from "react";
import BarAnimation from "./screens/BarAnimation";
import ColorShift from "./screens/colorShift";
import SortAnimation from "./screens/SortAnimation";
import CircluarProgress from "./screens/CircluarProgress";
import DropDownControl from "./screens/DropDownControl";
import CustomBar from "./screens/CustomBar";
import Magiclayout from "./screens/magiclayout";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen name="DropDown" component={DropDownControl} />
        <Stack.Screen name="Magiclayout" component={Magiclayout} />
        <Stack.Screen name="CustomBar" component={CustomBar} />
        <Stack.Screen name="BarAnimation" component={BarAnimation} />
        <Stack.Screen name="ColorShift" component={ColorShift} />
        <Stack.Screen name="SortAnimation" component={SortAnimation} />
        <Stack.Screen name="CircularProgress" component={CircluarProgress} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
