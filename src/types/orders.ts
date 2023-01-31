export type Order = any[];

export type OrderHook = Order | Record<string, any>;

export enum OrderStatus {
  Cancelled = 'cancelled',
  InProgress = 'in_progress',
  Placed = 'placed',
  Shipped = 'shipped'
}

export enum ProductName {
  Bow = 'bow',
  Bowtie = 'bowtie',
  FishNecklace = 'fish necklace',
  FishboneNecklace = 'fishbone necklace',
  IHeartMilkBrooch = 'i heart milk brooch',
  MouseEarrings = 'mouse earrings'
}

export interface Fields {
  orderId?: number | string;
  orderPlaced: Date;
  productName?: ProductName;
  price: number;
  firstName?: string;
  lastName?: string;
  address?: string;
  email?: string;
  orderStatus?: OrderStatus;
}

export type OrderData = Fields[];
