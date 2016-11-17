import { LOGIN } from '../../constants';


const initialState = [
  {
    username: null,
    role: null,
  },
];

export default function login(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return [...state, {
        username: action.username,
      }];
    default:
      return state;
  }
}
