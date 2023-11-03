import { StyleSheet, Text, View, Pressable } from "react-native";

function GoalItem({ text, onDeleteItem, itemKey }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={() => onDeleteItem(itemKey)}
        style={({pressed})=> pressed && styles.pressedItem}
        >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;
const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem:{
    opacity: 0.5
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
