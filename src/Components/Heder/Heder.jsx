import scss from "./Heder.module.scss";
import Rectangle from "../../assets/Rectangle.svg";
import { useState } from "react";

const Heder = () => {
  const [count, setCount] = useState(0);

  return (
    <section className={scss.Heder}>
      <div className={scss.contai_Logo}>
        <img src={Rectangle} alt="Logo" />
      </div>
      <div className={scss.contai_a_button}>
        <a href="">Home</a>
        <a href="">Recipes</a>
        <a href="">Meat</a>
        <a href="">About</a>
        <a href="">Blog</a>
        <a href="">Support</a>

        <p>{count}</p>

        <button onClick={() => setCount(count + 1)}>Sign in +1</button>
        <button onClick={() => setCount(count - 1)}>Request demo -1</button>

        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </section>
  );
};

export default Heder;
