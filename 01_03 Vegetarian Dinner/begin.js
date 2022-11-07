/*
  WRITE YOUR SOLUTION HERE
*/

function VegetarianMenu(menu) {
  const MenuNode = document.querySelector("#menu");
  const VegetarianMenu = menu.filter((option) => option.isVegetarian === true)
  console.log(VegetarianMenu);
  VegetarianMenu.forEach((option) => {
    let dish = document.createElement("li");
    dish.textContent = option.name;
    MenuNode.appendChild(dish);
  })
}

VegetarianMenu([
  {
    name: "Chicken parmesan",
    isVegetarian: false,
  },
  {
    name: "Penne a la vodka",
    isVegetarian: true,
  },
  {
    name: "Mushroom risotto",
    isVegetarian: true,
  },
  {
    name: "Veal saltambuca",
    isVegetarian: false,
  },
  {
    name: "Filet mignon",
    isVegetarian: false,
  },
])


