import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export function Home() {
  function handleParticipantAdd() {}
  function handleParticipantRemove(name: string) {}
  const participants = [
    "Juan",
    "Arthur",
    "Rodrigo",
    "Mayk",
    "Diego",
    "Wellington",
    "Biro",
    "Pedro",
    "Augusto",
    "João",
    "Wesley",
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Ignite Lab #03</Text>
      <Text style={styles.eventDate}>Segunda, 10 de Outubro de 2022</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {participants.map((participant) => (
          <Participant
            key={participant}
            name={participant}
            onRemoveParticipant={handleParticipantRemove}
          />
        ))}
      </ScrollView>

      <StatusBar style="light" />
    </View>
  );
}
