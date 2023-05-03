import { galleryItems } from "./gallery-items.js";
// Change code below this line

//Створення і рендер розмітки на підставі масиву даних galleryItems і наданого
// шаблону елемента галереї. Використовуй готовий код з першого завдання.

// Підключення скрипту і стилів бібліотеки, використовуючи CDN сервіс cdnjs.

// Необхідно додати посилання на два файли: simple-lightbox.min.js і
// simple-lightbox.min.css. Ініціалізація бібліотеки після створення і додання
// елементів галереї у ul.gallery. Для цього ознайомся з документацією
// SimpleLightbox - насамперед секції «Usage» і «Markup». Подивися в
// документації секцію «Options» і додай відображення підписів до зображень з
// атрибута alt. Нехай підпис буде знизу і з'являється через 250 мілісекунд
// після відкриття зображення.
console.log(galleryItems);


const gallery = document.querySelector('.gallery');

const markup = galleryItems.map(({preview, original, description}) =>
  `<li class="gallery__item">
    <a class="gallery__link" href='${original}'>
      <img class="gallery__image" src = '${preview}' alt='${description}' title='${description}' />
    </a>
  </li>`).join('');

gallery.insertAdjacentHTML('beforeend', markup);
    
new SimpleLightbox('.gallery a', {
        captionDelay: 250,
    });