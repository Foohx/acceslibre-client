import axios from "axios";
import { IErp, IErpPaginate } from "../types";
import { API_URL } from "../utils";

interface IErpsOptions {
  /** A page number within the paginated result set. */
  page?: number;
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
  /** Identifiant unique OpenData */
  uuid?: string;
  /** Biais de localisation géographique, au format `latitude,longitude` (par ex. `43.22,3.83`) */
  around?: string;
}

/** Permer de récupérer une liste d'ERP. */
export async function getErps(query: IErpsOptions = {}) {
  try {
    const r = await axios.get<IErpPaginate>(`${API_URL}/erps/`, {
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

/* Permet de récupérer les données d'un ERP spécifique, par le biais de son slug */
export async function readErp(slug: string) {
  try {
    const r = await axios.get<IErp>(`${API_URL}/erps/${slug}/`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return r.data;
  } catch (error) {
    return null;
  }
}
