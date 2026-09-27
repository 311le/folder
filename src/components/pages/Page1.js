import React, { useEffect, useRef } from "react";
import { Container, Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Element, scroller } from "react-scroll";
import { motion, useReducedMotion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

import View1 from "../templates/vistaPrincipal/View1";
import SkillsPage from "../templates/habilidades/View2";
import ProjectView from "../templates/proyecto/View3";
import ContactPage from "../templates/sobreMi/ViewC";
import Menu from "../organisms/Menu";
import { appSections, getSectionByPath, normalizePath } from "../../routes";
import { useActiveSection } from "../../context/ActiveSectionContext";

const ViewLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const reduceMotion = useReducedMotion();
  const skipNextScrollRef = useRef(false);
  const routeScrollRef = useRef(false);
  const { setActiveSection, setScrollSource } = useActiveSection();
  const scrollOffset = isMobile ? -96 : 0;

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        scroller.scrollTo(hash, { duration: 800, smooth: true });
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    if (skipNextScrollRef.current) {
      skipNextScrollRef.current = false;
      return;
    }

    const section = getSectionByPath(location.pathname);
    setActiveSection(section.id);
    setScrollSource("route");
    routeScrollRef.current = true;

    const scrollToSection = (useSmooth = true) => {
      const element = document.getElementById(section.id);
      if (element) {
        const targetTop =
          window.pageYOffset + element.getBoundingClientRect().top + scrollOffset;
        window.scrollTo({
          top: targetTop,
          behavior: useSmooth ? "smooth" : "auto",
        });
      } else {
        scroller.scrollTo(section.id, {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
          offset: scrollOffset,
        });
      }
    };

    const timeoutId = window.setTimeout(() => {
      scrollToSection(true);
    }, 80);

    const fallbackId = window.setTimeout(() => {
      if (routeScrollRef.current) {
        scrollToSection(false);
      }
    }, 550);

    const releaseId = window.setTimeout(() => {
      routeScrollRef.current = false;
    }, 950);

    return () => {
      window.clearTimeout(timeoutId);
      window.clearTimeout(fallbackId);
      window.clearTimeout(releaseId);
      routeScrollRef.current = false;
    };
  }, [location.pathname, scrollOffset, setActiveSection, setScrollSource]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (routeScrollRef.current) return;

        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visibleEntry) return;

        const nextSection = appSections.find(
          (section) => section.id === visibleEntry.target.id
        );

        if (!nextSection) return;

        // Actualizar activeSection inmediatamente para sincronizar botones al scroll
        setActiveSection(nextSection.id);
        setScrollSource("scroll");

        if (normalizePath(location.pathname) !== nextSection.path) {
          skipNextScrollRef.current = true;
          navigate(nextSection.path, { replace: true });
        }
      },
      {
        threshold: [0.25, 0.45, 0.65],
        rootMargin: isMobile ? "-35% 0px -45% 0px" : "-30% 0px -45% 0px",
      }
    );

    appSections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [location.pathname, navigate, isMobile, setActiveSection, setScrollSource]);

  const sections = [
    { ...appSections[0], component: <View1 /> },
    { ...appSections[1], component: <ProjectView /> },
    { ...appSections[2], component: <SkillsPage /> },
    { ...appSections[3], component: <ContactPage /> },
  ];

  const sectionInitial = reduceMotion
    ? { opacity: 1 }
    : { opacity: 1, y: 0, scale: 1 };

  const sectionInView = reduceMotion
    ? { opacity: 1 }
    : { opacity: 1, y: 0, scale: 1 };

  return (
    <>
      <Menu />
      <Box
        component="main"
        sx={{
          ml: {
            xs: 0,
            sm: "150px",
            md: "180px",
          },
          pt: { xs: "96px", sm: 0 },
          minHeight: "100vh",
          background:
            "linear-gradient(180deg, #05020f 0%, #061043 42%, #020512 100%)",
          "@media (min-width:1024px)": {
            ml: "230px",
          },
        }}
      >
        <Container maxWidth={false} disableGutters>
          {sections.map((section, index) => (
            <Element key={section.id} name={section.id}>
              <motion.div
                initial={sectionInitial}
                whileInView={sectionInView}
                viewport={{
                  once: false,
                  amount: section.id === "view1" ? 0.2 : 0.28,
                }}
                transition={{
                  duration: 0.65,
                  ease: "easeOut",
                  delay: index === 0 ? 0 : 0.05,
                }}
              >
                <Box
                  id={section.id}
                  my={0}
                >
                  {section.component}
                </Box>
              </motion.div>
            </Element>
          ))}
        </Container>
      </Box>
    </>
  );
};

export default ViewLayout;
