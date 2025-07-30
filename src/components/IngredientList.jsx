const Ingredients = ({ ingredients, onAdd }) => {
  return(
    <ul>
      {ingredients.map((ingredient, idx) => (
        <li key={idx} style={{backgroundColor: ingredient.color}}>
          {ingredient.name}
          <button onClick={() => onAdd(ingredient)}>+</button>
        </li>
      ))}
    </ul>
  )
}
export default Ingredients;