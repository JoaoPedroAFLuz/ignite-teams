import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export interface FilterStyleProps {
  isActive?: boolean;
}

export const Container = styled(TouchableOpacity)<FilterStyleProps>`
  ${({ theme, isActive }) =>
    isActive &&
    css`
      border: 1px solid ${theme.COLORS.GREEN_700};
    `}

  align-items: center;
  justify-content: center;

  height: 38px;
  width: 70px;

  border-radius: 4px;
  margin-right: 12px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};

    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;
