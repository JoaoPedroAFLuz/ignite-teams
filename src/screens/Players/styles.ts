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

export const HeaderList = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  margin: 32px 0 12px;
  gap: 8px;
`;

export const NumberOfPlayers = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;
