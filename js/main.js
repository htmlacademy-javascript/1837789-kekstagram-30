import {getPictures} from './data.js';

const result = getPictures();

const ListPhotos = document.querySelector('.pictures');
const userPhotosTemplate = document.querySelector('#picture')
  .content.querySelector('.picture');

const ListPhotosFragment = document.createDocumentFragment();

result.forEach((photo) => {
  const PhotoElement = userPhotosTemplate.cloneNode(true);
  PhotoElement.querySelector('.picture__img').src = photo.url;
  PhotoElement.querySelector('.picture__img').alt = photo.description;
  PhotoElement.querySelector('.picture__likes').textContent = photo.likes;
  PhotoElement.querySelector('.picture__comments').textContent = photo.comments.length;
  ListPhotosFragment.appendChild(PhotoElement);
});

ListPhotos.appendChild(ListPhotosFragment);
