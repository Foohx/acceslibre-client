import { Paginate } from "../utils";

export interface IActivite {
  nom: string;
  slug: string;
  count: number;
}

export type IActivitePaginate = Paginate<IActivite>;
