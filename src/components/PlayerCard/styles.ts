import { MaterialIcons } from '@expo/vector-icons';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    align-items: center;

    width: 100%;
    height: 56px;
    margin-bottom: 16px;

    background-color: ${theme.COLORS.GRAY_500};
    border-radius: 6px;
  `}
`;

export const Name = styled.Text`
  ${({ theme }) => css`
    flex: 1;

    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_200,
}))`
  margin-left: 16px;
  margin-right: 4px;
`;
