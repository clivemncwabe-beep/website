let lines = [];

fetch('data.txt')
  .then(response => response.text())
  .then(text => {
    lines = text.split('\n');
  });

document.getElementById('searchInput').addEventListener('input', function () {
  const query = this.value.toLowerCase();
  const results = lines.filter(line => line.toLowerCase().includes(query));

  const resultsList = document.getElementById('results');
  resultsList.innerHTML = '';

  results.forEach(match => {
    const li = document.createElement('li');
    li.textContent = match;
    resultsList.appendChild(li);
  });
});