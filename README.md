# Sistema Login Supabase

## Sobre o projeto

O **Sistema Login Supabase** é uma aplicação de autenticação de usuários desenvolvida para praticar a integração entre aplicação, API e banco de dados.

O projeto tem como objetivo simular um fluxo básico de cadastro e login, aplicando conceitos de desenvolvimento web, validação de informações e comunicação com uma base de dados hospedada no Supabase.

Este repositório representa uma etapa de aprendizado em desenvolvimento backend, banco de dados e organização de projetos com versionamento.

## Objetivo

Desenvolver uma aplicação simples de autenticação para praticar:

- criação de cadastro de usuários;
- fluxo de login;
- validação de dados;
- integração com banco de dados;
- organização de código em um projeto versionado.

## Problema resolvido

Muitos sistemas precisam identificar usuários e controlar o acesso a determinadas funcionalidades. Este projeto explora uma versão inicial desse tipo de solução, permitindo estudar como uma aplicação se comunica com um banco de dados para registrar e consultar informações de usuários.

## Tecnologias

- Java
- Spring Boot
- HTML
- CSS
- JavaScript
- Supabase
- PostgreSQL
- Git/GitHub

## Funcionalidades

- Cadastro de usuários
- Login
- Validação de informações
- Comunicação com banco de dados

> Observação: mantenha nesta seção apenas as funcionalidades que realmente estão implementadas no projeto.

## Conceitos praticados

- API REST
- Banco de dados
- Autenticação
- Organização de código
- Versionamento

## Aprendizados

Durante o desenvolvimento deste projeto, pratiquei a construção de uma aplicação com integração entre frontend, backend e banco de dados. Também aprofundei meus estudos em autenticação, estruturação de rotas, organização de arquivos e uso do Git/GitHub para controle de versão.

O projeto contribuiu para reforçar meu entendimento sobre como uma aplicação pode enviar, validar, armazenar e consultar dados de usuários em um banco relacional usando o Supabase/PostgreSQL.

## Screenshots

As imagens do projeto podem ser adicionadas futuramente na pasta `docs/screenshots`.

Sugestões de telas para documentar:

- tela de cadastro;
- tela de login;
- exemplo de validação;
- estrutura do banco de dados sem expor dados sensíveis.

## Como executar o projeto

### Pré-requisitos

- Java instalado
- Maven instalado, caso o projeto use Maven
- Conta e projeto configurado no Supabase
- Banco PostgreSQL configurado

### Passos

1. Clone o repositório:

```bash
git clone https://github.com/jcscocco/Login.git
```

2. Acesse a pasta do projeto:

```bash
cd Login
```

3. Configure as variáveis de ambiente ou arquivo de configuração local.

Exemplo:

```env
SUPABASE_URL=sua_url_do_supabase
SUPABASE_KEY=sua_chave_do_supabase
DATABASE_URL=sua_url_do_banco
```

4. Execute a aplicação conforme a estrutura do projeto.

Exemplo para projetos Spring Boot com Maven:

```bash
mvn spring-boot:run
```

## Exemplo de configuração

Crie um arquivo de exemplo, como `.env.example`, sem valores reais:

```env
SUPABASE_URL=
SUPABASE_KEY=
DATABASE_URL=
```

Nunca envie chaves, senhas ou tokens reais para o GitHub.

## Organização recomendada

```text
Login/
├── Back_End/
├── Front_End_Login/
├── docs/
│   └── screenshots/
├── .gitignore
└── README.md
```

## Cuidados de segurança

- Remover senhas, tokens e chaves privadas do repositório.
- Usar `.env` para dados sensíveis.
- Manter somente `.env.example` no GitHub.
- Revisar commits antigos antes de tornar o repositório público.

## Status do projeto

Projeto desenvolvido para fins de estudo e prática de integração entre aplicação, autenticação e banco de dados.
