import { FC, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export const ExpandableCard: FC = ({ children }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setExpanded(!expanded)}
        hitSlop={{
          top: 20,
          left: 20,
          bottom: 20,
          right: 20,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.text}>Expandable Card</Text>
          <Text style={styles.text}>{expanded ? "-" : "+"}</Text>
        </View>
      </TouchableOpacity>
      {expanded && <View style={{ paddingTop: 20 }}>{children}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 20,
  },
  text: {
    fontSize: 18,
  },
});
