import { useRoute } from '@react-navigation/native';
import { useEffect, useRef, useState } from 'react';
import { Alert, FlatList, TextInput } from 'react-native';

import { PlayerStorageDTO } from '@storage/player/PlayerStorageDTO';
import { playerAddByGroup } from '@storage/player/playerAddByGroup';
import { playersGetByGroupAndTeam } from '@storage/player/playerGetByGroupAndTeam';
import { AppError } from '@utils/AppError';

import { Button } from '@components/Button';
import { ButtonIcon } from '@components/ButtonIcon';
import { EmptyList } from '@components/EmptyList';
import { Filter } from '@components/Filter';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Inputs';
import { PlayerCard } from '@components/PlayerCard';

import { playerRemoveByGroup } from '@storage/player/playerRemoveByGroup';
import { Container, Form, HeaderList, NumberOfPlayers } from './styles';

interface RouteParams {
  group: string;
}

export function Players() {
  const [newPlayerName, setNewPlayerName] = useState('');
  const [teams] = useState<string[]>(['Time A', 'Time B']);
  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);

  const route = useRoute();
  const { group } = route.params as RouteParams;

  const newPlayerNameInputRef = useRef<TextInput>(null);

  async function handleAddPlayer() {
    try {
      const playerName = newPlayerName.trim();

      const newPlayer: PlayerStorageDTO = {
        name: playerName,
        team,
      };

      await playerAddByGroup(newPlayer, group);
      await fetchPlayersByTeam();

      setNewPlayerName('');
      newPlayerNameInputRef.current?.blur();
    } catch (error) {
      if (error instanceof AppError) {
        return Alert.alert('Novo jogador', error.message);
      }
      Alert.alert('Novo jogador', 'Não foi possível adicionar o jogador.');

      console.error(error);
    }
  }

  function handleRemovePlayer(playerName: string) {
    Alert.alert('Remover', `Deseja remover ${playerName} da turma?`, [
      { text: 'Não', style: 'cancel' },
      { text: 'Sim', onPress: () => removePlayer(playerName) },
    ]);
  }

  async function removePlayer(playerName: string) {
    try {
      await playerRemoveByGroup(playerName, group);
      await fetchPlayersByTeam();
    } catch (error) {
      Alert.alert('Remover jogador', 'Não foi possível remover o jogador.');
      console.error(error);
    }
  }

  async function fetchPlayersByTeam() {
    try {
      const players = await playersGetByGroupAndTeam(group, team);

      setPlayers(players);
    } catch (error) {
      Alert.alert(
        'Jogadoes',
        'Não foi possível buscar os jogadores desse time'
      );

      console.error(error);
    }
  }

  useEffect(() => {
    fetchPlayersByTeam();
  }, [team]);

  return (
    <Container>
      <Header showBackButton />

      <Highlight title={group} subtitle="Adicione a galera e separe" />

      <Form>
        <Input
          inputRef={newPlayerNameInputRef}
          value={newPlayerName}
          onChangeText={setNewPlayerName}
          placeholder="Nome do jogador"
          autoCorrect={false}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
        />

        <ButtonIcon
          icon="add"
          onPress={handleAddPlayer}
          disabled={!newPlayerName.trim()}
        />
      </Form>

      <HeaderList>
        <FlatList
          data={teams}
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
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <PlayerCard
            name={item.name}
            onRemove={() => {
              handleRemovePlayer(item.name);
            }}
          />
        )}
        ListEmptyComponent={() => (
          <EmptyList message="Não há jogadores nesse time." />
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
