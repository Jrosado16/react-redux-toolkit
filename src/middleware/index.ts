export const logger = (store:any) => (next:any) => (action:any) => {
  next(action);
}

export const featuring = (store:any) => (next:any) => (actionInfo:any) => {
  const featured = [{ name: 'eddie' }, ...actionInfo.action.payload];
  const updatedActionInfo = { ...actionInfo, action: { ...actionInfo.action, payload: featured}};
  next(updatedActionInfo);
}
