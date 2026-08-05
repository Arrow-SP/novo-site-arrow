# Site Arrow Strategic Partners

Site institucional estático (HTML/CSS/JS puro — sem build, sem dependências) pronto para publicar no GitHub Pages.

## Estrutura de pastas

```
novo-site-arrow/
├── index.html              → Home
├── empresas.html           → Página Empresas
├── candidatos.html         → Página Candidatos
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/
│   ├── logo.png             → logo usada no cabeçalho
│   ├── favicon.ico
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── apple-touch-icon.png
│   ├── og-image.jpg         → imagem de compartilhamento (WhatsApp/LinkedIn/etc.)
│   └── img/
│       ├── hero-pattern.svg     → ilustração de fundo da Home
│       ├── about-network.svg    → ilustração da seção "Quem somos"
│       ├── sector-tecnologia.svg
│       ├── sector-financas.svg
│       ├── sector-industria.svg
│       └── sector-varejo.svg
├── sitemap.xml
├── robots.txt
├── CNAME                    → aponta o domínio próprio para o GitHub Pages
└── README.md
```

## Sobre as imagens

As ilustrações em `assets/img/` foram criadas do zero em vetor (SVG), na paleta da marca — não são fotos, são gráficos abstratos autorais (sem risco de direitos autorais e leves para carregar). Se no futuro você quiser trocar por fotos reais (equipe, escritório, banco de imagens licenciado):

1. Coloque o arquivo novo dentro de `assets/img/` (ex: `sector-tecnologia.jpg`)
2. No HTML da página correspondente, troque o `src="assets/img/sector-tecnologia.svg"` pelo novo nome de arquivo
3. Recomendo fotos em proporção **4:3**, mínimo 800×600px, formato `.jpg` otimizado (até ~300kb) para manter o site rápido

## Como publicar no GitHub Pages

1. Crie o repositório **novo-site-arrow** na sua conta do GitHub (pode ser público)
2. Envie todos os arquivos e pastas deste projeto para a raiz do repositório (mantendo a estrutura acima — não coloque tudo dentro de uma subpasta)
3. No repositório, vá em **Settings → Pages**
4. Em **Source**, selecione a branch `main` e a pasta `/ (root)`
5. Em **Custom domain**, digite `www.arrowsp.com.br` e salve (o arquivo `CNAME` já está no projeto, mas o GitHub confirma o registro nessa tela)
6. No painel do seu domínio (onde o `arrowsp.com.br` está registrado), configure:
   - Um registro **CNAME** para `www` apontando para `SEU-USUARIO.github.io`
   - Registros **A** para o domínio raiz (`arrowsp.com.br` sem www) apontando para os IPs do GitHub Pages:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
7. Marque **Enforce HTTPS** assim que o certificado ficar disponível (pode levar até 24h)

Depois disso, `https://www.arrowsp.com.br` já serve o site direto do repositório — qualquer novo commit atualiza o site automaticamente.

## Formulário de candidatos (candidatos.html)

O GitHub Pages não tem backend, então o envio do formulário depende de um serviço externo gratuito:

1. Crie uma conta grátis em [formspree.io](https://formspree.io) (até 50 envios/mês no plano free)
2. Crie um novo formulário e copie o endpoint (algo como `https://formspree.io/f/xxxxxxx`)
3. Abra `js/main.js` e cole o endpoint na linha:
   ```js
   var FORMSPREE_ENDPOINT = ''; // cole aqui
   ```
4. Pronto — os cadastros passam a cair direto no seu e-mail

**Enquanto isso não for configurado**, o formulário funciona no modo alternativo: ao clicar em "Enviar cadastro", abre o e-mail do candidato já preenchido, endereçado para `consultoria@arrowsp.com.br`.

## Antes de publicar — pendências para revisar

- [ ] Configurar o `FORMSPREE_ENDPOINT` em `js/main.js` (ou manter o modo e-mail)
- [ ] Confirmar o link do LinkedIn em todas as páginas (atualmente `https://www.linkedin.com/company/arrow-strategic-partners/`)
- [ ] Revisar os textos de "Vagas em destaque" (`candidatos.html`) quando houver vagas reais publicadas
- [ ] Trocar as ilustrações de `assets/img/` por fotografia real, se/quando desejar
