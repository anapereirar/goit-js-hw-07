import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(
    (item) =>
      `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </li >`
  )
  .join("");

galleryContainer.insertAdjacentHTML("afterbegin", galleryMarkup);
galleryContainer.addEventListener("click", selectOriginalImage);

function selectOriginalImage(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const originalUrl = event.target.dataset.source;

  //Uso de la librería basicLightbox
  const instance = basicLightbox.create(`<img src="${originalUrl}">`);
  instance.show();

  galleryContainer.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
};