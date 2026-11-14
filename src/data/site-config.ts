/** Configuration centrale du site (générée par new-site.py). */
export const SITE_URL = "https://behaviortechexam.com";
export const SITE_NAMES: Record<string, string> = {"en": "Behavior Tech Exam"};
// Partie du nom affichée en couleur dans l'en-tête (RECETTE §10.3), « » pour aucune.
export const BRAND_ACCENT = "Exam";
export const LANG_TAGS: Record<string, string> = {"en": "en-US"};
export const OG_LOCALES: Record<string, string> = {"en": "en_US"};
export const LOCALE_TAG = 'en-US';
export const CURRENCY = 'USD';
export const YEAR = 2026;
/** Année de création du site — signal d'ancienneté (RECETTE §8.0). */
export const SITE_FOUNDED = '2026';
export const LAST_UPDATED = '2026-11-13';
export const AUTHOR_NAME = 'Radif Partners';
export const AUTHOR_ROLE: Record<string, string> = {"en": "Independent publisher of free practice exams and cost calculators for the behavior technician certification exam, written from the public exam plan of the BACB (Behavior Analyst Certification Board)"};
export const AUTHOR_DESC: Record<string, string> = {"en": "Radif Partners reads the public documents of the Behavior Analyst Certification Board, the RBT Handbook, the Test Content Outline (3rd ed.), the 40-hour training requirements and the competency assessment packet, then writes its own practice questions, one per task of the outline, with an explanation and the task code. Mock exams follow the published count of 75 scored questions, the 90-minute limit and the six domain weights. Every fee, deadline and state rule links to the BACB page or the state board page it was read on, with the date. Radif Partners is not the BACB, Pearson VUE, a training provider or an employer, and it sells nothing."};
/** Sujets sur lesquels l'editeur est competent (schema.org knowsAbout). Ce sont les
 *  themes reellement traites par le site, pas une liste de mots-cles : un sujet
 *  declare ici sans page qui le couvre est une declaration fausse. */
export const KNOWS_ABOUT: Record<string, string[]> = {"en": ["RBT Test Content Outline (3rd ed.): data collection, assessment, skill acquisition, behavior reduction, documentation, ethics", "RBT certification eligibility, fees, application and renewal rules of the BACB", "40-hour training requirements and the initial competency assessment", "State licensure and registration of behavior technicians (Washington, Oregon, Nevada, Louisiana)", "BCBA examination format, fees and fieldwork requirements"]};
export const CONTACT_EMAIL = "contact@behaviortechexam.com";
export const THEME_COLOR = '#2B4C7E';
export const LOGO_SYMBOL = 'ABA';
export const BING_VERIFY_CODE = '';
export const GOOGLE_VERIFY_CODE = '';
/** Régime : 'none' pour tous les sites (RECETTE §15.6, décision de l'éditeur du 2026-10-06) :
 *  aucun bandeau ; Clarity chargé en mode sans cookie (consentv2 denied) ; GA4 avec cookies si GA4_ID.
 *  'opt-in' / 'notice' ne servent plus qu'aux sites anciens qui les portent encore. */
export const CONSENT_MODE: 'opt-in' | 'notice' | 'none' = 'none';
/** Propriété Google Analytics 4 (décision de l'éditeur du 2026-10-17, RECETTE §15.6) : GA4 normal,
 *  avec cookies _ga / _ga_<ID> (390 jours), sans bandeau, publicité refusée. Créée par
 *  `seo-platform/scripts/create-ga4.ts accounts/372759688` (RECETTE §15.3, étape 15), puis
 *  pages légales régénérées : `python3 scripts/gen-legal-pages.py .`. Vide = pas de GA4. */
export const GA4_ID = 'G-JE360C3Q03';
/** Projet Microsoft Clarity (compte amradif), chargé sans cookie. Vide = aucune mesure. */
export const CLARITY_ID = 'zdgaaw08eu';
export const INDEXNOW_KEY = 'fda29bf4f2279cdd9a06526ea2da5d71';

/* ------------------------------------------------------------------------- *
 * IDENTITÉ LÉGALE — À COMPLÉTER AVANT LA MISE EN LIGNE
 * Ces champs alimentent la mention légale du pays, la politique de confidentialité,
 * la page contact et le schema Organization. Un champ vide s'affiche en jaune
 * sur le site. Contrôle : `npm run check:legal`.
 * ------------------------------------------------------------------------- */
export interface LegalHosting { name: string; address: string; phone: string; url: string }
export interface LegalIdentity {
  entityName: string; legalForm: string; street: string; postalCode: string; city: string;
  country: string; phone: string; registerLabel: string; registerNumber: string;
  vatLabel: string; vatNumber: string; jurisdiction: string;
  supervisoryAuthority: string; supervisoryAuthorityUrl: string; hosting: LegalHosting;
}
export const LEGAL: LegalIdentity = {
  entityName: 'Radif Partners',            // raison sociale ou nom commercial exploité
  legalForm: '',             // ex. entreprise individuelle, SASU, GmbH, eenmanszaak
  street: '49 rue du Ressort',
  postalCode: '63000',
  city: 'Clermont-Ferrand',
  country: "France",
  phone: '',                 // ligne de contact publiée
  registerLabel: "SIREN",
  registerNumber: '',
  vatLabel: "VAT",
  vatNumber: '',             // laisser vide si non assujetti
  jurisdiction: "France",
  supervisoryAuthority: "Commission nationale de l'informatique et des libertés (CNIL)",
  supervisoryAuthorityUrl: "https://www.cnil.fr",
  hosting: { name: 'GitHub, Inc. (GitHub Pages)', address: '88 Colin P Kelly Jr Street, San Francisco, CA 94107, United States', phone: '', url: 'https://pages.github.com' },
};

/** Champs sans lesquels le site ne doit pas être mis en ligne. */
export const LEGAL_REQUIRED: Array<keyof LegalIdentity> = ['entityName', 'street', 'postalCode', 'city']; // legalForm vide à dessein, comme sur les autres sites du portefeuille

/** Profils publics de l'auteur (schema.org sameAs). Laisser vide si aucun. */
export const AUTHOR_SAME_AS: string[] = [];

/** Rythme de revue éditoriale annoncé sur le site, en mois. */
export const REVIEW_CYCLE_MONTHS = 12;
