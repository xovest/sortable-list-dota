const draggableList = document.getElementById('draggable-list');
const check = document.getElementById('check');

const heroes = [
  'Shadow Fiend',
  'Storm Spirit',
  'Tinker',
  'Templar Assassin',
  'Invoker',
  'Outworld Devourer',
  'Queen of Pain',
  'Void Spirit',
  'Ember Spirit',
  'Puck'
];

//storing the list items
const listItems = [];

let dragStartIndex;

createList();

//inserting the list items into DOM
function createList() {
  [...heroes].forEach((hero, index) => {
    const listItem = document.createElement('li');
    listItem.setAttribute('data-index', index);
    listItem.innerHTML = `
      <span class="number">${index + 1}</span>
      <div class="draggable" draggable="true">
        <p class="hero-name">${hero}</p>
        <i class="fas fa-grip-lines"></i>
      </div>
    `;

    listItems.push(listItem);
    draggableList.appendChild(listItem);
  });
}