import { FETCH_CLASSES } from 'store/constants';

const classReducer = (state = [], action) => {
  const { payload, type } = action;
  switch (type) {
    case FETCH_CLASSES:
      return [...payload];
    default:
      return state;
  }
};

export default classReducer;
