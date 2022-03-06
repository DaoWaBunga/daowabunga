import FlexRow from '../components/Rows/FlexRow';
import DawaLogo from '../assets/Daowabunga.png';
export const HomePage = () => {
  return (
    <>
      <FlexRow>
        <div className="NewsBanner">
          <div className="ImageContent">
            <img src={DawaLogo} />
          </div>
          <div className="TextContent">
            <h1>Title</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Mollis nunc sed id semper risus. Orci a
              scelerisque purus semper eget duis at. Orci eu lobortis elementum nibh tellus molestie
              nunc non. Aliquet risus feugiat in ante metus. Rhoncus urna neque viverra justo nec
              ultrices dui. Mollis nunc sed id semper risus in hendrerit gravida. Praesent elementum
              facilisis leo vel. Turpis egestas integer eget aliquet nibh praesent tristique. Mauris
              pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Nisi lacus
              sed viverra tellus in hac habitasse. Ornare lectus sit amet est placerat in egestas.
              Aliquet nec ullamcorper sit amet risus nullam eget. Pulvinar pellentesque habitant
              morbi tristique senectus et netus et. Facilisis magna etiam tempor orci eu lobortis
              elementum nibh.
            </p>
          </div>
        </div>
      </FlexRow>
    </>
  );
};
export default HomePage;
