import axios from "axios";
import { IActivite, IActivitePaginate } from "../types";
import { API_URL } from "../utils";

interface IActiviteOptions {
  /** A page number within the paginated result set. */
  page?: number;
  /** Nom de la commune (ex. Clichy) */
  commune?: string;
}

/** Permer de récupérer une liste d'activités. */
export async function getActivites(query: IActiviteOptions = {}) {
  try {
    const r = await axios.get<IActivitePaginate>(`${API_URL}/activites/`, {
      headers: {
        "Content-Type": "application/json",
      },
      params: query,
    });
    return r.data;
  } catch (error) {
    return null;
  }
}

/* Permet de récupérer les données d'une activité spécifique, par le biais de son slug */
export async function readActivite(slug: string) {
  try {
    const r = await axios.get<IActivite>(`${API_URL}/activites/${slug}/`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return r.data;
  } catch (error) {
    return null;
  }
}
