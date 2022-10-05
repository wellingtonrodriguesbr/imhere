import { useState } from "react";
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [newParticipant, setNewParticipant] = useState("");

  function handleParticipantAdd() {
    if (participants.includes(newParticipant)) {
      return Alert.alert(
        "Participante existente",
        "Já existe um participante com este nome!"
      );
    }

    if (!newParticipant.length) {
      return Alert.alert(
        "Campo vazio",
        "Digite o nome do participante para adicionar à lista"
      );
    }

    setParticipants((prevParticipants) => [
      ...prevParticipants,
      newParticipant,
    ]);
    setNewParticipant("");
  }

  function handleParticipantRemove(name: string) {
    Alert.alert(
      "Remover participante",
      `Deseja remover ${name} da lista de presença?`,
      [
        {
          text: "Sim",
          onPress: () => {
            setParticipants((prevParticipants) =>
              prevParticipants.filter((participant) => participant !== name)
            );
            Alert.alert("Removido(a)!");
          },
        },
        {
          text: "Não remover",
          style: "cancel",
        },
      ]
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Ignite Lab #03</Text>
      <Text style={styles.eventDate}>Segunda, 10 de Outubro de 2022</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          value={newParticipant}
          onChangeText={(text) => setNewParticipant(text)}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={participants}
        ListEmptyComponent={() => (
          <Text style={styles.TextEmptyList}>
            Ninguém chegou ao evento ainda? Adicione participantes a sua lista
            de presença.
          </Text>
        )}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemoveParticipant={handleParticipantRemove}
          />
        )}
      />
    </View>
  );
}
