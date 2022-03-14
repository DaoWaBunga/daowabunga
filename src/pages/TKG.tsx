import { StickyFlexColumn, Button } from '../styles';
import Mint from './TKG/Mint';
import Description from './TKG/Description';
import DisplayWallet from './TKG/Wallet';
import BodyPadding from '../layouts/BodyPadding';
import { useState } from 'react';
import { CgMenuBoxed } from 'react-icons/cg';
import Transitions from './TKG/Transitions';
export const TKG = () => {
  const [expandMenu, setExpandMenu] = useState(false);
  const [showDescription, setShowDescription] = useState(true);
  const [showMint, setShowMint] = useState(false);
  const [showWallet, setShowWallet] = useState(false);
  const [showTransition, setShowTransition] = useState(false);
  const toggleMenu = () => setExpandMenu(!expandMenu);
  const closeAll = async () => {
    setShowDescription(false);
    setShowMint(false);
    setShowWallet(false);
    setShowTransition(true);
    setTimeout(() => setShowTransition(false), 3500);
  };
  return (
    <>
      <div className="mobileTKGExpand">
        <Button style={{ backgroundColor: 'darkorange' }}>
          <CgMenuBoxed style={{ width: '60px', height: '60px' }} onClick={() => toggleMenu()} />
        </Button>
      </div>
      <div className="TKGBodyWrapper galaxy">
        <div className="TKGBody">
          <BodyPadding />
          <StickyFlexColumn>
            <div className={expandMenu ? '' : 'beforeExpand'}>
              <div className="StickySideNav">
                <Button
                  className="Main"
                  onClick={() => {
                    closeAll();
                    setTimeout(() => setShowDescription(true), 3501);
                  }}>
                  About
                </Button>
                <Button
                  className="Main"
                  onClick={() => {
                    closeAll();
                    setTimeout(() => setShowMint(true), 3501);
                  }}>
                  Mint
                </Button>
                <Button
                  className="Main"
                  onClick={() => {
                    closeAll();
                    setTimeout(() => setShowWallet(true), 3501);
                  }}>
                  My Wallet
                </Button>
              </div>
            </div>
          </StickyFlexColumn>
          <BodyPadding />
          <div className="sleekDesktopBodyTKG">
            <div className="stars stars2 stars3" />
            {showTransition ? <Transitions /> : null}
            {showDescription ? (
              <>
                <Description />
              </>
            ) : null}
            {showMint ? (
              <>
                <Mint />
              </>
            ) : null}
            {showWallet ? (
              <>
                <DisplayWallet />
              </>
            ) : null}
          </div>
          <BodyPadding />
        </div>
      </div>
    </>
  );
};
export default TKG;
