FROM node:16.19.0-slim

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de configuração
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia todo o código fonte
COPY . .

# Expor a porta
EXPOSE 3000

# Comando de inicialização da aplicação
CMD ["npm", "run", "dev"]

