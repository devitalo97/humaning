# Humaning - Website Institucional

Um website institucional moderno e responsivo para a Humaning, empresa especializada em análise de perfil comportamental e transformação de equipes através do programa "Entender para Atender".

## 🚀 Tecnologias Utilizadas

- **Next.js 16** - Framework React com App Router
- **TypeScript** - Tipagem estática para melhor desenvolvimento
- **Tailwind CSS v4** - Framework CSS para estilização moderna
- **ShadCN/ui** - Biblioteca de componentes UI acessíveis e personalizáveis
- **Lucide React** - Ícones modernos e consistentes

## ✨ Funcionalidades

### 🏠 Página Inicial
- Hero section com CTA principal
- Métricas de impacto (4.400+ pessoas impactadas)
- Visão geral dos serviços
- Destaque do programa "Entender para Atender"
- Depoimentos de clientes
- Call-to-action estratégicos

### 👥 Sobre
- Missão, visão e valores da empresa
- Perfil do fundador Luiz Ricardo Pereira de Souza
- Metodologia e tecnologia (CIS Assessment)
- Números de impacto
- CTA para contato

### 🎯 Programa
- Descrição completa do programa "Entender para Atender"
- Estrutura em 3 módulos detalhados
- Benefícios e entregáveis
- Metodologia aplicada
- Depoimentos e casos de sucesso
- FAQ completo

### 📚 Treinamentos
- Portfólio de projetos realizados
- Sistema de accordion para detalhamento
- Status dos projetos (finalizado, em andamento, agendado)
- Localização e datas
- Tipos de treinamentos oferecidos

### 📸 Galeria
- Grid responsivo de fotos e vídeos
- Sistema de filtros por categoria
- Videos em destaque
- Integração com Instagram
- Funcionalidades de download e compartilhamento

### 📞 Contato
- Formulário com validação completa
- Múltiplos canais de contato
- Informações de localização e horário
- Formas alternativas de contato
- FAQ sobre contato

## 🎨 Design e UX

- **Cores**: Base azul para CTAs, gradientes roxo-rosé para elementos decorativos
- **Tipografia**: Inter como fonte principal
- **Responsivo**: Mobile-first design para todos os dispositivos
- **Acessibilidade**: WCAG 2.1 compliance
- **Performance**: Otimizado para carregamento rápido
- **Animações**: Transições suaves e micro-interações

## 🛠️ Estrutura do Projeto

```
humaning/
├── app/                    # Páginas Next.js (App Router)
│   ├── contato/           # Página de contato
│   ├── galeria/           # Galeria de fotos e vídeos
│   ├── programa/          # Detalhes do programa
│   ├── sobre/             # Sobre a empresa
│   ├── treinamentos/      # Portfólio de treinamentos
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página inicial
├── components/            # Componentes React
│   ├── ui/               # Componentes ShadCN
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── textarea.tsx
│   │   └── accordion.tsx
│   ├── header.tsx        # Cabeçalho com navegação
│   └── footer.tsx        # Rodapé com informações
├── constants/            # Constantes e dados
│   └── index.ts          # Dados da empresa
├── lib/                  # Utilitários
│   └── utils.ts          # Funções helper
├── types/                # Tipos TypeScript
│   └── index.ts          # Definições de tipos
└── public/               # Assets estáticos
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone <repository-url>
cd humaning
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no navegador

### Build para Produção

```bash
npm run build
npm start
```

## 📊 SEO e Metadata

- **Open Graph**: Configurado para compartilhamento em redes sociais
- **Twitter Cards**: Otimizado para compartilhamento no Twitter
- **Meta tags**: Palavras-chave relevantes para behavioral analysis
- **Sitemap**: Configurado para melhor indexação
- **Robots.txt**: Configurado para SEO

## 🔧 Configuração

### Variáveis de Ambiente

Crie um arquivo `.env.local` com as seguintes variáveis:

```env
NEXT_PUBLIC_SITE_URL=https://seusite.com.br
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_ANALYTICS_ID=GA-XXXXXXXX
```

### Customização de Brand

As cores e elementos da marca podem ser configurados em:
- `app/globals.css` - Variáveis CSS customizadas
- `constants/index.ts` - Informações da empresa
- `components/header.tsx` - Logo e navegação

## 🚀 Deploy

### Vercel (Recomendado)

1. Conecte o repositório ao Vercel
2. Configure as variáveis de ambiente
3. Deploy automático a cada push na main

### Outras Plataformas

```bash
npm run build
# A pasta `.next` contém os arquivos para deploy
```

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/amazing-feature`)
3. Commit suas mudanças (`git commit -m 'Add amazing feature'`)
4. Push para a branch (`git push origin feature/amazing-feature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

- **Website**: [humaning.com.br](https://humaning.com.br)
- **E-mail**: contato@humaning.com.br
- **Telefone**: (27) 99999-9999
- **LinkedIn**: [LinkedIn Profile](https://linkedin.com/in/luiz-ricardo-pereira-de-souza)
- **Instagram**: [@humaning](https://instagram.com/humaning)

---

## 🚀 Funcionalidades Futuras

- [ ] Sistema de blog para thought leadership
- [ ] Área de cliente com login
- [ ] Integração com CRM
- [ ] Sistema de agendamento online
- [ ] Versão em inglês
- [ ] PWA functionality
- [ ] Animações avançadas
- [ ] Integração com Zapier/HubSpot

---

**Desenvolvido com ❤️ para a Humaning - Transformando Pessoas e Empresas**