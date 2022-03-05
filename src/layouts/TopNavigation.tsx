import { ColorModeSwitcher } from './components/ColorModeSwitcher';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
export const TopNavigation = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const toggleMenu = () => setShowDropDown(!showDropDown);
  return (
    <>
      <div className="NavigationBar">
        <div className="flex">
          <div className="buttonRow">
            <div className="button1">Home</div>
            <div className="button1">Home</div>

            <div className="button1">Home</div>

            <div className="button1">Home</div>

            <div className="button1">Home</div>
            <div className="button1">Home</div>
            <div className="button1">Home</div>
            <div className="button1">Home</div>
            <div className="button1">Home</div>
          </div>
        </div>
        <h1>DaoWaBunga!</h1>
        <div className="burger">
          <button
            onClick={() => toggleMenu()}
            onBlur={(timeout) => setTimeout(() => setShowDropDown(false), 300, timeout)}>
            <GiHamburgerMenu />
          </button>
        </div>
        {showDropDown ? (
          <div className="dropDown">
            <div className="flex">
              <div className="button1">Home</div>
              <div className="button1">Home</div>
              <div className="button1">Home</div>
              <div className="button1">Home</div>
              <div className="button1">Home</div>
              <div className="button1">Home</div>
              <div className="button1">Home</div>
              <div className="button1">Home</div>
            </div>
          </div>
        ) : null}
      </div>
      <ColorModeSwitcher />
    </>
  );
};
export default TopNavigation;
