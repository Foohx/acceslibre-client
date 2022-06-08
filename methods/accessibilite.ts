import axios from "axios";
import { IAccessibilite, IAccessibilitePaginate } from "../types";
import { API_URL } from "../utils";

interface IAccessibiliteOptions {
  /** A page number within the paginated result set. */
  page?: number;
  /** Écarter les valeurs nulles ou non-renseignées */
  // clean?: boolean
  /** Formater les données d'accessibilité pour une lecture humaine */
  // readable?: boolean;
}

/** Permer de récupérer une liste d'ERP. */
export async function getAccessibilites(query: IAccessibiliteOptions = {}) {
  try {
    const r = await axios.get<IAccessibilitePaginate>(
      `${API_URL}/accessibilite/`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        params: query,
      }
    );
    return r.data;
  } catch (error) {
    return null;
  }
}

/* Permet de récupérer les données d'un ERP spécifique, par le biais de son id */
export async function readAccessibilite(id: string) {
  try {
    const r = await axios.get<IAccessibilite>(
      `${API_URL}/accessibilite/${id}/`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return r.data;
  } catch (error) {
    return null;
  }
}
