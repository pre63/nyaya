const Id = a => ({
  chain: f => f(a),
  map: f => Id(f(a)),
  fold: f => f(a)
})

module.exports = Id
