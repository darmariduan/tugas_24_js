function tugas24() {
  function awal() {
    var data = [ 32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66];
    data = data.toString();
    return data;
  }
    console.log("Sebelumnya:", awal());

    function asc() {
      var data = [ 32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66];
      data = data.sort();
      data = data.toString();
      return data;
    }
    console.log("Ascending:", asc());

    function desc() {
      var data = [ 32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66];
      data = data.sort();
      data = data.reverse();
      data = data.toString();
      return data;
    }
    console.log("Descending:", desc());
}
tugas24();
