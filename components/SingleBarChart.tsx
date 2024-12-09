import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { format } from "date-fns";

export type Day = {
  day: Date;
  value: number;
};

type singlebarprops = {
  maxHeight: number;
  width: number;
  day: Day;
};

const SingleBarChart = ({ maxHeight, width, day }: singlebarprops) => {
  const rstyle = useAnimatedStyle(() => {
    return {
      height: withTiming(maxHeight * day.value),
      opacity: withTiming(day.value),
    };
  }, [day.value, maxHeight]);
  return (
    <View>
      <Animated.View
        style={[
          {
            width: width,
            backgroundColor: "white",
            borderRadius: 15,
            //   borderCurve: "continuous",
          },
          rstyle,
        ]}
      />
      <Text
        style={{
          width: width,
          textAlign: "center",
          fontSize: 10,
          color: "white",
          marginTop: 10,
        }}
      >
        {format(day.day, "eeeee")}
      </Text>
    </View>
  );
};

export default SingleBarChart;

const styles = StyleSheet.create({});
