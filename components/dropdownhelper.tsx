import {
  useWindowDimensions,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import Color from "color";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

type DropDownItemType = {
  label: string;
  iconName: string;
};

type DropDownProps = DropDownItemType & {
  index: number;
  dropdownitemcount: number;
  isExpanded: Animated.SharedValue<boolean>;
  onPress: () => void;
};

const DropDownHelper: React.FC<DropDownProps> = ({
  label,
  iconName,
  index,
  dropdownitemcount,
  isExpanded,
  onPress,
}) => {
  const { width: windowWidth } = useWindowDimensions();
  const DropListHeight = 70;
  const dropdownheight = dropdownitemcount * (DropListHeight + 10);
  const collapsedTop = dropdownheight / 2 - DropListHeight / 2;
  const expandTop = (DropListHeight + 10) * index;
  const expandedBackgroundColor = "#1B1B1B";
  const collapseBackgroundColor = Color(expandedBackgroundColor)
    .lighten(index * 0.06)
    .hex();

  const isHeader = index === 0;
  const rHeader = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: withTiming(isHeader && isExpanded.value ? "90deg" : "0deg"),
        },
      ],
    };
  }, []);
  const rstyle = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(
        isExpanded.value ? expandedBackgroundColor : collapseBackgroundColor
      ),
      top: withSpring(isExpanded.value ? expandTop : collapsedTop),
      transform: [
        {
          scale: withSpring(isExpanded.value ? 1 : 1 - index * 0.08),
        },
        {
          translateY: dropdownheight / 4.45,
        },
      ],
    };
  }, []);
  const leftIcon = useAnimatedStyle(() => {
    return {
      opacity: withTiming(isHeader ? 1 : isExpanded.value ? 1 : 0),
    };
  }, []);
  return (
    <Animated.View
      onTouchEnd={() => {
        if (isHeader) isExpanded.value = !isExpanded.value;
      }}
      style={[
        {
          zIndex: isHeader ? 1 : 0,
          position: "absolute",
          width: windowWidth * 0.95,
          height: DropListHeight,
          borderRadius: 15,
          left: 10,

          top: (DropListHeight + 10) * index,
        },
        rstyle,
      ]}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Animated.View
          style={[
            {
              position: "absolute",
              width: 50,
              aspectRatio: 1,
              backgroundColor: "#111",
              borderRadius: 10,
              left: 15,
              justifyContent: "center",
              alignItems: "center",
            },
            leftIcon,
          ]}
        >
          <AntDesign name={iconName as any} size={20} color="#D4D4D4" />
        </Animated.View>
        <TouchableOpacity onPress={onPress} style={{ padding: 10 }}>
          <Text
            style={{
              color: "white",
              fontSize: 22,
              textTransform: "uppercase",
              letterSpacing: 1.2,
            }}
          >
            {label}
          </Text>
        </TouchableOpacity>
        <Animated.View
          style={[
            {
              position: "absolute",
              width: 50,
              aspectRatio: 1,
              backgroundColor: "transparent",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            },
            { right: 15 },
            rHeader,
          ]}
        >
          <MaterialIcons
            name={isHeader ? "arrow-forward-ios" : "arrow-forward"}
            size={20}
            color={"#D4D4D4"}
          />
        </Animated.View>
      </View>
    </Animated.View>
  );
};

export { DropDownHelper };
export type { DropDownItemType };
