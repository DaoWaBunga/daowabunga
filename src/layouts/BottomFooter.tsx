import { FlexRow } from '../styles';
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
            <p>Copyright Daowabunga, 2022. </p>
            <h1>
              <span>(🍕, 🍕)</span>
            </h1>
          </FlexRow>
        </div>
      </div>
    </>
  );
};
export default BottomFooter;
