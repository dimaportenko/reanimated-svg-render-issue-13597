import { StyleSheet, View } from "react-native";
import { ExpandableCard } from "./src/ExpandableCard";
import { PieChart } from "./src/PieChart";
import { testData } from "./src/data/data";

export default function App() {
  return (
    <View style={styles.container}>
      <ExpandableCard>
        <PieChart categories={testData} />
      </ExpandableCard>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#999",
    paddingTop: 100,
    paddingHorizontal: 20,
  },
});
