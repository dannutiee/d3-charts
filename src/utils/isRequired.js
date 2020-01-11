export const isRequired = param => {
  throw new Error(`param ${param} is required`);
};
