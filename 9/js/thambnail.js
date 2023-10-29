const container = document.querySelector('.pictures');
const thambnailTemplate = document.querySelector('#picture')
  .content.querySelector('.picture');

const createThambnail = ({url, description, likes, comments}) => {
  const thambnail = thambnailTemplate.cloneNode(true);

  thambnail.querySelector('.picture__img').src = url;
  thambnail.querySelector('.picture__img').alt = description;
  thambnail.querySelector('.picture__likes').textContent = likes;
  thambnail.querySelector('.picture__comments').textContent = comments.length;

  return thambnail;
};

const renderThambnails = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const thambnail = createThambnail(picture);
    fragment.append(thambnail);
  });
  container.append(fragment);
};

export {renderThambnails};


