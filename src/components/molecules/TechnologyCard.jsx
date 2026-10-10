import PrimaryText from "../atoms/TextAtom";

const TechnologyCard = ({ technology, onSelect, cardRef }) => {
  const Icon = technology.icon;
  const [name, detail] = technology.name.split(" (");
  return (
    <button ref={cardRef} type="button" className={`skills-tech-card skills-tech-${technology.id}`} onClick={() => onSelect(technology)} aria-haspopup="dialog" style={{ "--logo-color": technology.color }}>
      <Icon className="skills-tech-icon" aria-hidden="true" />
      <PrimaryText font="bebasNeue" fontSize="inherit" align="center" className="skills-tech-name">
        {name}{detail && <span className="skills-tech-detail">({detail}</span>}
      </PrimaryText>
    </button>
  );
};
export default TechnologyCard;
