import { Platform, StatusBar } from 'react-native';
import styled, { css } from 'styled-components/native';

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};

  ${Platform.OS === 'android' &&
  css`
    padding-top: ${StatusBar.currentHeight}px;
  `}
`;
