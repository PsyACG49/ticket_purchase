import About from "../../components/about/About";
import Contact from "../../components/contact/Contact";
import Courses from "../../components/courses/Courses";
import Hero from "../../components/hero/Hero";
import Master from "../../components/master/Master";
import Testimonials from "../../components/testimonials/Testimonials";

const HomePage = () => {
  return (
    <section>
      <Hero />
      <About />
      <Courses />
      <Master />
      <Testimonials />
      <Contact />
    </section>
  );
};

export default HomePage;
