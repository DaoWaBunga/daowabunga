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
import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
export const Mint = () => {
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }
    ]
  };
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
          <Card className="MainCard">
            <Doughnut data={data} />

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
