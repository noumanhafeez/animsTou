import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useCallback, useState } from "react";
import Animated, { FadeIn, FadeOut, Layout } from "react-native-reanimated";

const list_color = "#1798DE";

interface Item {
  id: number;
}

const Magiclayout = () => {
  const [items, setitems] = useState<Item[]>(
    new Array(4).fill(0).map((_, index) => ({ id: index }))
  );

  const onAdd = useCallback(() => {
    setitems((currentitems) => {
      const nextitemid = (currentitems[currentitems.length - 1]?.id ?? 0) + 1;
      return [...currentitems, { id: nextitemid }];
    });
  }, []);

  const onDelete = useCallback((itemId: number) => {
    setitems((currentitems) => {
      return currentitems.filter((item) => item.id !== itemId);
    });
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onAdd}>
        <Text style={{ color: "white", fontSize: 40 }}>+</Text>
      </TouchableOpacity>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingVertical: 50 }}
      >
        {items.map((item) => {
          return (
            <Animated.View
              key={item.id}
              entering={FadeIn}
              style={styles.listview}
              exiting={FadeOut}
              layout={Layout.delay(300)}
              onTouchEnd={() => onDelete(item.id)}
            >
              {/* Add content inside the box (e.g., item ID or text) */}
              {/* <Text style={styles.itemText}>{`Item ${item.id}`}</Text> */}
            </Animated.View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Magiclayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listview: {
    height: 100,
    backgroundColor: list_color,
    width: "90%",
    marginVertical: 10,
    borderRadius: 15,
    alignSelf: "center",
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  itemText: {
    color: "white",
    fontSize: 18,
  },
  button: {
    width: 80,
    aspectRatio: 1,
    backgroundColor: "black",
    position: "absolute",
    bottom: 50,
    borderRadius: 40,
    right: 50,
    zIndex: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
