const Store = require('../lib/store')
const Immutable = require('immutable')


const store = Store({
  name: 'iflux-native'
})

store.onStoreChange((nextState) => {
  console.log(nextState)
});


//不会触发onStoreChange
store.cursor().set('name', 'iflux-native') 


//会触发onStoreChange
store.cursor().set('name', 'iflux');