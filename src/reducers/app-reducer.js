import { fromJS } from 'immutable';

const initialState = fromJS({
  isHomepageToolsListOpen: false
});

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case 'SET_IS_HOMEPAGE_TOOL_LIST_OPEN': {
      return state.set('isHomepageToolsListOpen', action.isHomepageToolsListOpen)
    }
    default:
      return state;
  }
};