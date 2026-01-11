# Little Lemon - Sistema de Reservas

Sistema completo de reserva de mesas para o restaurante Little Lemon, desenvolvido como projeto final da formação de Front-End do Coursera.

## 📋 Objetivo

Este projeto implementa uma aplicação web completa para o restaurante Little Lemon, incluindo:
- **Sistema de Reservas**: Formulário completo de reserva de mesas
- **Navegação**: Rotas para diferentes páginas (Home, Sobre, Menu, Reservas, Pedidos Online, Login)
- **UX/UI**: Interface intuitiva e moderna seguindo o design do Little Lemon
- **Acessibilidade**: Totalmente acessível para usuários com deficiências
- **Validações**: Validação robusta de todos os campos do formulário
- **Responsividade**: Funciona perfeitamente em desktop, tablet e mobile
- **Testes**: Testes unitários com React Testing Library

## 🚀 Como Rodar o Projeto

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/le0nardomartins/little-lemon-app-Coursera
cd final-project_coursera
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm start
```

4. Abra o navegador em `http://localhost:3000`

O projeto abrirá automaticamente no navegador e recarregará automaticamente quando você fizer alterações nos arquivos.

### Build para Produção

Para criar uma versão otimizada para produção:

```bash
npm run build
```

Isso criará uma pasta `build` com os arquivos otimizados prontos para deploy.

## 🧪 Como Rodar os Testes

### Executar todos os testes:
```bash
npm test
```

Os testes serão executados em modo watch. Pressione `a` para executar todos os testes, ou `q` para sair.

### Executar testes com cobertura:
```bash
npm test -- --coverage
```

## 📦 Dependências

### Dependências Principais
- **react** (^18.2.0): Biblioteca principal do React
- **react-dom** (^18.2.0): Renderização do React no DOM
- **react-router-dom** (^6.20.0): Roteamento para aplicações React
- **react-scripts** (5.0.1): Scripts e configuração do Create React App
- **web-vitals** (^3.5.0): Métricas de performance web
- **react-icons** (^4.12.0): Biblioteca de ícones para React
- **react-use** (^17.4.2): Coleção de hooks úteis para React
- **hamburger-react** (^2.5.0): Componente de menu hambúrguer animado
- **framer-motion** (^10.16.16): Biblioteca de animações para React

### Dependências de Desenvolvimento
- **@testing-library/react** (^14.1.2): Utilitários para testar componentes React
- **@testing-library/jest-dom** (^6.1.5): Matchers adicionais para testes
- **@testing-library/user-event** (^14.5.1): Simulação de eventos do usuário

## 🛠️ Tecnologias Usadas

- **React 18**: Biblioteca JavaScript para construção de interfaces
- **React Router**: Roteamento e navegação entre páginas
- **Create React App**: Ferramenta para criar e configurar projetos React
- **React Testing Library**: Biblioteca para testar componentes React
- **CSS3**: Estilização com CSS puro
- **HTML5 Semântico**: Uso de elementos semânticos

## ✨ Funcionalidades

### Páginas Disponíveis
- ✅ **Home**: Página inicial com destaques, depoimentos e informações
- ✅ **Sobre**: Informações sobre o restaurante
- ✅ **Menu**: Cardápio do restaurante
- ✅ **Reservas**: Formulário completo de reserva de mesas
- ✅ **Confirmação**: Página de confirmação de reserva
- ✅ **Pedidos Online**: Sistema de pedidos online
- ✅ **Login**: Página de login
- ✅ **404**: Página de erro para rotas não encontradas

### Sistema de Reservas
- ✅ Seleção de data (com validação de datas passadas)
- ✅ Seleção de horário (dinâmico baseado na data)
- ✅ Número de pessoas (1 a 10)
- ✅ Tipo de ocasião (Birthday, Anniversary, etc.)
- ✅ Validação completa de todos os campos
- ✅ Confirmação de reserva

### Validações Implementadas
- ✅ Data não pode ser no passado
- ✅ Todos os campos são obrigatórios
- ✅ Número de pessoas entre 1 e 10
- ✅ Horários disponíveis baseados na data selecionada
- ✅ Mensagens de erro descritivas e visíveis

### Acessibilidade
- ✅ Atributos `aria-label` e `aria-describedby`
- ✅ Labels associados aos campos
- ✅ Navegação por teclado funcional
- ✅ Leitura coerente por screen readers
- ✅ Elementos semânticos HTML5

### Responsividade
- ✅ **Mobile**: Layout otimizado para telas pequenas
- ✅ **Tablet**: Layout adaptado para tablets
- ✅ **Desktop**: Layout completo para desktop

## 🎨 Design

O design segue as cores e identidade visual do Little Lemon:
- **Verde Primário**: #495E57
- **Amarelo Primário**: #F4CE14
- **Laranja Secundário**: #EE9972
- **Bege Secundário**: #FBDABB
- **Cinza Claro**: #EDEFEE
- **Cinza Escuro**: #333333

## 🧪 Testes

Os testes cobrem:
- ✅ Renderização de componentes
- ✅ Navegação entre páginas
- ✅ Validações do formulário de reserva
- ✅ Funcionalidades principais

## 🚀 Scripts Disponíveis

- `npm start`: Inicia o servidor de desenvolvimento
- `npm run build`: Cria build de produção
- `npm test`: Executa os testes em modo watch
- `npm run eject`: Remove a dependência do react-scripts (irreversível)

## 📝 Semântica HTML

O projeto utiliza elementos semânticos:
- `<main>`: Conteúdo principal
- `<header>`: Cabeçalho
- `<nav>`: Navegação
- `<section>`: Seções do conteúdo
- `<article>`: Artigos
- `<footer>`: Rodapé
- `<form>`: Formulários

## 📄 Licença

Este projeto está licenciado sob uma licença personalizada que **PROÍBE**:

- ❌ **Uso comercial** de qualquer tipo
- ❌ **Submissão em projetos acadêmicos**, incluindo:
  - Projetos Capstone do Coursera
  - Qualquer outro projeto de curso do Coursera
  - Trabalhos acadêmicos, teses ou avaliações
- ❌ **Plágio ou uso como trabalho próprio**
- ❌ **Uso para passar em avaliações acadêmicas**

Este projeto foi desenvolvido por **Leonardo Martins Cunha** como seu projeto Capstone pessoal. 
**É estritamente proibido** que outras pessoas usem este código para:
- Submeter como trabalho próprio
- Passar em avaliações acadêmicas
- Violar políticas de integridade acadêmica

**Permitido apenas para:**
- ✅ Estudo e aprendizado pessoal
- ✅ Referência educacional (sem submissão)
- ✅ Criação de trabalhos derivados para aprendizado pessoal

Para mais detalhes, consulte o arquivo [LICENSE](LICENSE).

**Violações desta licença podem resultar em:**
- Penalidades acadêmicas
- Banimento permanente de plataformas educacionais
- Consequências legais por violação de direitos autorais

## 👤 Autor

**Leonardo Martins Cunha**

- 🌐 Portfólio: [leonardomartins.dev](https://leonardomartins.dev)

---

**Nota**: Este projeto foi desenvolvido seguindo as melhores práticas de desenvolvimento em React, com foco em acessibilidade, responsividade e qualidade de código.
