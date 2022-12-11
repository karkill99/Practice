let obj = {
  name: "kartik",
  place: "deoni",
  work: "SDE",
  sub: {
    name: "Champya",
    place: "Nilanga",
    work: "civil",
  },
  clg: "Shivaji University, kolhapur",
};

console.log(delete obj.sub.work);
console.log(obj);
