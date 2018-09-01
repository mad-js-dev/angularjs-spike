import { Product } from "./shared/models/product";

export class ProductCategory {
  id: number;
  name: string;
  products: Product[];
}