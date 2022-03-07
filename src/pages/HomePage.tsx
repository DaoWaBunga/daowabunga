import FlexRow from '../components/Rows/FlexRow';
import DawaLogo from '../assets/Daowabunga.png';
import CardBasic from '../components/Cards/CardBasic';
import HomepageCards from '../data/HomepageCards.json';
import RoadMap from '../components/RoadMap';
export const HomePage = () => {
  const NewsTitle = ['Title'];
  const NewsBody = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Mollis nunc sed id semper risus. Orci ascelerisque purus semper eget duis at. Orci eu lobortis elementum nibh tellus molestienunc non. Aliquet risus feugiat in ante metus. Rhoncus urna neque viverra justo necultrices dui. Mollis nunc sed id semper risus in hendrerit gravid'
  ];
  const NewsImage = [DawaLogo];

  return (
    <>
      <FlexRow>
        <div className="NewsBanner">
          <div className="ImageContent">
            <img src={NewsImage[0]} />
          </div>
          <div className="TextContent">
            <h1>{NewsTitle[0]}</h1>
            <p>{NewsBody[0]}</p>
          </div>
        </div>
      </FlexRow>
      <FlexRow>
        {HomepageCards.map((card) => (
          <CardBasic
            key={card.title}
            title={card.title}
            body={card.text}
            footer={card.foot}
            image={card.image}
            trueCard={card.cardIsActive}
            trueTitle={card.titleIsTrue}
            trueImage={card.imageIsTrue}
            trueBody={card.textIsTrue}
            trueFoot={card.footIsTrue}
            buttonLink={card.buttonLink}
            buttonText={card.buttonText}
            trueButton={card.buttonIsTrue}
          />
        ))}
      </FlexRow>
      <FlexRow>
        <RoadMap />
      </FlexRow>
    </>
  );
};
export default HomePage;
