import styles from './HomePage.module.scss';
import { 
  Header, 
  StartSection, 
  RoadSection, 
  ProblemSection,
  Footer,
  AdvantagesSection,
  AISection,
  TariffSection,
  SurvaySection,
  OprosSection,
  FaqSection
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
        <TariffSection />
        <SurvaySection />
        <OprosSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
};
