module.exports = {
  presets: [
    '@babel/preset-env',      //Converte funcionalidades baseados em que o node não entende
    '@babel/preset-react'     //adicionar funcionalidade do react nessa conversão - html no JS
  ],
  pluguins: [
    '@babel/plugin-transform-runtime'
  ]
};