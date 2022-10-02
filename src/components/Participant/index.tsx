import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

interface ParticipantProps {
  name: string;
  onRemoveParticipant: (name: string) => void;
}

export function Participant({ name, onRemoveParticipant }: ParticipantProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => onRemoveParticipant(name)}
      >
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
