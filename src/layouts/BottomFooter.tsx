import FlexRow from '../components/Rows/FlexRow';
import { ColorModeSwitcher } from './components/ColorModeSwitcher';
export const BottomFooter = () => {
  return (
    <>
      <div className="stickySettings">
        <div className="ColorModeSwitchDesktop">
          <ColorModeSwitcher />
        </div>
      </div>
      <div className="OutterFoot">
        <div className="WebFooter stickyFooter">
          <FlexRow>
            <p>Copyright Daowabunga, 2022.</p>
          </FlexRow>
        </div>
      </div>
    </>
  );
};
export default BottomFooter;
