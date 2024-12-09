import {
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import { format } from "date-fns";
import SingleBarChart, { Day } from "./SingleBarChart";

type week = Day[];

type weekbarprops = {
  weeks: week[];
  activeIndex: number;
  onweekchange: (index: number) => void;
};

const WeeklyBarChart = ({ weeks, activeIndex, onweekchange }: weekbarprops) => {
  const { width: windowWidth } = useWindowDimensions();
  const activeweek = weeks[activeIndex];
  const barchartwidth = windowWidth * 0.9;
  const barchartgap = 10;
  const barwidth = (barchartwidth - barchartgap * (activeweek.length - 1)) / 7;
  const maxhieght = 150;
  const scrollheight = 60;

  return (
    <View style={{ height: scrollheight + maxhieght, width: windowWidth }}>
      <View
        style={{
          flexDirection: "row",
          gap: barchartgap,
          alignItems: "flex-end",
          marginHorizontal: (windowWidth - barchartwidth) / 2,
        }}
      >
        {activeweek.map((day, index) => (
          <SingleBarChart
            key={index}
            maxHeight={maxhieght}
            width={barwidth}
            day={day}
          />
        ))}
      </View>
      <ScrollView
        horizontal
        style={{ width: windowWidth, height: scrollheight }}
        snapToInterval={windowWidth}
        decelerationRate={"fast"}
        showsHorizontalScrollIndicator={false}
        disableIntervalMomentum
        scrollEventThrottle={16}
        onScroll={({ nativeEvent }) => {
          const scrolloffset = nativeEvent.contentOffset.x;
          const activeIndex = Math.round(scrolloffset / windowWidth);
          onweekchange(activeIndex);
        }}
      >
        {weeks.map((week, index) => {
          return (
            <View
              key={index}
              style={{
                height: scrollheight,
                width: windowWidth,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 12,
                  fontFamily: "FiraCode-Regular",
                  marginBottom: 10,
                }}
              >
                Week of {format(week[0].day, "dd MMM")}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default WeeklyBarChart;

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 100,
    backgroundColor: "red",
  },
});
