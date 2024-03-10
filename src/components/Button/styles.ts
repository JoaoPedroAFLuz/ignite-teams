import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

interface Props {
  danger?: boolean;
}

export const Container = styled(TouchableOpacity)<Props>`
  ${({ theme, danger, disabled }) => css`
    flex: 1;
    justify-content: center;
    align-items: center;

    min-height: 56px;
    max-height: 56px;

    border-radius: 6px;

    background-color: ${({ theme }) => theme.COLORS.GREEN_700};

    ${danger &&
    css`
      background-color: ${theme.COLORS.RED_DARK};
    `}

    ${disabled &&
    css`
      background-color: ${theme.COLORS.GRAY_300};
      opacity: 0.5;
    `}
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};

    color: ${theme.COLORS.WHITE};
  `}
`;
