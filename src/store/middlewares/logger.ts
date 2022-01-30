export const logger: any = (api: any) => (next: any) => (action: any) => {
  console.log('will dispatch', action);
  const returnValue = next(action);
  console.log('state after dispatch', api.getState());
  return returnValue;
};

export default logger;
