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
export const StickyFlexColumn = styled.div`
  position: absolute;
  top: 110px;
  left: 100px;
`;
export const Button = styled.button`
  border-radius: 15px;
  display: flex;
  justify-content: center;
  text-align: center;
  cursor: pointer;
`;
