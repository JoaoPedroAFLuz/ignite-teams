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
  const [group, setGroup] = useState('');

  const navigation = useNavigation();

  async function handleNewGroup() {
    try {
      await groupCreate(group);

      navigation.navigate('Players', { group });
    } catch (error) {
      if (error instanceof AppError) {
        return Alert.alert('Nova turma', error.message);
      }

      Alert.alert('Nova turma', 'Não foi possível criar uma nova turma');

      console.log(error);
    }
  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />

        <Input
          value={group}
          placeholder="Nome da turma"
          onChangeText={setGroup}
        />

        <Button
          title="Criar"
          style={{ marginTop: 20 }}
          onPress={handleNewGroup}
          disabled={!group.trim()}
        />
      </Content>
    </Container>
  );
}
