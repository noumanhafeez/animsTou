import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Dropdown } from "../components/Dropdown";

const options = [
  { label: "ProgressCircle", iconName: "loading1" },
  { label: "CustomTabBar", iconName: "isv" },
  { label: "BarAnimation", iconName: "barchart" },
  { label: "ToDoList", iconName: "bars" },
];

const header = {
  label: "Welcome",
  iconName: "rest",
};

const DropDownControl = () => {
  return (
    <View style={styles.container}>
      {/* <Text>DropDownContfsdrol</Text> */}
      <Dropdown header={header} options={options} />
    </View>
  );
};

export default DropDownControl;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3E3649",
    flex: 1,
  },
});
