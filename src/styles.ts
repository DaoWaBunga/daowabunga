import styled from 'styled-components';

const bp = {
  phone: '300px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1200px'
};

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
export const Image = styled.image`
  background-image: url(${(props) => props.path});
  background-position: 0;
  background-size: 100%;
  background-repeat: no-repeat;
  @media (min-width: ${bp.phone}) {
    width: 300px;
    height: 300px;
  }
  @media (min-width: ${bp.tablet}) {
    width: 375px;
    height: 375px;
  }
  @media (min-width: ${bp.laptop}) {
    width: 440px;
    height: 440px;
  }
`;
export const SqImg = styled(Image)`
  background-image: url(${(props) => props.path});
  border-radius: 3px;
`;
export const CircleImg = styled(Image)`
  border-radius: 100%;
  background-image: url(${(props) => props.path});
`;
export const BigText = styled.p`
  font-size: 40px;
  display: block;
  font-weight: 300;
  width: 100%;
  text-align: center;
  padding: 20px;
`;
export const Paragraph = styled.p`
  text-indent: 20px;
  font-size: 20px;
  @media (min-width: ${bp.phone}) {
    width: 100%;
  }
  @media (min-width: ${bp.tablet}) {
    min-width: 450px;
    padding: 2px;
  }
  @media (min-width: ${bp.laptop}) {
    min-width: 250px;
    max-width: 100%;
  }
  @media (min-width: ${bp.desktop}) {
    max-width: 600px;
    min-width: 250px;
  }
  img {
    display: inline-block;
    width: 30px;
    height: 30px;
    padding: 3px;
  }
`;
export const Break = styled.div`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
export const MintTicker = styled.div`
  position: fixed;
  font-size: 20px;
  width: auto;
  text-align: center;
  height: auto;
  border-radius: 15px;
  @media (min-width: ${bp.phone}) {
    display: none;
  }
  @media (min-width: ${bp.desktop}) {
    display: unset;
    right: 30px;
  }
`;
export const SqImgSmall = styled(SqImg)`
  width: 200px;
  height: 200px;
  margin: 10px;
  margin-bottom: 3px;
`;
