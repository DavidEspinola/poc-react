const API_USERS_REQUEST = 'API_USERS_REQUEST';
const API_USERS_SUCCESS = 'API_USERS_SUCCESS';
const API_USERS_FAILURE = 'API_USERS_FAILURE';

const initialState = {
  fetching: false,
  users: [],
  error: null,
  page: 1,
  totalPages: 1,
  sortBy: null,
  order: null
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case API_USERS_REQUEST:
      return { ...state, fetching: true, error: null };
    case API_USERS_SUCCESS:
      return { ...state, fetching: false, ...action.payload };
    case API_USERS_FAILURE:
      console.error(action.error);
      return { ...state, fetching: false, users: [], error: action.error };
    default:
      return state;
  }
}