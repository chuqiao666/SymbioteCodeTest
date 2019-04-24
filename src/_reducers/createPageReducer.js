export function createPageReducer (state = [], action) {
    switch(action.type) {
      case 'CREATE_PAGE':
        return state.concat([action.data]);
      default:
        return state;
    }
  }
