# Teste_Feegow
Teste para desenvolvedor Jr. back-end 

# Configurando ambiente para utilização da aplicação back-end

- Fazer o pull desse repositório.
- *Instalar o composer no seu computador caso não o tenha.
- Gerar o arquivo .env com as configurações citadas no último tópico da descrição.
- Rodar o comando "php artisan key:generate".
- Criar um banco de dados chamado "test_feegow" em um banco mysql.
- Instalar o composer na aplicação com o comando "composer install"
- Fazer a migração das tabelas com o comando "php artisan migrate".
- *Rodar o comando "composer dump-autoload" para correção dos arquivos (caso haja necessidade).
- Rodar o comando "php artisan serve" para subir o servidor da aplicação back-end.

# Configurando ambiente para utilização da aplicação front-end

- *Instalar o node.js na seu computador caso não o tenha.
- Acessar a pasta front-feegow.
- instalar o npm na aplicação com o comando "npm install".
- Instalar o angular CLI com o comando "npm install -g @angular/cli" caso não o tenha.
- *Rodar o comando "ng update ou npm update" para correção dos arquivos (caso haja necessidade).
- Rodar o comando "ng serve" para subir o servidor da aplicação front-end.

# Tecnologias usadas

- PHP como linguagem backend utilizando o Laravel Framework.
- JavaScript e Typescript como linguagem frontend utilizando o Angular Framework integrado com o Bootstrap.
- Banco MySql.

# Arquivo .env

- APP_NAME=Laravel
- APP_ENV=local
- APP_KEY=
- APP_DEBUG=true
- APP_URL=
#
- LOG_CHANNEL=stack
- LOG_LEVEL=debug
#
- DB_CONNECTION=mysql
- DB_HOST=127.0.0.1
- DB_PORT=3306
- DB_DATABASE=test_feegow
- DB_USERNAME=root
- DB_PASSWORD=
#
- BROADCAST_DRIVER=log
- CACHE_DRIVER=file
- QUEUE_CONNECTION=sync
- SESSION_DRIVER=file
- SESSION_LIFETIME=120
#
- MEMCACHED_HOST=127.0.0.1
#
- REDIS_HOST=127.0.0.1
- REDIS_PASSWORD=null
- REDIS_PORT=6379
#
- MAIL_MAILER=smtp
- MAIL_HOST=mailhog
- MAIL_PORT=1025
- MAIL_USERNAME=null
- MAIL_PASSWORD=null
- MAIL_ENCRYPTION=null
- MAIL_FROM_ADDRESS=null
- MAIL_FROM_NAME="${APP_NAME}"
#
- AWS_ACCESS_KEY_ID=
- AWS_SECRET_ACCESS_KEY=
- AWS_DEFAULT_REGION=us-east-1
- AWS_BUCKET=
#
- PUSHER_APP_ID=
- PUSHER_APP_KEY=
- PUSHER_APP_SECRET=
- PUSHER_APP_CLUSTER=mt1
#
- MIX_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
- MIX_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"
