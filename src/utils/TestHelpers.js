import React from 'react';
import TestUtils from 'react-addons-test-utils';


export function genRenderers(opts) {
  let {componentClass, defaultProps} = opts;

  function shallowRender (component) {
    const renderer = TestUtils.createRenderer();
    renderer.render(component);
    return renderer.getRenderOutput();
  }

  function renderWithProps (props = {}) {
    let mergedProps = Object.assign({}, defaultProps, props);
    props.dispatch |= function () {};
    return TestUtils.renderIntoDocument(
      React.createElement(componentClass, mergedProps));
  }

  function shallowWithProps (props = {}) {
    let mergedProps = Object.assign({}, defaultProps, props);
    return shallowRender(React.createElement(componentClass, mergedProps));
  }

  return { 
    renderWithProps, 
    shallowRender, 
    shallowWithProps,
  };

}

export default {
  genRenderers,
};
