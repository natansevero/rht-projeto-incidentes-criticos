const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');

module.exports = app => {
    app.set('port', process.env.PORT || 3000);

    app.use(cors({
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
    }));
    app.use(morgan('dev'))
    app.use(helmet())
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
}