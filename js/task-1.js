const categories = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categories.length}`);
const logCategoriesInfo = (categories) =>
  categories.forEach((category) => {
    console.log(`Category: ${category.querySelector("h2").textContent}`);
    const items = category.querySelectorAll("li");
    console.log(`Elements: ${items.length}`);
  });
logCategoriesInfo(categories);
