const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsForEach = ingredients.forEach(ingredient => {
  console.log(ingredient);
  const ingredientsList = document.querySelector('#ingredients');
  const ingredientsItems = document.createElement('li');
  ingredientsList.append(ingredientsItems);
  ingredientsItems.append(ingredient);
});