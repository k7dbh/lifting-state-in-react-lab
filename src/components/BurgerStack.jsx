const BurgerStack = ({ ingredients, onRemove }) => {
  return (
    <ul>
      {ingredients.map((ingredient, idx) => (
        <li key={idx} style={{ backgroundColor: ingredient.color }}>
          {ingredient.name}
          <button onClick={() => onRemove(idx)}>X</button>
        </li>
      ))}
    </ul>
  );
};

export default BurgerStack;