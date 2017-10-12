export default function({ dispatch }) {
  return next => action => {
    // if action does not have payload
    // or, the payload does not have a .then prop
    if (!action.payload || !action.payload.then) {
      return next(action);
    }
    console.log('We dont have a promise', action);
  };
}
