const webpack              = require('webpack')
    , webpackDevMiddleware = require('webpack-dev-middleware')
    , webpackHotMiddleware = require('webpack-hot-middleware')
    , config               = require('./webpack.config')
    , app                  = new (require('express'))()
    , compiler             = webpack(config)
    , port                 = 3000

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.get('/', (req, res) => { res.sendFile(__dirname + '/index.html') })

app.listen(port, error => {
  error
  ? console.error(error)
  : console.info('Listening on port', port)
})
