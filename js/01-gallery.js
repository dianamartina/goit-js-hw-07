import { galleryItems } from "./gallery-items.js";

// Change code below this line

const renderGalleryItems = (items) => {
  return items
    .map(
      ({ preview, original, description }) => `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
        </a>
      </li>`
    )
    .join("");
};

const galleryContainer = document.querySelector(".gallery");
galleryContainer.innerHTML = renderGalleryItems(galleryItems);

galleryContainer.addEventListener("click", (event) => {
  event.preventDefault();

  const clickedImage = event.target;
  if (clickedImage.classList.contains("gallery__image")) {
    const originalUrl = clickedImage.dataset.source;

    const instance = basicLightbox.create(
      `
      <div class="modal">
        <img src="${originalUrl}" alt="${clickedImage.alt}" class="modal__image" width="800" height="600"/>
      </div>
    `,
      {
        onShow: (instance) => {
          const closeOnEscape = (event) => {
            if (event.key === "Escape") {
              instance.close();
              document.removeEventListener("keydown", closeOnEscape);
            }
          };
          document.addEventListener("keydown", closeOnEscape);
        },
      }
    );

    // Afișează fereastra modală
    instance.show();
  }
});
