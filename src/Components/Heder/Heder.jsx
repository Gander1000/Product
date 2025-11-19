import scss from "./Heder.module.scss";
import Rectangle from "../../assets/Rectangle.svg";

const Heder = () => {
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
          <button>Sign in</button>
          <button>Request demo</button>
      </div>
    </section>
  );
};

export default Heder;
