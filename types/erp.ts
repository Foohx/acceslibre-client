import { Paginate } from "./utilities";

export interface IErp {
  url: string;
  web_url: string;
  uuid: string;
  activite: {
    nom: string;
    slug: string;
  };
  nom: string;
  slug: string;
  adresse: string;
  commune: string;
  code_insee: string;
  geom: {
    type: "Point";
    coordinates: [number, number];
  } | null;
  siret: string | null;
  telephone: string | null;
  site_internet: string | null;
  contact_email: string | null;
  contact_url: string | null;
  user_type: "admin" | "gestionnaire" | "public" | "system";
  /** URL to the accessibilite endpoint */
  accessibilite: string;
  distance: string | null;
  source_id: string | null;
}

export type IErpPaginate = Paginate<IErp>;
