import { useState } from 'react';
import { Button } from '../../styles';
type CardProps = {
  title: string;
  body: string;
  footer: string;
  image: string;
  buttonLink: string;
  buttonText: string;
  trueButton: boolean;
  trueCard: boolean;
  trueTitle: boolean;
  trueImage: boolean;
  trueBody: boolean;
  trueFoot: boolean;
};
export const CardBasic = ({
  title,
  body,
  footer,
  image,
  trueCard,
  trueTitle,
  trueBody,
  trueFoot,
  trueImage,
  trueButton,
  buttonLink,
  buttonText
}: CardProps) => {
  const [showTitle, setShowTitle] = useState(trueTitle);
  const [showImage, setShowImage] = useState(trueImage);
  const [showBody, setShowBody] = useState(trueBody);
  const [showFoot, setShowFoot] = useState(trueFoot);
  const [showCard, setShowCard] = useState(trueCard);
  const [showButton, setShowButton] = useState(trueButton);
  return (
    <>
      {showCard ? (
        <div className="CardBasic" onLoad={() => setShowCard(trueCard)}>
          {showTitle ? (
            <div className="title" onLoad={() => setShowTitle(trueTitle)}>
              {title}
            </div>
          ) : null}
          {showImage ? (
            <div className="image" onLoad={() => setShowImage(trueImage)}>
              <img src={image} />
            </div>
          ) : null}
          {showBody ? (
            <div className="body" onLoad={() => setShowBody(trueBody)}>
              {body}
            </div>
          ) : null}
          {showFoot ? (
            <div className="foot" onLoad={() => setShowFoot(trueFoot)}>
              {footer}
              {showButton ? (
                <Button className="Main" onLoad={() => setShowButton(trueButton)}>
                  <a href={buttonLink}>{buttonText}</a>
                </Button>
              ) : null}
            </div>
          ) : null}
        </div>
      ) : null}
    </>
  );
};
export default CardBasic;
