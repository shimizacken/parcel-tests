export type ImportMap = {
  [key: string]: () => Promise<any>;
};

export type WithDynamicImportsProps = {
  [key: string]: any;
};
