const getInputText = document.getElementById('text-input');
const getButton = document.getElementById('check-btn');
const result = document.getElementById('result');

function palindrome(str) {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const len = cleanStr.length;
  const middle = Math.floor(len / 2);
  const firstHalf = cleanStr.slice(0, middle);
  const secondHalf = len % 2 === 0
    ? cleanStr.slice(middle).split('').reverse().join('')
    : cleanStr.slice(middle + 1).split('').reverse().join('');

  return firstHalf === secondHalf;
}

getButton.addEventListener('click', () => {
  if(getInputText.value === '') {
    alert('Please input a value');
  } else if(palindrome(getInputText.value)) {
      const resultText = `<span class="bold">${getInputText.value}</span> is a palindrome`;
      result.innerHTML = resultText;
  } else {
    const noresultText = `<span class="bold">${getInputText.value}</span> is not a palindrome`;
    result.innerHTML = noresultText;
  }

});