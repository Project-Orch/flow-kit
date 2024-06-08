export const getMainFolder = (path: string) => {
  const mainfolder = path.split("/").pop();

  return mainfolder;
};
