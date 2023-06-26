const fs = require('fs');
const pdf = require('html-pdf');

function generatePDF(outputFile) {
  const htmlContent = `
    <html>
      <body>
        <h1>Exemplo de PDF gerado com Node.js</h1>
      </body>
    </html>
  `;

  pdf.create(htmlContent).toFile(outputFile, function (err, res) {
    if (err) {
      console.error('Ocorreu um erro:', err);
    } else {
      console.log('PDF gerado com sucesso:', outputFile);
    }
  });
}

// Obtém o nome do arquivo de saída a partir dos argumentos da linha de comando
const args = process.argv.slice(2);
const outputFile = 'src\pages\geracupom';

// Gera o PDF e salva-o no arquivo especificado
generatePDF(outputFile);
