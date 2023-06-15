import axios from "axios";
import { API_URL } from "../utils";
import { IAccessibility, IPaginateAccessibilities } from "../types";

interface IAccessibilityOptions {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
}

/** Lists the accessibility criteria for establishments. */
export async function getAccessibilites(
  key: string,
  query: IAccessibilityOptions = {}
) {
  try {
    const r = await axios.get<IPaginateAccessibilities>(
      `${API_URL}/accessibilite/`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Api-Key ${key}`,
        },
        params: query,
      }
    );
    return r.data;
  } catch (error) {}
}

/* Permet de récupérer les données d'un ERP spécifique, par le biais de son id */
export async function readAccessibility(key: string, id: string) {
  try {
    const r = await axios.get<IAccessibility>(
      `${API_URL}/accessibilite/${id}/`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Api-Key ${key}`,
        },
      }
    );
    return r.data;
  } catch (error) {
    return null;
  }
}
