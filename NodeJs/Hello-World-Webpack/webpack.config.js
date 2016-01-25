var webpack = require('webpack'),
    path = require('path');

module.exports = {
    //Modo debug para facilitar nosso trabalho
    debug: true,
    //Define o arquivo de entrada da aplicação (main())
    entry: {
        main: './src/app.ts'
    },
    //Cria arquivos source-map para debug
    devtool: 'source-map',
    //Indica os arquivos que serão resolvidos como módulo
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    //Arquivo de saída (bundle.js) na pasta dist
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        //Define os loaders que serão utilizados, neste caso o ts-load (TypeScript)
        loaders: [
            { test: /\.ts?$/, loader: 'ts-loader' }
        ]
    }
};