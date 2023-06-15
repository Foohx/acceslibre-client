import { Paginate } from "../utils";
import { IAccessibility } from "./accessibility";

export interface IEstablishment {
  url: string;
  web_url: string;
  uuid: string;
  activite: {
    nom: string;
    slug: string;
  };
  /** Name of the establishment or sign */
  nom: string;
  slug: string;
  adresse: string;
  commune: string;
  code_insee: string | null;
  code_postal: string;
  geom: {
    type: string;
    coordinates: [number, number];
  } | null;
  /** SIRET number if the establishment is a company */
  siret: string | null;
  /** Phone number of the establishment */
  telephone: string | null;
  /** Website of the establishment */
  site_internet: string | null;
  /** Email address to contact the establishment */
  contact_email: string | null;
  /** Hyperlink allowing to contact the establishment (form, chatbot, etc..) */
  contact_url: string | null;
  user_type: "admin" | "gestionnaire" | "public" | "system";
  accessibilite: IAccessibility;
  distance: string | null;
  /** Establishment identifier in the initial data source */
  source_id: string | null;
  /** Establishment identifier in the Service Public database */
  asp_id: string | null;
  created_at: string;
  updated_at: string;
}

export type IPaginateEstablishments = Paginate<IEstablishment>;
