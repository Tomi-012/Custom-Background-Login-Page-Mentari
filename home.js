(() => {
  const SELECTORS = {
    person: 'img[src*="PersonLearn"]',
    background: 'img[src*="Background"]',
    heading: ".MuiTypography-root.MuiTypography-h5",
  };

  // Tambah gambar lain di array ini jika ingin auto-rotate.
  const BACKGROUND_IMAGES = ["background/columbina.png", "background/yangyang.jpg"];
  const BG_INTERVAL_MS = 15000;

  let bgIndex = 0;
  let bgIntervalId = null;
  let rafId = 0;

  function applyPersonImage() {
    const personLearnImage = document.querySelector(SELECTORS.person);
    if (!personLearnImage) {
      return false;
    }
    if (personLearnImage.dataset.mentariHidden !== "true") {
      personLearnImage.dataset.mentariHidden = "true";
      personLearnImage.style.display = "none";
      return true;
    }
    return false;
  }

  function getBackgroundElement() {
    return (
      document.querySelector('[data-mentari-bg="true"]') ||
      document.querySelector(SELECTORS.background)
    );
  }

  function applyBackgroundImage() {
    const bgImage = getBackgroundElement();
    if (!bgImage) {
      return false;
    }

    if (bgImage.dataset.mentariBg !== "true") {
      bgImage.dataset.mentariBg = "true";
    }

    const targetUrl = chrome.runtime.getURL(BACKGROUND_IMAGES[bgIndex]);
    let changed = false;

    if (bgImage.src !== targetUrl) {
      bgImage.src = targetUrl;
      changed = true;
    }

    if (bgImage.dataset.mentariStyled !== "true") {
      bgImage.dataset.mentariStyled = "true";
      bgImage.style.width = "100%";
      bgImage.style.height = "100%";
      bgImage.style.objectFit = "cover";
      bgImage.style.objectPosition = "center";
      changed = true;
    }

    return changed;
  }

  function applyHeadingStyle() {
    const h5Element = document.querySelector(SELECTORS.heading);
    if (!h5Element) {
      return false;
    }
    if (h5Element.dataset.mentariStyled !== "true") {
      h5Element.dataset.mentariStyled = "true";
      h5Element.style.lineHeight = "0.334";
      return true;
    }
    return false;
  }

  function applyAll() {
    let changed = false;
    changed = applyPersonImage() || changed;
    changed = applyBackgroundImage() || changed;
    changed = applyHeadingStyle() || changed;
    return changed;
  }

  function startBackgroundRotation() {
    if (BACKGROUND_IMAGES.length < 2 || bgIntervalId) {
      return;
    }
    bgIntervalId = setInterval(() => {
      const bgImage = getBackgroundElement();
      if (!bgImage) {
        return;
      }
      bgIndex = (bgIndex + 1) % BACKGROUND_IMAGES.length;
      applyBackgroundImage();
    }, BG_INTERVAL_MS);
  }

  function onMutations() {
    if (rafId) {
      return;
    }
    rafId = requestAnimationFrame(() => {
      rafId = 0;
      applyAll();
    });
  }

  function init() {
    applyAll();
    startBackgroundRotation();

    const observer = new MutationObserver(onMutations);
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["src", "class", "style"],
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }

  console.log("Mentari Mod aktif: background login diganti otomatis saat elemen muncul.");
})();
