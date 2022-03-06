import { useEffect } from 'react';

import { useDarkMode } from '../../hooks/useDarkMode';
import { BsSunFill, BsMoonStarsFill } from 'react-icons/bs';
export const ColorModeSwitcher = () => {
  const { isDarkMode, toggle } = useDarkMode(true);

  useEffect(() => {
    const html = document.querySelector('html');
    if (html) {
      html.dataset.theme = `theme-${isDarkMode ? 'dark' : 'light'}`;
    }
  }, [isDarkMode]);

  return (
    <div onClick={toggle} color="none" className="colorSwitchButtons">
      <div className="light">
        <div className={isDarkMode ? 'inactive' : 'active'}>
          <BsSunFill />
        </div>
      </div>
      <div className="dark">
        <div className={isDarkMode ? 'active' : 'inactive'}>
          <BsMoonStarsFill />
        </div>
      </div>
    </div>
  );
};
