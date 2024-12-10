import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BarAnimation from "./screens/BarAnimation";
import CircluarProgress from "./screens/CircluarProgress";
import DropDownControl from "./screens/DropDownControl";
import CustomBar from "./screens/CustomBar";
import Magiclayout from "./screens/magiclayout";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen
          name="DropDown"
          component={DropDownControl}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Magiclayout" component={Magiclayout} />
        <Stack.Screen name="CustomBar" component={CustomBar} />
        <Stack.Screen name="BarAnimation" component={BarAnimation} />
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
