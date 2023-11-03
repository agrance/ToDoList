import react, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [myGoals, setMyGoals] = useState([]);

  function startGoalHandler() {
    setModalIsVisible(true);
  }
  function endGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(newGoal) {
    setMyGoals((prev, id) => [
      ...prev,
      {
        text: newGoal,
        id: Math.random().toString(),
      },
    ]);
    endGoalHandler();
  }

  function deleteGoalHandler(id) {
    setMyGoals((currGoal) => {
      return currGoal.filter((goal) => goal.id !== id);
    });
  }
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color={"#b180f0"}
          onPress={startGoalHandler}
        />
        <GoalInput
          visible={modalIsVisible}
          onAddGoal={addGoalHandler}
          onCancelGoal={endGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={myGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  onDeleteItem={deleteGoalHandler}
                  itemKey={itemData.item.id}
                />
              );
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
