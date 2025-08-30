// Image galleries for each project
const galleries = {
  knosoon: ["img/knosoon1.jpg", "img/knosoon2.jpg"],
  recordex: ["img/recordex1.jpg", "img/recordex2.jpg"],
  questinn: ["img/quest1.jpg", "img/quest2.jpg", "img/quest3.jpg"],
  rebeca2023: ["img/rebeca2023-1.jpg", "img/rebeca2023-2.jpg"],
  rebeca2024: ["img/rebeca2024-1.jpg", "img/rebeca2024-2.jpg"],
  edc: ["img/edc1.jpg", "img/edc2.jpg", "img/edc3.jpg"]
};

const modal = document.getElementById("modal");
const galleryDiv = document.querySelector(".gallery");
const closeBtn = document.querySelector(".close");

// Open modal with images
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    const galleryName = card.getAttribute("data-gallery");
    const images = galleries[galleryName] || [];

    galleryDiv.innerHTML = images.map(src => `<img src="${src}" alt="">`).join("");
    modal.style.display = "flex";
  });
});

// Close modal
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target === modal) modal.style.display = "none"; }
