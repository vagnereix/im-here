import { Alert, FlatList, Keyboard, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';
import { useState } from 'react';

export function Home() {
  const [participantName, setParticipantName] = useState('');
  const [participants, setParticipants] = useState<string[]>([]);

  function handleAddParticipant() {
    if (participants.includes(participantName)) {
      Alert.alert('Participante já adicionado', 'Esse participante já está na lista de presença.');
      return;
    }

    setParticipants(prev => [participantName, ...prev]);
    setParticipantName('');
  }

  function handleRemoveParticipant(name: string) {
    Alert.alert('Remover participante', `Deseja remover ${name} da lista de presença?`, [
      {
        text: 'Cancelar',
        style: 'cancel',
      },
      {
        text: 'Remover',
        onPress: () => {
          setParticipants(prev => prev.filter(participant => participant !== name));
        }
      }
    ]);
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.name}>Ignite React Native</Text>
        <Text style={styles.date}>Sexta, 4 de Fevereiro de 2024</Text>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder='Nome do participante'
            placeholderTextColor='#6b6b6b'
            keyboardType='default'
            /** pode ser mais performático ao não atualizar o estado a cada caractere digitado */
            // onChange={e => {
            //   e.persist();
            //   console.log(e.nativeEvent.text);
            // }}
            onChangeText={setParticipantName}
            value={participantName}
          />

          <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

        {/* Preferir FlatList para listas maiores */}
        <FlatList
          data={participants}
          showsVerticalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <Participant name={item} onRemove={handleRemoveParticipant} />
          )}
          ListEmptyComponent={() => (
            <Text style={styles.emptyText}>Ninguém chegou no evento ainda? Adicione participantes à lista de presença.</Text>
          )}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
