import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${theme.COLORS.BLACK};
  `}
`;

export const ActivityIndicator = styled.ActivityIndicator`
  ${({ theme }) => css`
    color: ${theme.COLORS.GREEN_700};
  `}
`;