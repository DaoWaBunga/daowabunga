import { ColorModeSwitcher } from './components/ColorModeSwitcher';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import Links from './components/Links';
import { Link } from 'react-router-dom';
export const TopNavigation = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const toggleMenu = () => setShowDropDown(!showDropDown);
  return (
    <>
      <div className="NavigationBar">
        <div className="flex">
          {/*This is links for 768px+ */}
          {Links.map((link) => (
            <div className="buttonRow" key={link.location}>
              <Link to={link.location}>
                <div className="button1">{link.title}</div>
              </Link>
            </div>
          ))}
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
              {/*This is links for 300px-767px */}
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
