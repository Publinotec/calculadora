let memory = 0;

function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculate() {
  try {
    let result = eval(document.getElementById('display').value);
    document.getElementById('display').value = formatNumber(result);
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}

function formatInput() {
  let inputValue = document.getElementById('display').value;
  if (!/^[0-9]*\.?[0-9]*$/.test(inputValue)) {
    document.getElementById('display').value = inputValue.replace(/[^0-9.]/g, '');
  }
}

function memoryStore() {
  memory += parseFloat(document.getElementById('display').value) || 0;
  clearDisplay();
}

function memorySubtract() {
  memory -= parseFloat(document.getElementById('display').value) || 0;
  clearDisplay();
}

function memoryRecall() {
  document.getElementById('display').value = formatNumber(memory);
}

function memoryClear() {
  memory = 0;
  clearDisplay();
}

function formatNumber(number) {
  return new Intl.NumberFormat(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(number);
}
