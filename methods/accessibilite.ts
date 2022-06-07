import axios from "axios";
import { IAccessibilite, IAccessibilitePaginate } from "../types";
import { BASE_URL } from "../utils";

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
  const r = await axios.get<IAccessibilitePaginate>(
    `${BASE_URL}/accessibilite/`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      params: query,
    }
  );

  return r.data;
}

/* Permet de récupérer les données d'un ERP spécifique, par le biais de son id */
export async function readAccessibilite(id: string) {
  const r = await axios.get<IAccessibilite>(
    `${BASE_URL}/accessibilite/${id}/`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return r.data;
}
