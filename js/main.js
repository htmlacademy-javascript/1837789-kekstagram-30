import { getPictures } from './data.js';
import { renderGallery } from './gallery.js';

renderGallery(getPictures());

const imgUploadOverlay = document.querySelector('.img-upload__overlay');

imgUploadOverlay.classList.remove('hidden');
