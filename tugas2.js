const name = [
  "Abigail",
  "Alexandria",
  "Alison",
  "Amanda",
  "Angela",
  "Bella",
  "Carol",
  "Carolline",
  "Carolyn",
  "Deirdre",
  "Diana",
  "Elizabeth",
  "Ella",
  "Faith",
  "Olivia",
  "Penelope",
];

searchName = (words, limit, callback) => {
  if (words == undefined || limit == undefined || callback == undefined) {
    console.log("Semua parameter harus diisi");
  } else {
    if (
      typeof words != "string" ||
      typeof limit != "number" ||
      typeof callback != "function"
    ) {
      console.log("Tipedata parameter tidak sesuai");
    } else {
      console.log(callback(words, limit));
    }
  }
};

search = (words, limit) => {
  return (newName = name
    .filter((items) => items.indexOf(words) != -1)
    .slice(0, limit));
};

// searchName();
// searchName("a","a","a");
searchName("an", 2, search);
