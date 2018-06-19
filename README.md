# WetherNow
Desafio Frontend [Contaazul](http://www.contaazul.com.br/)


## Especificações para o desenvolvimento
- O desafio foi realizado de acordo com as **intruções** deste [documento](http://ajudare.com/images/desafiofrontendcontaazul.pdf)
- O layout para **desktop** baseado neste [documento](https://marvelapp.com/13gd240g/screen/38477114)
- O layout para **mobile** baseado neste [documento](https://marvelapp.com/13gd240g/screen/38477115)
- As **cores** utilizadas de acordo com este [documento](https://marvelapp.com/13gd240g/screen/38477116)
- Utilizei a **API** da [OpenWeatherMap](https://openweathermap.org/api)


## O que usei para desenvolver o projeto?
- Utilizei o boilerplate [**vue-webpack-boilerplate**](https://github.com/vuejs-templates/webpack#vue-webpack-boilerplate)
- Framework de Javascript utilizei [**Vue**](https://vuejs.org/)
- Como bundle utilizei [**Webpack**](https://webpack.js.org/)
- Para testes utilizei: 
	- [**Mocha**](https://mochajs.org/)
	- [**Chai**](http://www.chaijs.com/)
	- [**Karma**](https://karma-runner.github.io/2.0/index.html)
	- [**Sinon**](http://sinonjs.org/)
	- [**Puppeteer**](https://github.com/GoogleChrome/puppeteer)

## Instruçoes para rodar o projeto
> Antes de rodar o projeto você precisa ter Node.js instalado. Caso ainda não tenha Node.js instalado [**clique aqui**](https://nodejs.org/en/) e siga as intruções de instalação.

> Após instalar o Node.js siga os passos abaixo.

1. Faça o clone ou download deste projeto
2. Vá até a pasta onde você clonou ou descompactou o projeto pelo **CMD** *(windows)* ou **Terminal** *(MAC)*
3. Digite o comando abaixo para instalar as dependências do projeto
    npm install

###Comandos
- **Para rodar o projeto em Dev** digite:
		npm run dev
Após isto será possível ver o projeto rodando no endereço:  [http://localhost:8080/](http://localhost:8080/)

- **Para rodar o [ESLint](https://eslint.org/)** digite:
		npm run lint

- **Para rodar teste unitário** "--single-run", digite:
		npm run test

- **Para rodar teste unitário** "ChromeHeadless", digite:
		npm run unit

- **Para gerar build** do projeto, digite:
		npm run build
Os arquivos gerados pelo Build estarão na pasta **"/dist"** na raiz do projeto
Vale lembrar que os arquivos gerados pelo build não funcionam localmente, precisam ser abertos por um WebServer, mesmo que seja um server local.

##Observações gerais
1. Os arquivos de layout do **MarvelApp** não eram editáveis, sendo assim não consegui pegar **exatamente** o tamanho das fonts, espaçamentos, etc. Sendo assim tentei aproximar ** *no olho* ** o máximo possível do layout :)

2. No [documento](http://ajudare.com/images/desafiofrontendcontaazul.pdf) de instrução para realizar o desafio, fala sobre as cores das temperaturas:
> - Temperaturas igual ou **abaixo de 5** graus devem ser exibidas em azul
> - Temperaturas **acima de 6 graus e igual ou abaixo de 25** devem ser exibidas
em laranja
> - Temperaturas **acima de 26 graus** devem ser exibidas em vermelho

#####De acordo com estas intruções as temperaturas de **6 e 26 graus nao tem cor!**
- Estou considerando a temperatura de **6 graus como cor laranja**
- Estou considerando a temperatura de **26 graus como cor vemelho**

3. Para facilitar o teste, dexei a minha AppId da API do OpenWeatherMap hardecoded no projeto, caso queiram mudar o AppID basta alterar o valor de **openWeatherID** no arquivo **/src/components/card/Card.vue**
