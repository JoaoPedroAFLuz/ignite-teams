import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Alert } from 'react-native';

import { groupCreate } from '@storage/group/groupCreate';
import { AppError } from '@utils/AppError';

import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Inputs';

import { Container, Content, Icon } from './styles';

export function NewGroup() {
  const [newGroupName, setNewGroupName] = useState('');

  const navigation = useNavigation();

  async function handleNewGroup() {
    const group = newGroupName.trim();

    try {
      await groupCreate(group);

      navigation.navigate('Players', { group });
    } catch (error) {
      if (error instanceof AppError) {
        return Alert.alert('Nova turma', error.message);
      }

      Alert.alert('Nova turma', 'Não foi possível criar uma nova turma');

      console.error(error);
    }
  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight
          title="Nova turma"
          subtitle="Crie a turma para adicionar os jogadores"
        />

        <Input
          value={newGroupName}
          placeholder="Nome da turma"
          onChangeText={setNewGroupName}
        />

        <Button
          title="Criar"
          style={{ marginTop: 20 }}
          onPress={handleNewGroup}
          disabled={!newGroupName.trim()}
        />
      </Content>
    </Container>
  );
}
