const REMOVE_MESSAGE_TIMEOUT = 5000;

const errorMessageElement = document.querySelector('#data-error')
  .content.querySelector('.data-error');

const showErrorMessage = () => {
  const errorElement = errorMessageElement.cloneNode(true);
  document.body.append(errorElement);

  setTimeout(() => {
    errorElement.remove();
  }, REMOVE_MESSAGE_TIMEOUT);
};

export { showErrorMessage };
