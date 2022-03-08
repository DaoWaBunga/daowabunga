import FlexColumn from '../components/Columns/FlexColumn';
import BodyPadding from '../layouts/BodyPadding';

export const TKG = () => {
  return (
    <div className="TKGBodyWrapper">
      <div className="TKGBody">
        <BodyPadding />
        <FlexColumn>
          <button className="MainButton shape">Mint</button>
          <button className="MainButton">Mint</button>
          <button className="MainButton">Mint</button>
          <button className="MainButton">Mint</button>
        </FlexColumn>
        <BodyPadding />
        <div className="sleekDesktopBody">
          <div className="shape"></div>
        </div>
        <BodyPadding />
      </div>
    </div>
  );
};
export default TKG;
