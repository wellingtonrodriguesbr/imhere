import { StatusBar } from "expo-status-bar";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

export function Home() {
  function handleParticipantAdd() {}

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Ignite Lab #03</Text>
      <Text style={styles.eventDate}>Segunda, 10 de Outubro de 2022</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do participante"
        placeholderTextColor="#6b6b6b"
      />
      <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
