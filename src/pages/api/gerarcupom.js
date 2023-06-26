// Importação do prisma
// const { PrismaClient } = require('@prisma/client')
// const prisma = new PrismaClient()

const fs = require('fs');
const pdf = require('html-pdf');

export default async function handler(req, response) {

  // Verifica se o metodo é POST
  if(req.method === 'POST') {

    const nome_arquivo = req.body.nome + new Date().getTime() + '.pdf';
    //arquivo final
    const outputFile = 'public/pdf_export/' + nome_arquivo;
    const linkFinal = 'localhost:3000/pdf_export/' + nome_arquivo;

    //estilizar o bixo
    const htmlContent = `
      <html>
        <body>
          <h1>`+ req.body.nome + `</h1>
          <h2>`+ req.body.cpf + `</h2>
          <h2>`+ req.body.cargo + `</h2>
          <h2>`+ req.body.tipo + `</h2>
          <h2>`+ req.body.operacao + `</h2>
          <h2>`+ req.body.valor + `</h2>
          <h2>`+ req.body.empresa + `</h2>
          <h2>`+ req.body.cnpj + `</h2>
          <h2>`+ req.body.data + `</h2>
        </body>
      </html>
    `;

    pdf.create(htmlContent).toFile(outputFile, function (err, res) {
      if (err) {
        console.error('(Servidor) Ocorreu um erro:', err);
        response.status(500)
      } else {
        console.log('(Servidor) PDF gerado com sucesso:', outputFile);
        response.status(200).json({
          link: linkFinal
        })
      }
    });

  }
}