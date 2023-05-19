// Framework Express y biblioteca Chance
const express = require('express');
const Chance = require('chance');

const app = express();
const chance = new Chance();

// Ruta donde se generan los 6 colores aleatorios
app.get('/', (req, res) => {
  const colors = [];
  for (let i = 0; i < 6; i++) {
    colors.push(chance.color({ format: 'hex' }));
  }
// Creación de la matriz
  const tableRows = [];
  for (let i = 0; i < 6; i++) {
    const row = [];
    for (let j = 0; j < 6; j++) {
      const color = colors[chance.integer({ min: 0, max: 36 })];
      const backgroundColor = color ? `background-color: ${color};` : 'background-color: white;';
      row.push(`<td style="${backgroundColor}"></td>`);
    }
    tableRows.push(`<tr>${row.join('')}</tr>`);
  }
// Tabla HTML
  const table = `
    <table style="width: 500px; height: 500px; border: 1px solid">
      ${tableRows.join('')}
    </table>
  `;
  res.send(table);
});

app.listen(4000, () => {
  console.log('Ejecutando servidor | puerto: 4000');
});
