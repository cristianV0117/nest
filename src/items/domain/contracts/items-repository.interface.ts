import { Item } from "../Item";

export interface ItemsRepositoryInterface {
    index(): Promise<Item>
}