import Team from '../../data/Team.json';
export const TeamMemberCard = () => {
  return (
    <>
      {Team.map((map) => (
        <div key={map.memberName} className="TeamMemberCard">
          <div className="image">
            <img src={map.memberPhoto} />
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
