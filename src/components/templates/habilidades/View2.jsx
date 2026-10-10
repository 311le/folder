import { useState } from "react";
import PrimaryText from "../../atoms/TextAtom";
import ContainerComponent from "../../atoms/Container";
import Modal from "../../organisms/Modal";
import SkillsDiagram from "../../organisms/SkillsDiagram";
import "../../styles/SkillsSection.css";

const SkillsSection = () => {
  const [selectedTech, setSelectedTech] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [connectionMode, setConnectionMode] = useState(null);
  const toggleAllConnections = () => setConnectionMode((mode) => mode === "all" ? null : "all");
  const openTechModal = (tech) => { setSelectedTech(tech); setOpenModal(true); };
  return (
    <ContainerComponent variant="cover">
      <section className="skills-section" aria-labelledby="skills-heading">
        <div className="skills-background" aria-hidden="true">
          <svg className="skills-landscape" viewBox="0 0 1000 650" preserveAspectRatio="none">
            <defs>
              <linearGradient id="skills-wave-magenta" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#de16ef" /><stop offset=".45" stopColor="#67009f" /><stop offset="1" stopColor="#17022f" />
              </linearGradient>
              <linearGradient id="skills-wave-ocean" x1="0" y1="0" x2="0.8" y2="1">
                <stop stopColor="#0857ea" /><stop offset=".5" stopColor="#062077" /><stop offset="1" stopColor="#04081e" />
              </linearGradient>
              <linearGradient id="skills-wave-violet" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#7200be" /><stop offset=".5" stopColor="#260366" /><stop offset="1" stopColor="#050921" />
              </linearGradient>
            </defs>
            <path d="M0 0H130C105 44 76 87 0 130Z" fill="url(#skills-wave-magenta)" opacity=".7" />
            <path d="M0 0H58C49 51 27 99 0 124Z" fill="#130837" opacity=".85" />
            <path d="M704 0H1000V132C918 112 842 81 792 64C747 51 724 32 704 0Z" fill="url(#skills-wave-violet)" opacity=".75" />
            <path d="M802 0H1000V103C916 119 850 73 802 0Z" fill="url(#skills-wave-ocean)" opacity=".35" />
            <path d="M0 415C45 499 25 556 120 597C218 639 244 558 342 571C421 581 445 640 527 650H0Z" fill="url(#skills-wave-violet)" stroke="#7421ba" strokeWidth=".5" />
            <path d="M335 650C449 606 517 537 607 580C684 616 708 641 787 650Z" fill="url(#skills-wave-ocean)" stroke="#1046af" strokeWidth=".6" />
            <path d="M437 650C579 581 646 547 732 584C807 615 832 650 908 650Z" fill="url(#skills-wave-ocean)" opacity=".8" />
            <path d="M0 544C103 704 183 595 275 625C300 633 311 642 325 650H0Z" fill="url(#skills-wave-magenta)" stroke="#b72ad9" strokeWidth=".5" />
            <path d="M575 650C638 616 681 625 739 650Z" fill="url(#skills-wave-magenta)" />
          </svg>
          <div className="skills-stars" />
        </div>
        <div className="skills-container skills-image-container">
          <header className="skills-header">
            <PrimaryText component="h1" id="skills-heading" font="archivoBlack" align="center" fontSize="inherit" className="skills-title">
              <button type="button" className="skills-title-trigger" onClick={toggleAllConnections} aria-pressed={connectionMode === "all"} aria-controls="skills-network" title="Activar o desactivar todas las conexiones">
                HABILIDADES DE<br /><span className="skills-title-gradient">PROGRAMACIÓN</span>
              </button>
            </PrimaryText>
            <PrimaryText component="p" font="girassol" align="center" fontSize="inherit" className="skills-subtitle">
              TECNOLOGÍAS QUE HACEN POSIBLE GRANDES IDEAS
            </PrimaryText>
            <div className="skills-title-rule" aria-hidden="true" />
          </header>
          <SkillsDiagram onSelect={openTechModal} connectionMode={connectionMode} onConnectionModeChange={setConnectionMode} onToggleAll={toggleAllConnections} />
        </div>
      </section>
      {selectedTech && <Modal open={openModal} onClose={() => setOpenModal(false)} framework={selectedTech} />}
    </ContainerComponent>
  );
};
export default SkillsSection;
