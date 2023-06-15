import axios from "axios";
import { API_URL } from "../utils";
import { IActivity, IEstablishment, IPaginateActivities } from "../types";

interface IActiviteOptions {
  /** A page number within the paginated result set. */
  page?: number;
  /** Name of the town (ex. Bordeaux) */
  commune?: string;
}

/** Lists the activities of establishments. */
export async function getActivities(key: string, query: IActiviteOptions = {}) {
  try {
    const r = await axios.get<IPaginateActivities>(`${API_URL}/activites/`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Api-Key ${key}`,
      },
      params: query,
    });
    return r.data;
  } catch (error) {
    return null;
  }
}

/** List the activities of an establishments. */
export async function readActivity(key: string, slug: IActivity["slug"]) {
  try {
    const r = await axios.get<IActivity>(`${API_URL}/activites/${slug}/`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Api-Key ${key}`,
      },
    });
    return r.data;
  } catch (error) {
    return null;
  }
}
