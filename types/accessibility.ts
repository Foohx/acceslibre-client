import { Paginate } from "../utils";

export interface IAccessibility {
  url: string;
  erp: string;
  transport: {
    transport_station_presence: any;
    transport_information: string | null;
    stationnement_presence: any;
    stationnement_pmr: any;
    stationnement_ext_presence: any;
    stationnement_ext_pmr: any;
  };
  cheminement_ext: {
    cheminement_ext_presence: any;
    cheminement_ext_plain_pied: any;
    cheminement_ext_terrain_stable: any;
    cheminement_ext_nombre_marches: number | null;
    cheminement_ext_sens_marches: any;
    cheminement_ext_reperage_marches: any;
    cheminement_ext_main_courante: any;
    cheminement_ext_rampe: any;
    cheminement_ext_ascenseur: any;
    cheminement_ext_pente_presence: any;
    cheminement_ext_pente_degre_difficulte: any;
    cheminement_ext_pente_longueur: any;
    cheminement_ext_devers: any;
    cheminement_ext_bande_guidage: any;
    cheminement_ext_retrecissement: any;
  };
  entree: {
    entree_reperage: any;
    entree_porte_presence: boolean | null;
    entree_porte_manoeuvre: any;
    entree_porte_type: any;
    entree_vitree: any;
    entree_vitree_vitrophanie: any;
    entree_plain_pied: any;
    entree_marches: number | null;
    entree_marches_sens: any;
    entree_marches_reperage: any;
    entree_marches_main_courante: any;
    entree_marches_rampe: any;
    entree_balise_sonore: any;
    entree_dispositif_appel: any;
    entree_dispositif_appel_type: Array<
      "bouton" | "interphone" | "visiophone"
    > | null;
    entree_aide_humaine: any;
    entree_ascenseur: any;
    entree_largeur_mini: number | null;
    entree_pmr: any;
    entree_pmr_informations: string | null;
  };
  accueil: {
    accueil_visibilite: any;
    accueil_personnels: any;
    accueil_audiodescription_presence: any;
    accueil_audiodescription: Array<
      | "avec_équipement_permanent"
      | "avec_app"
      | "avec_équipement_occasionnel"
      | "sans_équipement"
    > | null;
    accueil_equipements_malentendants_presence: any;
    accueil_equipements_malentendants: Array<
      "bim" | "bmp" | "lsf" | "lpc" | "sts" | "autres"
    > | null;
    accueil_cheminement_plain_pied: any;
    accueil_cheminement_nombre_marches: number | null;
    accueil_cheminement_sens_marches: any;
    accueil_cheminement_reperage_marches: any;
    accueil_cheminement_main_courante: any;
    accueil_cheminement_rampe: any;
    accueil_cheminement_ascenseur: any;
    accueil_retrecissement: any;
    accueil_chambre_nombre_accessibles: number | null;
    accueil_chambre_douche_plain_pied: any;
    accueil_chambre_douche_siege: any;
    accueil_chambre_douche_barre_appui: any;
    accueil_chambre_sanitaires_barre_appui: any;
    accueil_chambre_sanitaires_espace_usage: any;
    accueil_chambre_numero_visible: any;
    accueil_chambre_equipement_alerte: any;
    accueil_chambre_accompagnement: any;
    sanitaires_presence: any;
    sanitaires_adaptes: any;
  };
  registre: {
    registre_url: string | null;
  };
  conformite: {
    conformite: any;
  };
  commentaire: {
    labels: Array<"autre" | "dpt" | "mobalib" | "th"> | null;
    labels_familles_handicap: Array<
      "auditif" | "mental" | "moteur" | "visuel"
    > | null;
    labels_autre: string | null;
    commentaire: string | null;
  };
}

export type IPaginateAccessibilities = Paginate<IAccessibility>;
