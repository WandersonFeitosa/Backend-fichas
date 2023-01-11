
<h1>Fichas Backend</h1>

  

<p  align="center">

  

<img  src="http://img.shields.io/static/v1?label=&message=Typescript&color=blue&style=for-the-badge"/>

  

<img  src="http://img.shields.io/static/v1?label=&message=Node&color=green&style=for-the-badge"/>

  

<img  src="https://img.shields.io/static/v1?label=STATUS&message=Em%20andamento&color=yellow&style=for-the-badge"/>

  

</p>

  

### Tópicos

  

:small_blue_diamond: [Descrição do projeto](#descrição-do-projeto)

  

:small_blue_diamond: [Configurando o projeto](#configurando-o-projeto)

  

:small_blue_diamond: [Tecnologias, plugins e libs](#tecnologias-plugins-e-libs-books)

  

## Descrição do projeto

  

<p  align="justify">

  

Backend do projeto de fichas de RPG (Ainda sem nome)

  

</p>

  

## Configurando o Projeto

  

Para rodar o servidor é preciso antes incuir o .env com as seguintes configurações

  

```

DB_HOST= Caminho do banco de dados

DB_PORT= Porta do banco de dados

DB_USER= Usuário do banco de dados

DB_PASS= Senha do banco de dados

DB_NAME= Nome do banco de dados

  

PORT= Porta onde ficará hospedado o servidor, caso esteja usando em localhost

  

JWT_PASS= Uma senha que será usada para criptografar as senhas

  

```

  

Após realizar a configuração das informações do banco de dados é preciso gerar as tabelas, dentro dele, para isso é utilizado o TypeOrm

  

Para analisar o banco e gerar a um arquivo de migration utilize o seguinte comando utilizando algum gerenciador de pacotes:

  

```

migration:generate

```

  

Após o arquivo de migration ser gerado é necessário fazer com que as mudanças sejam aplicadas ao banco de dados, para isso utilize o seguinte comando com um gerenciador de pacotes:

  

```

migration:run

```

  

## Tecnologias, plugins e libs :books:

  

**Tecnologias JS:**

  

- Node - 18.12;

  

Dependências internas do projeto podem ser encontrada na raiz dentro do package.json, e podem ser instaladas através do seguinte comando

  

```

npm install

```

  

ou

  

```

yarn install

```

  

##

  

**_Projeto em desenvolvimento_**