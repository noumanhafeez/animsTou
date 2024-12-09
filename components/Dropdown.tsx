import React from "react";
import { View, TouchableOpacity } from "react-native";
import { DropDownHelper } from "./dropdownhelper";
import { useSharedValue } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

type DropDownItemType = {
  label: string;
  iconName: string;
};

type DropDownProps = {
  header: DropDownItemType;
  options: DropDownItemType[];
};

const Dropdown: React.FC<DropDownProps> = ({ header, options }) => {
  const navigation = useNavigation();

  const dropItems = [header, ...options];
  const isExpanded = useSharedValue(false);
  const handleNavigation = (label: string) => {
    // Navigate to the respective screen based on the label
    if (label === "ProgressCircle") {
      navigation.navigate("CircularProgress"); // Replace with your screen name
    }
    if (label === "CustomTabBar") {
      navigation.navigate("CustomBar"); // Replace with your screen name
    }
    if (label === "BarAnimation") {
      navigation.navigate("BarAnimation"); // Replace with your screen name
    }
    if (label === "ToDoList") {
      navigation.navigate("Magiclayout"); // Replace with your screen name
    }
    // Add other conditions for additional labels if needed
  };

  return (
    <View>
      {dropItems.map((item, index) => {
        return (
          <DropDownHelper
            key={index}
            index={index}
            {...item}
            isExpanded={isExpanded}
            dropdownitemcount={dropItems.length}
            onPress={() => handleNavigation(item.label)}
          />
        );
      })}
    </View>
  );
};

export { Dropdown };
