import React, { Component } from 'react'
import renderer from 'react-test-renderer';
import Store from '../lib/store'
import connectToStore from '../lib/connect-to-store'
// jest.mock('react-dom')


const appStore = Store({
  name: 'iflux'
})

appStore.init = function () {
  appStore.cursor().set('name', 'iflux-native');
};

class HelloApp extends Component {
  componentDidMount() {
    appStore.init()
  }

  render() {
    const {store} = this.props;

    return (
      <div>{store.get('name')}</div>
    )
  }
}

const TestApp = connectToStore(appStore)(HelloApp);

describe('connectToStore test suite', () =>
  it('it initial render', () => {
    const tree = renderer.create(<TestApp />).toJSON()
    expect(tree).toMatchSnapshot()
  })
)