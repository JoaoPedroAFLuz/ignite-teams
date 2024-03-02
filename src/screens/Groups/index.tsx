import { useState } from 'react';
import { FlatList } from 'react-native';

import { EmptyList } from '@components/EmptyList';
import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';

import { Container } from './styles';

export function Groups() {
  const [groups] = useState<string[]>([]);

  return (
    <Container>
      <Header />

      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <EmptyList message="Nenhum grupo encontrado" />
        )}
      />
    </Container>
  );
}
