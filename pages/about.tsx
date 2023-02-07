import Certification from '@/components/About/Certification';
import Education from '@/components/About/Education';
import Info from '@/components/About/Info';
import SingleProject from '@/components/About/SingleProject';
import TeamProject from '@/components/About/TeamProject';

const About = () => {
  return (
    <>
      <Info />
      <TeamProject />
      <SingleProject />
      <Education />
      <Certification />
    </>
  );
};

export default About;
