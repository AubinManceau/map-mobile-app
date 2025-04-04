import { Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TripsScreen() {
  return (
    <SafeAreaView style={styles.container} >
      <Text>Mes Voyages</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginTop: 10,
  },
});
