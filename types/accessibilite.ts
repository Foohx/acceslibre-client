import { Paginate } from "./utilities";

export interface IAccessibilite {
  url: string;
  erp: string;
  labels: {
    labels: Array<"autre" | "dpt" | "mobalib" | "th"> | null;
    labels_familles_handicap: Array<
      "auditif" | "mental" | "moteur" | "visuel"
    > | null;
    labels_autre: string | null;
  };

  transport: {
    transport_station_presence: boolean | null;
    transport_information: string | null;
  };

  stationnement: {
    stationnement_presence: boolean | null;
    stationnement_pmr: boolean | null;
    stationnement_ext_presence: boolean | null;
    stationnement_ext_pmr: boolean | null;
  };

  cheminement_ext: {
    cheminement_ext_presence: boolean | null;
    cheminement_ext_plain_pied: boolean | null;
    cheminement_ext_terrain_stable: boolean | null;
    cheminement_ext_nombre_marches: number | null;
    cheminement_ext_sens_marches: "montant" | "descendant" | null;
    cheminement_ext_reperage_marches: boolean | null;
    cheminement_ext_main_courante: boolean | null;
    cheminement_ext_rampe: "aucune" | "fixe" | "amovible" | null;
    cheminement_ext_ascenseur: boolean | null;
    cheminement_ext_pente_presence: boolean | null;
    cheminement_ext_pente_degre_difficulte: "légère" | "importante" | null;
    cheminement_ext_pente_longueur: "courte" | "moyenne" | "longue" | null;
    cheminement_ext_devers: "aucun" | "léger" | "important";
    cheminement_ext_bande_guidage: boolean | null;
    cheminement_ext_retrecissement: boolean | null;
  };

  entree: {
    entree_reperage: boolean | null;
    entree_porte_presence: boolean | null;
    entree_porte_manoeuvre:
      | "battante"
      | "coulissante"
      | "tourniquet"
      | "tambour"
      | null;
    entree_porte_type: "manuelle" | "automatique" | null;
    entree_vitree: boolean | null;
    entree_vitree_vitrophanie: boolean | null;
    entree_plain_pied: boolean | null;
    entree_marches: number | null;
    entree_marches_sens: "montant" | "descendant" | null;
    entree_marches_reperage: boolean | null;
    entree_marches_main_courante: boolean | null;
    entree_marches_rampe: "aucune" | "fixe" | "amovible" | null;
    entree_balise_sonore: boolean | null;
    entree_dispositif_appel: boolean | null;
    entree_dispositif_appel_type: Array<
      "bouton" | "interphone" | "visiophone"
    > | null;
    entree_aide_humaine: boolean | null;
    entree_ascenseur: boolean | null;
    entree_largeur_mini: number | null;
    entree_pmr: boolean | null;
    entree_pmr_informations: string | null;
  };

  accueil: {
    accueil_visibilite: boolean | null;
    accueil_personnels: "aucun" | "formés" | "non-formés" | null;
    accueil_equipements_malentendants_presence: boolean | null;
    accueil_equipements_malentendants: Array<
      "bim" | "bmp" | "lsf" | "lpc" | "sts" | "autres"
    > | null;
    accueil_cheminement_plain_pied: boolean | null;
    accueil_cheminement_nombre_marches: number | null;
    accueil_cheminement_sens_marches: "montant" | "descendant";
    accueil_cheminement_reperage_marches: boolean | null;
    accueil_cheminement_main_courante: boolean | null;
    accueil_cheminement_rampe: "aucune" | "fixe" | "amovible";
    accueil_cheminement_ascenseur: boolean | null;
    accueil_retrecissement: boolean | null;
  };

  sanitaires: {
    sanitaires_presence: boolean | null;
    sanitaires_adaptes: boolean | null;
  };

  registre: {
    registre_url: string | null;
  };

  conformite: {
    conformite: boolean | null;
  };

  commentaire: string | null;
}

export type IAccessibilitePaginate = Paginate<IAccessibilite>;
