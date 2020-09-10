seleksiNilai = (begin, finish, arr = []) => {
  if (begin == undefined || finish == undefined || arr.length == 0) {
    console.log("Semua parameter harus diisi");
  } else {
    if (
      typeof begin != "number" ||
      typeof finish != "number" ||
      typeof arr !== "object"
    ) {
      console.log("Tipedata parameter tidak sesuai");
    } else {
      if (arr.length <= 5) {
          console.log( arr)
        console.log("Data array harus lebih dari 5");
      } else {
        if (begin >= finish) {
          console.log("Nilai akhir harus lebih besar dari nilai awal");
        } else {
          sortArr = arr.sort((a, b) => begin - finish);
          console.log(begin , finish)
          //NOTED
          limitArr = sortArr.slice(begin, finish);
          console.log(limitArr);
        }
      }
    }
  }
};

// seleksiNilai();
// seleksiNilai(0, 2, 10);
seleksiNilai(5,20,[2,25,4,14,17,30,8]);
