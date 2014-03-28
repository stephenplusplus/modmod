var builtinLibs = require('repl')._builtinLibs;

module.exports = function () {

  return [].slice.call(arguments).reduce(function (acc, key) {
    var path = builtinLibs.indexOf(key) > -1 ? key : process.cwd() + '/node_modules/' + key;

    acc[key] = require(path);

    return acc;
  }, {});
};
