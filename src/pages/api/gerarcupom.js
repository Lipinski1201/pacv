import Link from 'next/link';
const fs = require('fs');
const pdf = require('html-pdf');

export default async function handler(req, response) {
  // Verifica se o método é POST
  if (req.method === 'POST') {
    const nome_arquivo = req.body.nome + new Date().getTime() + '.pdf';
    // arquivo final
    const outputFile = 'public/pdf_export/' + nome_arquivo;
    const linkFinal = 'localhost:3000/pdf_export/' + nome_arquivo;

    // estilizar o bixo
    const htmlContent = `
      <html>
        <head>
          <style>
            table {
              border-collapse: collapse;
              width: 100%;
            }
            th, td {
              border: 1px solid black;
              padding: 8px;
            }
            th {
              text-align: left;
              background-color: #f2f2f2;
            }
          </style>
        </head>
        <body>
          <img src="/imagens/logo-sem-fundo.png" className="w-20 h-auto mr-5" alt="Logo" />
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>CPF</th>
                <th>Cargo</th>
                <th>Motivo</th>
                <th>Operação</th>
                <th>Valor</th>
                <th>Empresa</th>
                <th>CNPJ</th>
                <th>Data</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${req.body.nome}</td>
                <td>${req.body.cpf}</td>
                <td>${req.body.cargo}</td>
                <td>${req.body.tipo}</td>
                <td>${req.body.operacao}</td>
                <td>${req.body.valor}</td>
                <td>${req.body.empresa}</td>
                <td>${req.body.cnpj}</td>
                <td>${req.body.data}</td>
              </tr>
            </tbody>
          </table>
        </body>
      </html>
    `;

    pdf.create(htmlContent).toFile(outputFile, function (err, res) {
      if (err) {
        console.error('(Servidor) Ocorreu um erro:', err);
        response.status(500);
      } else {
        console.log('(Servidor) PDF gerado com sucesso:', outputFile);
        response.status(200).json({
          link: linkFinal
        });
      }
    });
  }
}
