import { TextInput, StyleSheet, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Redirect } from "expo-router";
import { useAuth } from "../../hooks/auth";

export default function LoginScreen() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  if (isLoggedIn) {
    return <Redirect href="/" />;
  }
  const LogIn = () => {
    setIsLoggedIn(true);
  };
  return (
    <SafeAreaView style={styles.container} >
      <TextInput
        style={styles.input}
      />
      <TextInput
        style={styles.input}
      />
      <Button title="Connexion" onPress={LogIn}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginTop: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});
