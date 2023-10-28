import {getPictures} from './data.js';
import {renderThumbnails} from './thumbnail.js';
import {viewingBigPicture} from './viewingBigPicture.js';

const thumbnailData = getPictures();

// Отрисовываем миниатюры на странице
renderThumbnails(thumbnailData);

const container = document.querySelectorAll('.picture');

for (let i = 0; i < container.length; i++) {
  viewingBigPicture(container[i], thumbnailData[i]);
}
