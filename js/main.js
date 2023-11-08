import { getPictures } from './data.js';
import { renderGallery } from './gallery.js';
import { startsForm } from './form.js';

renderGallery(getPictures());

startsForm();

