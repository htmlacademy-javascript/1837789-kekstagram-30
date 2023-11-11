import { renderGallery } from './gallery.js';
import { setFormSubmit } from './form.js';
import './form.js';
import { getData } from './api.js';
import { showErrorMessage } from './utils.js';

getData()
  .then((pictures) => {
    renderGallery(pictures);
  })
  .catch(
    () => {
      showErrorMessage();
    }
  );

setFormSubmit();
