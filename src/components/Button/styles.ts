import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

interface Props {
  danger: boolean;
}

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  justify-content: center;
  align-items: center;

  min-height: 56px;
  max-height: 56px;

  background-color: ${({ theme }) => theme.COLORS.GREEN_700};
  border-radius: 6px;

  ${({ theme, danger }) =>
    danger &&
    css`
      background-color: ${theme.COLORS.RED_DARK};
    `}
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};

  color: ${({ theme }) => theme.COLORS.WHITE};
`;
