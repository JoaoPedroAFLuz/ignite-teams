import { ButtonIcon } from '@components/ButtonIcon';
import { Highlight } from '@components/Highlight';

import { Input } from '@components/Inputs';
import { Container, Form } from './styles';

export function Players() {
  return (
    <Container>
      <Highlight title="Nome da Turma" subtitle="adicione a galera e separe" />

      <Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />

        <ButtonIcon icon="add" />
      </Form>
    </Container>
  );
}
