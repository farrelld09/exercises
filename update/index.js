function update(state, commands) {
  var nextState = new Set(state)
  nextState.a.c = commands.a.c.$set
  return nextState
}

module.exports = update

  // return Object.assign({}, state, {a: {b: 22, c: commands.a.c.$set}});
