// 02-lightbox.js
import { galleryItems } from "./gallery-items.js";

// Change code below this line

const renderGalleryItems = (items) => {
  return items
    .map(
      ({ preview, original, description }) => `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
      </li>`
    )
    .join("");
};

const galleryContainer = document.querySelector(".gallery");
galleryContainer.innerHTML = renderGalleryItems(galleryItems);

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});
