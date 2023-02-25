import React from 'react';
import CharacterAnimation from '../../components/CharacterAnimation/CharacterAnimation';
import EnvironmentModeling from '../../components/EnvironmentModeling/EnvironmentModeling';
import Hero from '../../components/Hero/Hero';
import HomepageSection from '../../components/HomepageSection/HomepageSection';

const Homepage = () => {
  return (
    <>
      <Hero />
      <HomepageSection>
        <CharacterAnimation />
      </HomepageSection>
      <HomepageSection theme='dark' flexDirection='row-reverse'>
        <EnvironmentModeling />
      </HomepageSection>
    </>
  );
};

export default Homepage;
