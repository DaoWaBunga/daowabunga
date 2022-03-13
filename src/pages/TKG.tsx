import { StickyFlexColumn, Button } from '../styles';
import ImageGallery from 'react-image-gallery';
import BodyPadding from '../layouts/BodyPadding';
import { imgs1, imgs2 } from '../data/TKGImgs';
export const TKG = () => {
  return (
    <>
      <div className="TKGBodyWrapper galaxy">
        <div className="TKGBody">
          <BodyPadding />
          <StickyFlexColumn>
            <div className="StickySideNav">
              <Button className="Main">Test</Button>
              <Button className="Main">Test</Button>
              <Button className="Main">Test</Button>
              <Button className="Main">Test</Button>
              <Button className="Main">Test</Button>
            </div>
          </StickyFlexColumn>
          <BodyPadding />
          <div className="sleekDesktopBodyTKG">
            <div className="stars stars2 stars3" />
            <ImageGallery
              items={imgs2}
              autoPlay={false}
              slideDuration={100}
              showPlayButton={false}
              showThumbnails={false}
              showNav={false}
              showFullscreenButton={false}
            />
            <ImageGallery
              items={imgs1}
              autoPlay={false}
              slideDuration={100}
              showPlayButton={false}
              showThumbnails={false}
              showNav={false}
              showFullscreenButton={false}
            />
          </div>
          <BodyPadding />
        </div>
      </div>
    </>
  );
};
export default TKG;
