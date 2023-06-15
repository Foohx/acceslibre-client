import axios from "axios";
import { API_URL } from "../utils";
import { IEstablishment, IPaginateEstablishments } from "../types";

interface IErpsOptions {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  /** Termes de recherche */
  q?: string;
  /** Nom de la commune (ex. Clichy) */
  commune?: string;
  /** Code postal de la commune (ex. 92120) */
  code_postal?: string;
  /** Code INSEE de la commune (ex. 59359) */
  code_insee?: string;
  /** Identifiant d'URL de l'activité (slug) */
  activite?: string;
  /** Numéro SIRET de l'établissement */
  siret?: string;
  /** Nom du fournisseur tier */
  source?: string;
  /** ID unique fourni par un fournisseur tier */
  source_id?: string;
  asp_id?: string;
  /** Identifiant unique OpenData */
  uuid?: string;
  /** Biais de localisation géographique, au format `latitude,longitude` (par ex. `43.22,3.83`) */
  around?: string;
}

/** List of establishments. */
export async function getEstablishments(key: string, query: IErpsOptions = {}) {
  try {
    const r = await axios.get<IPaginateEstablishments>(`${API_URL}/erps/`, {
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

/* Retrieve data from a specific establishment. */
export async function readEstablishment(key: string, slug: string) {
  try {
    const r = await axios.get<IEstablishment>(`${API_URL}/erps/${slug}/`, {
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
