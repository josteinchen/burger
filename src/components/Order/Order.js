import React from "react";
import classes from "./Order.module.css";

const Order = (props) => {
  const ingredients = [];

  // eslint-disable-next-line no-unused-vars
  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName],
    });
  }

  const ingredientOutput = ingredients.map((igItem) => (
    <span
      style={{
        textTransform: "capitalize",
        display: "inline-block",
        margin: "0 8px",
        border: "1px solid #ccc",
        padding: "5px",
      }}
      key={igItem.name}>
      {igItem.name} ({igItem.amount})
    </span>
  ));
  return (
    <div className={classes.Order}>
      Ingredients:
      {ingredientOutput}
      <p>
        Price: <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default Order;