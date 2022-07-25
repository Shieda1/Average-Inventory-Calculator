// https://calculator.swiftutors.com/average-inventory-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const averageInventoryRadio = document.getElementById('averageInventoryRadio');
const beginningInventoryRadio = document.getElementById('beginningInventoryRadio');
const endingInventoryRadio = document.getElementById('endingInventoryRadio');

const two = 2;
let averageInventory;
let beginningInventory = v1;
let endingInventory = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

averageInventoryRadio.addEventListener('click', function() {
  variable1.textContent = 'Beginning Inventory';
  variable2.textContent = 'Ending Inventory';
  averageInventory = v1;
  endingInventory = v2;
});

beginningInventoryRadio.addEventListener('click', function() {
  variable1.textContent = 'Average Inventory';
  variable2.textContent = 'Ending Inventory';
  averageInventory = v1;
  endingInventory = v2;
});

endingInventoryRadio.addEventListener('click', function() {
  variable1.textContent = 'Average Inventory';
  variable2.textContent = 'Beginning Inventory';
  averageInventory = v1;
  beginningInventory = v2;
});

btn.addEventListener('click', function() {
  
  if(averageInventoryRadio.checked)
    result.textContent = `Average Inventory = ${computeAverageInventory().toFixed(2)}`;

  else if(beginningInventoryRadio.checked)
    result.textContent = `Beginning Inventory = ${computeBeginningInventory().toFixed(2)}`;

  else if(endingInventoryRadio.checked)
    result.textContent = `Ending Inventory = ${computeEndingInventory().toFixed(2)}`;
})

// calculation

function computeAverageInventory() {
  return (Number(beginningInventory.value) + Number(endingInventory.value)) / two;
}

function computeBeginningInventory() {
  return (two * Number(averageInventory.value)) - Number(endingInventory.value);
}

function computeEndingInventory() {
  return (two * Number(averageInventory.value)) - Number(beginningInventory.value);
}