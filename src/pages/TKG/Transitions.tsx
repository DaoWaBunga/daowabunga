import FlexRow from '../../components/Rows/FlexRow';
import ImageGallery from 'react-image-gallery';
import { imgs } from '../../data/TKGImgs';
export const Transitions = () => {
  return (
    <FlexRow>
      <div className="Loading">
        <div className="Loader">
          <ImageGallery
            items={imgs}
            autoPlay={true}
            slideDuration={30}
            showPlayButton={false}
            showThumbnails={false}
            showNav={false}
            showFullscreenButton={false}
          />
        </div>
      </div>
    </FlexRow>
  );
};
export default Transitions;
