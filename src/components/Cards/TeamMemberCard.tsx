import Team from '../../myteam.json';
export const TeamMemberCard = () => {
  return (
    <>
      {Team.items.map((map) => (
        <div key={map.memberName} className="TeamMemberCard">
          <div className="image">
            <img src={map.memberImage} />
          </div>
          <h1>{map.memberName}</h1>
          <div className="bio">
            <p>{map.memberDescription}</p>
          </div>
        </div>
      ))}
    </>
  );
};
export default TeamMemberCard;
