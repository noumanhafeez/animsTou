import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SegmentedControl } from "../components/segmented-Control";

const CustomBar = () => {
  const [selectedOption, setSelectedOption] = useState("hello");

  const handleOptionPress = (option) => {
    setSelectedOption(option); // Update selected option
  };

  return (
    <View style={styles.container}>
      <SegmentedControl
        options={["hello", "What's", "up!"]}
        selectedOptions={selectedOption}
        onOptionPress={(option) => handleOptionPress(option)}
      />
    </View>
  );
};

export default CustomBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3E3649",
    alignItems: "center",
    justifyContent: "center",
  },
  selectedText: {
    marginTop: 20,
    fontSize: 18,
    color: "black",
  },
});
