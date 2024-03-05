import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

interface Props {
  danger: boolean;
}

export const Container = styled(TouchableOpacity)<Props>`
  ${({ theme, danger }) =>
    css`
      flex: 1;
      justify-content: center;
      align-items: center;

      min-height: 56px;
      max-height: 56px;

      background-color: ${danger ? theme.COLORS.RED : theme.COLORS.GREEN_700};
      border-radius: 6px;
    `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};

    color: ${theme.COLORS.WHITE};
  `}
`;
