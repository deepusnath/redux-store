export const initialState = {

  loaded:false;
  loading:false;
  date:[]
};

export function reducer(
  state = initialState,
  action:{type:string, payload: any}){

  return state;
};
