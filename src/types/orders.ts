export interface Order {
  thing: string;
}

export type OrderHook = Order | Record<string, any>;
