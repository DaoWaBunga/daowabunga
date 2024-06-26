import { FlexRow, FlexColumn } from '../styles';
import DawaLogo from '../assets/DaowabungaCircleLogo.png';
export const HomePageFooter = () => {
  return (
    <div className="FixedInnerFoot">
      <FlexRow className={'NewsBanner'}>
        <FlexColumn>
          <h1>DaoWaBunga!</h1>
          <p>contact@daowabunga.finance</p>
          <p>marketing@daowabunga.finance</p>
        </FlexColumn>

        <FlexColumn>
          <div className="ImgBlock">
            <img src={DawaLogo} />
          </div>
        </FlexColumn>
      </FlexRow>
    </div>
  );
};
export default HomePageFooter;
