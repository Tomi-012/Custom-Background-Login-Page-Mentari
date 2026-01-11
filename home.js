// Buat interval yang terus memeriksa dan mengganti kedua gambar
const intervalId = setInterval(() => {
  // Ganti gambar PersonLearn dengan holo-tail gif
  const personLearnImage = document.querySelector(
    'img[src*="PersonLearn-DbY26Ht3.png"]'
  );
  if (personLearnImage) {
    personLearnImage.src = "";
    // "https://github.com/tonybaloney/vscode-pets/blob/main/media/fox/red_idle_8fps.gif?raw=true";
    personLearnImage.style.width = "auto"; // Menambahkan inline style width: auto
    personLearnImage.style.top = "45%";
    personLearnImage.style.left = "25%";
  }

  const bgImage = document.querySelector('img[src*="Background-Dt75uuh7.jpg"]');
  if (bgImage) {
    bgImage.src = chrome.runtime.getURL("background/columbina.png");

    // Menggunakan object-fit alih-alih background properties untuk <img>
    bgImage.style.width = "100%";
    bgImage.style.height = "100%";
    bgImage.style.objectFit = "cover"; // Mempertahankan rasio aspek dan menutupi area
    bgImage.style.objectPosition = "center";
  }

  // Tambahkan style untuk MuiTypography-root MuiTypography-h5
  const h5Element = document.querySelector(
    ".MuiTypography-root.MuiTypography-h5"
  );
  if (h5Element) {
    h5Element.style.lineHeight = "0.334";
  }
}); // Periksa setiap 100ms

console.log("Interval aktif - kedua gambar akan terus diganti secara otomatis");

// Jika ingin menghentikan interval nanti:
// clearInterval(intervalId);
