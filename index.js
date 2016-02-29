import connectToStore from './lib/connect-to-store';

module.exports = {
  connectToStore,
  Store: require('./lib/store'),
  Validator: require('./lib/validator'),
  msg: require('./lib/msg'),
  mixins: {
    StoreMixin: require('./lib/mixins/store-mixin')
  }
};
