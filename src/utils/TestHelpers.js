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

export function genFixtureGens () {
  let fixtureGens = {

    genQuizItem: function (opts) {
      let key = opts.key;
      if (typeof key === 'undefined') {
        key = '<key>';
      }

      let quizItem = {
        question: `question-${key}`,
        answer: {
          key,
          text: `text-${key}`,
          imgSrc: `img-${key}`,
        },
        options: [
          `option1-${key}`,
          `option2-${key}`,
        ],
      }

      if (opts.withCorrectSubmission) {
        quizItem.submission = quizItem.answer.key;
      }
      else if (opts.withIncorrectSubmission) {
        quizItem.submission = 'incorrect';
      }

      return quizItem;
    },

  };

  return fixtureGens;

}

export function genFixtures() {
  let fixtures = {};

  let fixtureGens = genFixtureGens();

  fixtures.quizItems = [];

  for (let i = 0; i < 3; i++) {
    let quizItem = fixtureGens.genQuizItem({ key: i });
    fixtures.quizItems.push(quizItem);
  }

  return fixtures;
}

export default {
  genFixtures,
  genFixtureGens,
  genRenderers,
};
