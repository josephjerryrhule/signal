import React, { useState } from "react";
import { StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button, Input } from "react-native-elements";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const register = () => {};
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />

      <Text h3 style={{ marginBottom: 50 }}>
        Create a Signal account
      </Text>

      <View style={styles.container}>
        <Input
          placeholder="Full Name"
          autoFocus
          type="text"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
          placeholder="Email"
          autoFocus
          type="text"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          autoFocus
          type="text"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Input
          placeholder="Profile Picture URL (optional)"
          autoFocus
          type="text"
          value={imageUrl}
          onChangeText={(text) => setImageUrl(text)}
          onSubmitEditing={register}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {},
});
