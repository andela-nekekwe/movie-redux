import Express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from './webpack.config';

/* eslint-disable no-console */
const app = Express();
const port = 4000;
const compiler = webpack(config);

app.set('port', port);


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

console.log('we got here')

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './server/public/index.html'));
});



app.listen(port, (err) => {
  if (err) {
  } else {
    open(`http://localhost:${port}`);
  }
});


module.exports = app;
