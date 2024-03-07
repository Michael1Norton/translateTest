import { StyleSheet, View } from "react-native";
import Translator from "./src";

export default function App() {
  return (
    <View style={styles.container}>
      <Translator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
