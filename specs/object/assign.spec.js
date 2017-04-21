import assert from 'assert'
import Id from '../id'
import assign from '../../package/object/assign'

describe('A assign', () =>
  it('should combine objects', () =>
    Id([{ b: 1 }, { a: 1 }])
      .map(a => a.reduce(assign))
      .map(a => a.a === 1 && a.b === 1)
      .map(assert)))
