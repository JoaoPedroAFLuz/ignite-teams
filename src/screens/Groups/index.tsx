import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { FlatList } from 'react-native';

import { groupsGetAll } from '@storage/group/groupsGetAll';

import { Button } from '@components/Button';
import { EmptyList } from '@components/EmptyList';
import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';

import { Container } from './styles';

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation();

  function handleOpenGroup(group: string) {
    navigation.navigate('Players', { group });
  }

  function handleNewGroup() {
    navigation.navigate('NewGroup');
  }

  async function fetchGroups() {
    try {
      const groups = await groupsGetAll();

      setGroups(groups);
    } catch (error) {
      console.error(error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [])
  );

  return (
    <Container>
      <Header />

      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <GroupCard title={item} onPress={() => handleOpenGroup(item)} />
        )}
        ListEmptyComponent={() => (
          <EmptyList message="Que tal criar uma nova turma?" />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
      />

      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </Container>
  );
}
