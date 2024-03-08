import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  padding: 24px;
`;

export const Form = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    align-items: center;

    width: 100%;
    border-radius: 6px;

    background-color: ${theme.COLORS.GRAY_700};
  `}
`;
