import Bloc from "../../Cartdate";
import scss from "./Product.module.scss";

function Product() {
  return (
    <section className={scss.Product}>
      <h1>Вкусные рецепты</h1>

      {Bloc.map((item, index) => (
        <div className={scss.container} key={index}>
          <h1>{item.name}</h1>

          <div className={scss.contai_p}>
            {item.ingredients.map((ing, i) => (
              <p key={i}>{ing.name}</p>
            ))}
          </div>

          <h1>Инструкция по приготовлению</h1>
          <div className={scss.contai_p_a}>
            {item.steps.map((step, b) => (
              <p key={b}>{step}</p>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Product;
