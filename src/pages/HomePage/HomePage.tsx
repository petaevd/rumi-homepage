import React from 'react';
import styles from './HomePage.module.scss';
import { 
  Header, 
  StartSection, 
  RoadSection, 
  ProblemSection,
  Footer,
  AdvantagesSection,
  AISection,
  SurvaySection
} from 'components/index.ts';

export const HomePage = () => {
  return (
    <>
      <Header />
      <main className={styles["container"]}>
        <StartSection />
        <RoadSection />
        <ProblemSection />
        <AdvantagesSection />
        <AISection />
        <SurvaySection />
      </main>
      <Footer />
    </>
  );
};
