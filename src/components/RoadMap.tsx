import Roadmap from '../data/Roadmap.json';
export const RoadMap = () => {
  return (
    <>
      <div className="RoadMap">
        <div className="mapHead"></div>
        {Roadmap.map((map) => (
          <div key={map.sectionTitle} className={map.location}>
            <div className="content">
              <h1>{map.sectionTitle}</h1>
              {map.bullets.map((map) => (
                <p key={map.bullet}>{map.bullet}</p>
              ))}
            </div>
          </div>
        ))}
        <div className="mapFoot"></div>
      </div>
    </>
  );
};
export default RoadMap;
