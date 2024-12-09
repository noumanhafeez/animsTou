import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { background_color, data } from "../components/BarHelper";
import WeeklyBarChart from "../components/WeeklyBarChart";

const BarAnimation = () => {
  const [activeweek, setactiveweek] = useState(0);
  return (
    <View style={styles.container}>
      <WeeklyBarChart
        weeks={data}
        activeIndex={activeweek}
        onweekchange={setactiveweek}
      />
    </View>
  );
};

export default BarAnimation;

const styles = StyleSheet.create({
  container: {
    backgroundColor: background_color,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
