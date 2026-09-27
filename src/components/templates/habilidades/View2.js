import React, { useState } from "react";
import "../../styles/SkillsSection.css";
import ContainerComponent from "../../atoms/Container";
import Modal from "../../organisms/Modal";

const SkillsSection = () => {
  const [selectedTech, setSelectedTech] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const backendTechs = [
    {
      name: "Java",
      icon: "☕",
      description:
        "Experiencia en programación orientada a objetos y desarrollo backend con Java.",
    },
    {
      name: "Python",
      icon: "🐍",
      description:
        "Uso de Python para scripts, automatización y desarrollo de herramientas.",
    },
    {
      name: "Node.js",
      icon: "📦",
      description:
        "Construcción de APIs y servicios con Node.js y arquitectura modular.",
    },
    {
      name: "SQL",
      icon: "💾",
      description:
        "Creación y gestión de bases de datos relacionales con consultas eficientes.",
    },
  ];

  const frontendTechs = [
    {
      name: "JavaScript",
      icon: "✨",
      description:
        "Desarrollo de interfaces dinámicas y experiencias interactivas con JavaScript.",
    },
    {
      name: "React.js",
      icon: "⚛️",
      description:
        "Construcción de aplicaciones web reactivas y componentes escalables con React.",
    },
    {
      name: "Tailwind CSS",
      icon: "🎨",
      description:
        "Diseño rápido y responsivo con utilidades CSS modernas en Tailwind.",
    },
  ];

  const openTechModal = (tech) => {
    setSelectedTech(tech);
    setOpenModal(true);
  };

  return (
    <ContainerComponent watermark="js">
      <section className="skills-section">
        {/* Background decorative elements */}
        <div className="skills-background">
          <div className="geometric-shape shape-1"></div>
          <div className="geometric-shape shape-2"></div>
          <div className="geometric-shape shape-3"></div>
          <div className="geometric-gradient"></div>
        </div>

        <div className="skills-container">
        {/* Title */}
        <h1 className="skills-title">
          HABILIDADES DE<br />
          <span className="title-gradient">PROGRAMACIÓN</span>
        </h1>

        {/* Backend Section */}
        <div className="skills-card">
          <h2 className="card-title">BACKEND</h2>
          <div className="technologies-grid">
            {backendTechs.map((tech, index) => (
              <div
                key={index}
                className="tech-card"
                onClick={() => openTechModal(tech)}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    openTechModal(tech);
                  }
                }}
              >
                <div className="tech-icon">{tech.icon}</div>
                <p className="tech-name">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Frontend Section */}
        <div className="skills-card">
          <h2 className="card-title">FRONTEND</h2>
          <div className="technologies-grid">
            {frontendTechs.map((tech, index) => (
              <div
                key={index}
                className="tech-card"
                onClick={() => openTechModal(tech)}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    openTechModal(tech);
                  }
                }}
              >
                <div className="tech-icon">{tech.icon}</div>
                <p className="tech-name">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      {selectedTech && (
        <Modal
          open={openModal}
          onClose={() => setOpenModal(false)}
          framework={selectedTech}
        />
      )}
    </ContainerComponent>
  );
};

export default SkillsSection;
