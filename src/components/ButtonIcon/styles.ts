import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export interface Props {
  danger?: boolean;
}

export const Container = styled(TouchableOpacity)`
  width: 56px;
  height: 56px;

  justify-content: center;
  align-items: center;

  margin-left: 12px;
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, danger }) => ({
  size: 24,
  color: danger ? theme.COLORS.RED : theme.COLORS.GREEN_700,
}))``;
