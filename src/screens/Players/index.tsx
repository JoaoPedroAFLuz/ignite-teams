import { useRoute } from '@react-navigation/native';
import { useState } from 'react';
import { Alert, FlatList } from 'react-native';

import { Button } from '@components/Button';
import { ButtonIcon } from '@components/ButtonIcon';
import { EmptyList } from '@components/EmptyList';
import { Filter } from '@components/Filter';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Inputs';
import { PlayerCard } from '@components/PlayerCard';

import { Header } from '@components/Header';
import { Container, Form, HeaderList, NumberOfPlayers } from './styles';

interface RouteParams {
  group: string;
}

export function Players() {
  const [playerName, setPlayerName] = useState('');
  const [team, setTeam] = useState<string>('Time A');
  const [groups] = useState<string[]>(['Time A', 'Time B', 'Time C']);
  const [players, setPlayers] = useState<string[]>([]);

  const route = useRoute();
  const { group } = route.params as RouteParams;

  function handleAddPlayer() {
    const player = playerName.trim();

    if (players.includes(player)) {
      return Alert.alert(
        'Jogador já cadastrado',
        'Já existe um jogador com esse nome.'
      );
    }

    setPlayers((prevState) => [...prevState, playerName]);
    setPlayerName('');
  }

  function handleRemovePlayer(name: string) {
    Alert.alert('Remover', `Deseja remover ${name}?`, [
      {
        text: 'Não',
        style: 'cancel',
      },
      {
        text: 'Sim',
        onPress: () =>
          setPlayers((prevState) =>
            prevState.filter((player) => player !== name)
          ),
      },
    ]);
  }

  return (
    <Container>
      <Header showBackButton />

      <Highlight title={group} subtitle="adicione a galera e separe" />

      <Form>
        <Input
          value={playerName}
          onChangeText={setPlayerName}
          placeholder="Nome da pessoa"
          autoCorrect={false}
        />

        <ButtonIcon
          icon="add"
          onPress={handleAddPlayer}
          disabled={!playerName}
        />
      </Form>

      <HeaderList>
        <FlatList
          data={groups}
          horizontal
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              isActive={item === team}
              title={item}
              onPress={() => setTeam(item)}
            />
          )}
        />

        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => handleRemovePlayer(item)} />
        )}
        ListEmptyComponent={() => (
          <EmptyList message="Não há pessoas nesse time." />
        )}
        contentContainerStyle={[
          { paddingBottom: 100 },
          !players.length && { flex: 1 },
        ]}
      />

      <Button title="Remover turma" danger />
    </Container>
  );
}
