import { UsersThree } from 'phosphor-react-native';
import { KeyboardAvoidingView, Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(KeyboardAvoidingView).attrs(() => ({
  behavior: Platform.OS === 'ios' ? 'padding' : 'height',
}))`
  flex: 1;
  padding: 24px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  size: 56,
  color: theme.COLORS.GREEN_700,
}))`
  align-self: center;
`;
