import { useLayoutEffect, useRef, useState } from "react";
import { FiCode } from "react-icons/fi";
import PrimaryText from "../atoms/TextAtom";
import TechnologyCard from "../molecules/TechnologyCard";
import { skillCategories } from "../templates/habilidades/skillsData";

const SkillsDiagram = ({ onSelect, connectionMode, onConnectionModeChange, onToggleAll }) => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [focusedCategory, setFocusedCategory] = useState(null);
  const activeConnection = hoveredCategory || focusedCategory || connectionMode;
  const connectionClass = (category) => !activeConnection ? "" : activeConnection === "all" || activeConnection === category ? " is-active" : " is-dimmed";
  const diagramRef = useRef(null);
  const coreRef = useRef(null);
  const categoryRefs = useRef(new Map());
  const technologyRefs = useRef(new Map());
  const [connections, setConnections] = useState({ width: 1060, height: 550, paths: [], dots: [] });

  useLayoutEffect(() => {
    const diagram = diagramRef.current;
    const updateConnections = () => {
      const bounds = diagram.getBoundingClientRect();
      if (!bounds.width || !bounds.height || !coreRef.current) return;
      const relativeBox = (element) => {
        const box = element.getBoundingClientRect();
        return { x: box.left - bounds.left, y: box.top - bounds.top, width: box.width, height: box.height };
      };
      const core = relativeBox(coreRef.current);
      const center = { x: core.x + core.width / 2, y: core.y + core.height / 2 };
      const paths = [];
      const dots = [];
      const addConnection = (id, category, tone, start, end, vertical = false) => {
        const bend = Math.max(24, Math.abs(vertical ? end.y - start.y : end.x - start.x) * 0.55);
        const direction = vertical ? Math.sign(end.y - start.y) : Math.sign(end.x - start.x);
        const d = vertical
          ? `M${start.x} ${start.y} C${start.x} ${start.y + bend * direction} ${end.x} ${end.y - bend * direction} ${end.x} ${end.y}`
          : `M${start.x} ${start.y} C${start.x + bend * direction} ${start.y} ${end.x - bend * direction} ${end.y} ${end.x} ${end.y}`;
        paths.push({ id, category, tone, d });
        dots.push({ id: `${id}-start`, category, tone, ...start }, { id: `${id}-end`, category, tone, ...end });
      };

      skillCategories.forEach((category) => {
        const element = categoryRefs.current.get(category.id);
        if (!element) return;
        const box = relativeBox(element);
        const leftBranch = category.id === "backend" || category.id === "mobile";
        const lowerBranch = category.id === "mobile" || category.id === "deployment";
        category.technologies.forEach((technology, index) => {
          const position = 0.22 + index * 0.56 / Math.max(1, category.technologies.length - 1);
          const categoryOuter = { x: leftBranch ? box.x : box.x + box.width, y: box.y + box.height * position };
          const card = technologyRefs.current.get(technology.id);
          if (!card) return;
          const cardBox = relativeBox(card);
          const cardAnchor = { x: leftBranch ? cardBox.x + cardBox.width : cardBox.x, y: cardBox.y + cardBox.height / 2 };
          addConnection(technology.id, category.id, category.tone, categoryOuter, cardAnchor);
        });

        const categoryInner = lowerBranch
          ? { x: box.x + box.width * (leftBranch ? 0.8 : 0.12), y: box.y }
          : { x: leftBranch ? box.x + box.width : box.x, y: box.y + box.height / 2 };
        const angle = Math.atan2(categoryInner.y - center.y, categoryInner.x - center.x);
        const coreAnchor = { x: center.x + Math.cos(angle) * core.width / 2, y: center.y + Math.sin(angle) * core.height / 2 };
        addConnection(`core-${category.id}`, category.id, lowerBranch ? "cyan" : category.tone, coreAnchor, categoryInner, lowerBranch);
      });
      setConnections({ width: bounds.width, height: bounds.height, paths, dots });
    };

    let active = true;
    const observer = new ResizeObserver(updateConnections);
    [diagram, coreRef.current, ...categoryRefs.current.values(), ...technologyRefs.current.values()].forEach((element) => {
      if (element) observer.observe(element);
    });
    updateConnections();
    document.fonts?.ready.then(() => { if (active) updateConnections(); });
    return () => { active = false; observer.disconnect(); };
  }, []);

  return (
    <div id="skills-network" className={`skills-diagram${activeConnection ? " has-active-connections" : ""}`} ref={diagramRef}>
      <svg className="skills-connectors" viewBox={`0 0 ${connections.width} ${connections.height}`} preserveAspectRatio="none" aria-hidden="true">
        {connections.paths.map(({ id, category, tone, d }) => (
          <g key={id} className={`skills-connection-group${connectionClass(category)}`}>
            <path d={d} className={`skills-connection skills-connection-${tone}`} />
            {(activeConnection === "all" || activeConnection === category) && <path d={d} pathLength="100" className={`skills-connection-flow skills-connection-${tone}`} />}
          </g>
        ))}
        {connections.dots.map(({ id, category, x, y, tone }) => <circle key={id} cx={x} cy={y} r="4" className={`skills-connection-dot skills-connection-${tone}${connectionClass(category)}`} />)}
      </svg>
      <div className={`skills-core${activeConnection ? " is-active" : ""}`} ref={coreRef}>
        <button type="button" className="skills-node-trigger" onClick={onToggleAll} aria-label="Activar todas las conexiones de habilidades" aria-pressed={connectionMode === "all"} aria-controls="skills-network" />
        <FiCode aria-hidden="true" />
        <PrimaryText font="bebasNeue" fontSize="inherit" align="center" className="skills-core-label">HABILIDADES DE<br /><em>PROGRAMACIÓN</em></PrimaryText>
        <span className="skills-core-rule" aria-hidden="true" />
      </div>
      {skillCategories.map((category) => {
        const Icon = category.icon;
        return (
          <section key={category.id} className={`skills-branch skills-branch-${category.id} skills-tone-${category.tone}${connectionClass(category.id)}`} aria-labelledby={`skills-${category.id}`}>
            <div className="skills-category" onPointerEnter={(event) => { if (event.pointerType !== "touch") setHoveredCategory(category.id); }} onPointerLeave={() => setHoveredCategory(null)} ref={(element) => {
              if (element) categoryRefs.current.set(category.id, element);
              else categoryRefs.current.delete(category.id);
            }}>
              <button type="button" className="skills-node-trigger" aria-labelledby={`skills-${category.id}`} aria-pressed={connectionMode === category.id} aria-controls={`skills-technologies-${category.id}`}
                onFocus={() => setFocusedCategory(category.id)} onBlur={() => setFocusedCategory(null)}
                onClick={() => onConnectionModeChange(connectionMode === category.id ? null : category.id)} />
              <Icon aria-hidden="true" />
              <PrimaryText component="h2" id={`skills-${category.id}`} font="bebasNeue" fontSize="inherit" align="center" className="skills-category-label">{category.name}</PrimaryText>
            </div>
            <div id={`skills-technologies-${category.id}`} className="skills-technology-list" style={{ "--technology-count": category.technologies.length }}>
              {category.technologies.map((technology) => <TechnologyCard key={technology.id} technology={technology} onSelect={onSelect} cardRef={(element) => {
                if (element) technologyRefs.current.set(technology.id, element);
                else technologyRefs.current.delete(technology.id);
              }} />)}
            </div>
          </section>
        );
      })}
    </div>
  );
};
export default SkillsDiagram;
