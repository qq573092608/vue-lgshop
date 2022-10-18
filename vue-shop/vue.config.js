const { defineConfig } = require('@vue/cli-service')
const path = require('path')

function resolve(dir){
  return path.join(__dirname,dir)
}

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack:(config)=>{
    config.resolve.alias
    .set('@',resolve('src'))
    .set('style',resolve('src/assets/scss'))
  },
  css:{
    loaderOptions:{
      sass:{
        additionalData:`@import "~@/assets/scss/_variable.scss";`
      }
    }
  }
})
