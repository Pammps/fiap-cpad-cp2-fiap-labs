# 📱 FIAP Labs

## 📌 Sobre o Projeto

O **FIAP Labs** é um aplicativo mobile desenvolvido para melhorar o processo de agendamento de laboratórios dentro da FIAP.

Atualmente, o processo pode ser manual. O app permite que alunos realizem agendamentos de forma rápida, simples e digital.

### 🎯 Problema escolhido

A dificuldade de organização e agendamento dos laboratórios.

### 🚀 Solução

Um aplicativo mobile que permite:

* Criar agendamentos
* Visualizar agendamentos
* Gerenciar reservas facilmente

---

## 🔄 Evolução do CP1 → CP2

No CP2, o projeto foi aprimorado com:

* Autenticação de usuários
* Persistência de dados com AsyncStorage
* Estado global com Context API
* Validação de formulários
* Melhorias de UI/UX
* Tema claro/escuro (diferencial)

---

## ⚙️ Funcionalidades

* Cadastro de usuário
* Login com validação
* Persistência de sessão
* Criação de agendamentos
* Listagem de agendamentos
* Exclusão de agendamentos
* Busca de laboratórios
* Tema claro/escuro
* Logout

---

## 👥 Integrantes

* Pamella Souza da Silva Ferreira — RM: 566172 2CCPH

---

## ▶️ Como Rodar o Projeto

### Pré-requisitos

* Node.js
* Expo CLI
* Expo Go

### Passo a passo

```bash
git clone https://github.com/SEU-USUARIO/fiap-cpad-cp2-fiap-labs
cd fiap-cpad-cp2-fiap-labs
npm install
npx expo start
```

---

## 📸 Demonstração

### Prints das telas

* Login
![Login](assets/screenshots/login.png)

* Cadastro
![Cadastro](assets/screenshots/cadastro.png)

* Home
![Home Dark](assets/screenshots/home_dark.png)
![Home Light](assets/screenshots/home_light.png)

* Criar agendamento
![Agendamentos Dark](assets/screenshots/agendamentos_dark.png)
![Agendamentos Light](assets/screenshots/agendamentos_light.png)

* Meus agendamentos
![Meus agendamentos dark](assets/screenshots/meus_dark.png)
![Meus agendamentos light](assets/screenshots/meus_light.png)

* Perfil
![Perfil dark](assets/screenshots/perfil_dark.png)
![Perfil light](assets/screenshots/perfil_light.png)


### 🎥 Vídeo

Assista ao vídeo demonstrativo:

👉 https://youtube.com/shorts/PprxTJ4Kq6Q?feature=share

---

## 🧠 Decisões Técnicas

### Estrutura

* app/ → rotas
* context/ → estados globais
* components/ → componentes reutilizáveis

### Contexts

* AuthContext → login, logout, usuário
* AppDataContext → agendamentos
* ThemeContext → tema claro/escuro

### Autenticação

Implementada com AsyncStorage, validando dados salvos localmente.

### Persistência

* "user" → dados do usuário
* "session" → sessão ativa
* "agendamentos" → lista de reservas

### Navegação protegida

Usuário não autenticado é redirecionado para login.

---

## ⭐ Diferencial Implementado

### Tema Claro/Escuro

Permite alternar entre modos de visualização.

**Justificativa:**
Melhora a experiência do usuário, permitindo personalização e conforto visual.

---

## 🔮 Próximos Passos

* Integração com API real
* Notificações de agendamento
* Upload de foto de perfil
* Edição de agendamentos
