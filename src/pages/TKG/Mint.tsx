import {
  BigText,
  Break,
  Button,
  Card,
  FlexColumn,
  FlexRow,
  MintTicker,
  Paragraph,
  SqImg
} from '../../styles';

export const Mint = () => {
  return (
    <>
      <MintTicker className="MainImg">7000/10,000</MintTicker>
      <FlexRow>
        <SqImg className="MainImg" path="https://via.placeholder.com/600x600" />
        <FlexColumn>
          <BigText>Mint</BigText>
          <Paragraph>
            hey so here is a test of some text i am going to put in a paragraph and now i a m going
            to put a img <img src="https://via.placeholder.com/600x600" /> and now some more text
            and because this is an inline block this should look pretty but lets cross our fingers
          </Paragraph>
        </FlexColumn>
      </FlexRow>
      <Break />
      <FlexRow>
        <Button className="Main">Mint</Button>
      </FlexRow>
      <BigText>Progress</BigText>

      <FlexRow>
        <FlexColumn>
          <Card className="MainImg">
            <FlexRow>
              <span>Total:</span>
              <span>xxx</span>
            </FlexRow>
            <FlexRow>
              <span>Minted:</span>
              <span>xxx</span>
            </FlexRow>
            <FlexRow>
              <span>Remaining:</span>
              <span>xxx</span>
            </FlexRow>
          </Card>
        </FlexColumn>
      </FlexRow>
    </>
  );
};
export default Mint;
