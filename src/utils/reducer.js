export const INPUTREDUCER_TYPE = { CHANGE: "CHANGE", RESET: "RESET" };

export function inputReducer(state, action) {
  switch (action.type) {
    case "CHANGE":
      return (state = { ...state, [action.name]: action.value });
    case "RESET":
      let object = { ...state };
      const objectkeys = Object.keys(object);
      for (let i = 0; i < objectkeys.length; i++) {
        object[objectkeys[i]] = "";
      }
      return object;
    default:
      return state;
  }
}
