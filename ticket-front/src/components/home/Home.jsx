import { Link } from "react-router-dom";

import "./home.css";

const Home = () => {
  return (
    <section>
      <Link to="/checkout" className="home__btn">
        pay
      </Link>
    </section>
  );
};

export default Home;
