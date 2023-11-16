import { renderGallery } from './gallery.js';
import { setFormSubmit } from './form.js';
import { getData } from './api.js';
import { showErrorMessage } from './utils.js';
import './filters.js';
import { initFilter } from './filters.js';


getData()
  .then((pictures) => {
    renderGallery(pictures);
    initFilter(pictures);
  })
  .catch(
    () => {
      showErrorMessage();
    }
  );

setFormSubmit();


