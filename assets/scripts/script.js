document.addEventListener("DOMContentLoaded", function () {
  // Panggil fungsi handleChangeName
  handleChangeName(1); // Untuk tim 1
  handleChangeName(2); // Untuk tim 2

  // Panggil fungsi untuk skor
  handleScoreCounter(1); // Untuk tim 1
  handleScoreCounter(2); // Untuk tim 2

  const reload = document.getElementById("reload");
  reload.addEventListener("click", function () {
    location.reload(); // Ini akan merefresh halaman
  });
});
