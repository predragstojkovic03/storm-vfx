import React, { useRef } from 'react';
import CharacterAnimation from '../../components/CharacterAnimation/CharacterAnimation';
import EnvironmentModeling from '../../components/EnvironmentModeling/EnvironmentModeling';
import Hero from '../../components/Hero/Hero';
import HomepageSection from '../../components/HomepageSection/HomepageSection';
import Menu from '../../components/Menu/Menu';

const Homepage = ({ menuOpen, setMenuOpen }) => {
  const animationRef = useRef();
  const environmentRef = useRef();

  const scrollToAnimation = () => {
    animationRef.current?.scrollIntoView();
  };

  const scrollToEnvironment = () => {
    environmentRef.current?.scrollIntoView();
  };

  return (
    <>
      <Menu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        scrollToAnimation={scrollToAnimation}
        scrollToEnvironment={scrollToEnvironment}
      />
      <Hero scrollToAnimation={scrollToAnimation} />
      <HomepageSection ref={animationRef} id='animation-section'>
        <CharacterAnimation />
      </HomepageSection>
      <HomepageSection
        ref={environmentRef}
        theme='dark'
        flexDirection='row-reverse'
        id='environment-section'
      >
        <EnvironmentModeling />
      </HomepageSection>
    </>
  );
};

export default Homepage;
