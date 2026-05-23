# Architecture Recommender

O Architecture Recommender é uma aplicação web que permite analisar e conferir padrões de arquiteturas de software. O sistema avalia o grau de inferência que os padrões têm com diversos atributos de qualidade de software.

---

## Funcionalidades

O sistema é divido em 3 seções:

- **Página Principal (`/`)**: Ferramenta central de recomendação.
- **Atributos (`/attributes`)**: Exploração detalhada dos atributos de qualidade de software.
- **Padrões (`/patterns`)**: Catálogo dos padrões arquiteturais, apresentando a sua descrição, prós, contras e exemplos.

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias:

- **React** (com **TypeScript**) para a construção da interface.
- **Tailwind CSS/Lucide React** para a estilização, uso de ícones e design responsivo.
- **Appwrite** para integração com serviços de *backend*.

## 🚀 Como executar o projeto

Utilizando [Node.js](https://nodejs.org/), siga os passos:

1. Clone o repositório.
2. Navegue até à pasta do projeto:
```bash
cd architecture_recommender

```


3. Instale as dependências do projeto:
```bash
npm install

```

4. Preencha as variáveis de ambiente em um arquivo **.env**
```
VITE_APPWRITE_PROJECT_ID=
VITE_APPWRITE_PROJECT_NAME=
VITE_APPWRITE_ENDPOINT=
VITE_DATABASE_ID=
```


5. Inicie o servidor de desenvolvimento:
```bash
npm run dev

```


6. Acesso no navegador `http://localhost:5173` para ver a aplicação em funcionamento.
