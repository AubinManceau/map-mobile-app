import { TextInput, StyleSheet, Button, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Redirect } from "expo-router";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";

export default function LoginScreen() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  if (isLoggedIn) {
    return <Redirect href="/" />;
  }

  const LogIn = () => {
    if(email === "test@test.fr" && password === "test"){
      setIsLoggedIn(true);
    } else if(email === "" || password === ""){
      setError("Veuillez remplir tous les champs");
    }else {
      setError("Email ou mot de passe incorrect");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
      style={styles.input}
      placeholder="Email"
      value={email}
      onChangeText={setEmail}
      keyboardType="email-address"
      autoCapitalize="none"
      />
      <TextInput
      style={styles.input}
      placeholder="Mot de passe"
      value={password}
      onChangeText={setPassword}
      secureTextEntry
      autoCapitalize="none"
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button title="Connexion" onPress={LogIn} />
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
  },
  error: {
    color: "red",
    marginBottom: 10,
    textAlign: "center",
  },
});
