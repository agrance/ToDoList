import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Modal,
  Image
} from "react-native";
import { useState } from "react";

function GoalInput({ onAddGoal, visible, onCancelGoal }) {
  const [goal, setGoal] = useState("");
  function goalInputHandler(newText) {
    setGoal(newText);
  }
  function addGoalHandler() {
    if (goal?.length) {
      onAddGoal(goal);
      setGoal("");
    }
  }
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/images/goal.png")}/>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={goal}
        />
        <View style={styles.buttonContainer}>
        <View style={styles.button}>
            <Button title="Cancel" onPress={onCancelGoal} color={"#f31282"}/>
          </View>
          <View style={styles.button}>
            <Button title="add Goal" onPress={addGoalHandler} color={"#b180f0"} />
          </View>
          
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    padding: 16,
    backgroundColor:"#311b6b"
  },
  image:{
    width:100,
    height:100,
    margin:20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    padding: 16,
  },
  buttonContainer: {
    marginTop:16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
