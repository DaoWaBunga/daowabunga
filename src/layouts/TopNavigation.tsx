import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import Links from './components/Links';
import { Link } from 'react-router-dom';

export const TopNavigation = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const toggleMenu = () => setShowDropDown(!showDropDown);
  return (
    <div className="sticky">
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
        <div className="burger">
          <button
            onClick={() => toggleMenu()}
            onBlur={(timeout) => setTimeout(() => setShowDropDown(false), 300, timeout)}>
            <GiHamburgerMenu />
          </button>
        </div>
        {showDropDown ? (
          <div className="dropDown">
            {Links.map((link) => (
              <div className="flex" key={link.location}>
                <Link to={link.location}>
                  <div className="button1">{link.title}</div>
                </Link>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default TopNavigation;
