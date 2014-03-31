module.exports = ->
  builtinLibs = require("repl")._builtinLibs
  [].slice.call(arguments_).reduce ((acc, key) ->
    path = (if builtinLibs.indexOf(key) > -1 then key else process.cwd() + "/node_modules/" + key)
    acc[key] = require(path)
    acc
  ), {}
