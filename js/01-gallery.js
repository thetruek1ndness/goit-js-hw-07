import { galleryItems } from "./gallery-items.js";
// Change code below this line

//Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
//Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.
//Додай закриття модального вікна після натискання клавіші Escape. Зроби так, щоб прослуховування клавіатури було тільки доти, доки відкрите модальне вікно. Бібліотека basicLightbox містить метод для програмного закриття модального вікна.

console.log(galleryItems);

//Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.

const galleryListRef = document.querySelector(".gallery");

function createGalleryMarkup(galleryItems) {
  const galleryMarkup = galleryItems
    .map((galleryItem) => {
      const { preview, original, description } = galleryItem;
      return `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" data-source="${original}"
        alt='${description}'>
      </a>
    </li>`;
    })
    .join("");
  return galleryMarkup;
}

galleryListRef.insertAdjacentHTML(
  "beforeend",
  createGalleryMarkup(galleryItems)
);

//Реалізація делегування на ul.gallery і отримання url великого зображення.

function onGalleryItemClick(event) {
  event.preventDefault();
  const isGalleryLink = event.target.classList.contains("gallery__image");
  if (!isGalleryLink) {
    return;
  }

  const imageModal = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);
  imageModal.show();

  window.addEventListener('keydown', onEscapePress);

  function onEscapePress(event) {
    if (event.code === "Escape") {
      imageModal.close();
      window.removeEventListener("keydown", onEscapePress);
    }
  }
}



galleryListRef.addEventListener('click', onGalleryItemClick);
