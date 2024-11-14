
# Sistema de Suporte ao Estudante - CA de Ciência da Computação

**Projeto acadêmico** desenvolvido para o Centro Acadêmico de Ciência da Computação da UEPB - Campus VII. Este sistema tem como objetivo fortalecer a comunidade acadêmica dos estudantes de Ciência da Computação, oferecendo funcionalidades para melhorar a comunicação e organização.

## 📖 Tecnologias Utilizadas

### **Front-End**:
- **React** com **TypeScript (TSX)**
- **HTML5** e **CSS3**
- **Bibliotecas**: Axios (para requisições HTTP), React Router (para navegação)

### **Back-End**:
- **Java** com **Spring Boot**
- **JWT** (Autenticação)
- **Spring Data MongoDB**

### **Banco de Dados**:
- **MongoDB** (NoSQL)

### **Arquitetura**:
A arquitetura do sistema segue o padrão de **camadas**, o que garante a separação de responsabilidades e facilita a manutenção e evolução do código.

1. **Camada de Apresentação (Front-End)**:
   - Interface do usuário construída com **React** utilizando **TypeScript** para maior segurança de tipos e **TSX** para integração de HTML com JavaScript.
   - **CSS** para o estilo e layout responsivo.

2. **Camada de Lógica de Negócio (Back-End)**:
   - **Spring Boot** para construção de APIs RESTful.
   - **JWT** para autenticação de usuários.
   - Regras de negócio implementadas no **Service Layer**, facilitando a escalabilidade e manutenção.

3. **Camada de Persistência (Banco de Dados)**:
   - **MongoDB** para armazenamento de dados não-relacional.
   - A camada de persistência utiliza o **Spring Data MongoDB** para abstração de operações CRUD.

## 🛠 Funcionalidades

- **Autenticação de Usuários**: Login com e-mail/senha ou Google. Utilização de JWT para segurança.
- **Mural de Avisos**: Postagens de mensagens por estudantes e administradores. As mensagens são exibidas com data e nome do autor.
- **Cadastro de Usuários**: Cadastro de estudantes com informações pessoais e acadêmicas.
- **Gerenciamento de Tarefas**: Ferramenta para criação e visualização de tarefas acadêmicas.
- **Calendário Acadêmico**: Visualização de eventos importantes para os estudantes.
- **Perfil do Usuário**: Visualização e edição de informações no perfil do usuário.

## 👨‍💻 Equipe de Desenvolvimento

- **Matheus Coelho**  
- **Luiz Felipe**  
- **Jonathas Bezerra**  
- **Gilberto Cassiano**  

## ⚡ Como Executar

### Requisitos

- **Node.js** (para o front-end)
- **Java** (para o back-end)
- **MongoDB** (para o banco de dados)



## 📄 Licença

Este projeto está licenciado sob a **MIT License** - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
