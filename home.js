const intervalId = setInterval(() => {

  const personLearnImage = document.querySelector(
    'img[src*="PersonLearn-DbY26Ht3.png"]'
  );
  if (personLearnImage) {
    personLearnImage.src = "";
    personLearnImage.style.width = "auto";
    personLearnImage.style.top = "45%";
    personLearnImage.style.left = "25%";
  }

  const bgImage = document.querySelector('img[src*="Background-Dt75uuh7.jpg"]');
  if (bgImage) {
    bgImage.src = chrome.runtime.getURL("background/columbina.png");

    bgImage.style.width = "100%";
    bgImage.style.height = "100%";
    bgImage.style.objectFit = "cover";
    bgImage.style.objectPosition = "center";
  }

  // Tambahkan style untuk MuiTypography-root MuiTypography-h5
  const h5Element = document.querySelector(
    ".MuiTypography-root.MuiTypography-h5"
  );
  if (h5Element) {
    h5Element.style.lineHeight = "0.334";
  }
});

console.log("Interval aktif - kedua gambar akan terus diganti secara otomatis");
