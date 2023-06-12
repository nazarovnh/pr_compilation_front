import { createContext, useContext } from 'react';
export type GlobalContent = {
  title: string;
  setTitle: (title: string) => void;
};
export const GlobalContext = createContext<GlobalContent>({
  title: '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setTitle: () => {},
});
export const useGlobalContext = () => useContext(GlobalContext);
