import styled from 'styled-components';

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const FlexColumn = styled(FlexRow)`
  flex-direction: column;
`;

export const Card = styled(FlexColumn)`
  width: 300px;
`;
