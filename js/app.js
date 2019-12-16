document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const formElement = document.querySelector('#new-item-form');

  const handleFormSubmit = function(e){
    event.preventDefault();


    const newListItem = document.createElement('li');
    newListItem.textContent = `Name: ${event.target.name.value}, Hometown: ${event.target.Hometown.value}, Race: ${event.target.Race.value} `
    newListItem.classList.add('character-item-1')
    const list = document.querySelector('ul');
    list.appendChild(newListItem);

    document.getElementById('new-item-form').reset();


  }

  formElement.addEventListener('submit', handleFormSubmit);
  const handleDeleteAllClick = function (e) {
    const characterList = document.querySelector('#character-list');
    characterList.innerHTML = '';

  }

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
  


});
