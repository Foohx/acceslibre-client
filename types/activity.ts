import { Paginate } from "../utils";

export interface IActivity {
  /** Activity name */
  nom: string;
  /** URL identifier (slug) */
  slug: string;
  count: number;
}

export type IPaginateActivities = Paginate<IActivity>;
