// let obj = {
//   name: "kartik",
//   place: "deoni",
//   work: "SDE",
//   sub: [{ name: "Champya" }, { place: "Nilanga" }, { work: "civil" }],
//   clg: "Shivaji University, kolhapur",
// };

// // console.log(obj);

// let del = obj.sub.pop();
// console.log(obj);
// console.log(del);

let products = [
  {
    brand: "apple",
    name: "Iphone 13",
    price: 120000,
  },

  {
    brand: "apple",
    name: "Iphone 12",
    price: 130000,
  },

  {
    brand: "apple",
    name: "Iphone 14",
    price: 150000,
  },

  {
    brand: "apple",
    name: "Iphone 10",
    price: 100000,
  },

  {
    brand: "samsung",
    name: "note 3",
    price: 600000,
  },

  {
    brand: "samsung",
    name: "galaxy 13",
    price: 800000,
  },

  {
    brand: "vivo",
    name: "v9",
    price: 70000,
  },

  {
    brand: "vivo",
    name: "CN 13",
    price: 50000,
  },
];

console.log(products);

let filteredArray = products.filter(function (ele) {
  if (ele.price > 80000) return true;
});

console.log(filteredArray);
