const items = document.querySelectorAll(".item");
console.log(`Number of categories: ${items.length}`);

const titles = document.querySelectorAll("h2");
const elems = Array.from(items).map((item) => item.querySelectorAll("li"));

for (let i = 0; i < items.length; i++) {
  console.log(`Category: ${titles[i].textContent}`);
  console.log(`Elements: ${elems[i].length}`);
}
