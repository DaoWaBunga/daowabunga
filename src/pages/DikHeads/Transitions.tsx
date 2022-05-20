import FlexRow from '../../components/Rows/FlexRow';
import Daowabunga from '../../assets/DaowabungaCircleLogo.png';
export const Transitions = () => {
  return (
    <FlexRow>
      <div className="Loading">
        <img src={Daowabunga} className="Loader" />
      </div>
    </FlexRow>
  );
};
export default Transitions;
