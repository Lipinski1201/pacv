// Importação do prisma
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

export default async function handler(req, res) {

  // Verifica se o metodo é POST
  if(req.method === 'POST') {

    // Pega os valores do formulário
    const email_da_requisicao = req.body.email;
    const senha_da_requisicao = req.body.senha;

    // Verifica se o usuario existe
    const usuario = await prisma.usuario.findFirst({
      where: {
        email: email_da_requisicao, // A chave (email), é a coluna do Prisma (Banco)
        senha: senha_da_requisicao
      }
    })

    // Retorna se o usuario existir ou nao
    if(usuario) {
      res.status(200).json({ 
        usuario: usuario,
        status: "logado"
       });
    }else{
      res.status(400).json({ erro: 'Usuário ou senha inválidos' });
    }
  }
}