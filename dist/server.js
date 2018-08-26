'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _route = require('./routes/route');

var _route2 = _interopRequireDefault(_route);

var _authRoute = require('./routes/authRoute');

var _authRoute2 = _interopRequireDefault(_authRoute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use('/api/v1', _route2.default);
app.use('/auth/', _authRoute2.default);

app.set('port', process.env.PORT || 8080);

app.listen(app.get('port'), function () {
  console.log('Action happening on port ' + app.get('port'));
});

exports.default = app;
//# sourceMappingURL=server.js.map