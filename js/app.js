




document.addEventListener('DOMContentLoaded', () => {
    const newItemform = document.querySelector('#new-item-form');
    newItemform.addEventListener('submit', handleNewItemFormSubmit);

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);

})


const handleNewItemFormSubmit = function (event) {
    event.preventDefault();

    const playerListItem = createPlayerListItem(event.target);
    const playerList = document.querySelector('#player-List');
    playerList.appendChild(playerListItem);

    event.target.reset();

}

const createPlayerListItem = function (form) {
    const playerListItem = document.createElement('li');
    playerListItem.classList.add('player-list-item');

    const name = document.createElement('h2');
    name.textContent = form.name.value;
    playerListItem.appendChild(name);

    const club = document.createElement('h3');
    club.textContent = form.club.value;
    playerListItem.appendChild(club);
    
    const position = document.createElement('p');
    position.textContent = form.position.value;
    playerListItem.appendChild(position);

    return playerListItem;
}

const handleDeleteAllClick = function (event) {
    const playerList = document.querySelector('#player-List');
    playerList.innerHTML ='';
}

