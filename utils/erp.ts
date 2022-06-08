import { BASE_URL } from "./constants";
import { urlRemoveQueryStrings } from "./url";

/**
 * Checks if a URL has the format of a valid ERP web url.
 * (eg. `https://acceslibre.beta.gouv.fr/app/82-montauban/a/instituts-de-formation/erp/acdp-formation-82/`)
 *
 * @param {string} url - The URL to validate.
 *
 * @returns A boolean.
 */
export function isValidErpUrl(url: string): boolean {
  let u: string = url.trim();
  if (!u.startsWith(BASE_URL)) {
    return false;
  }
  u = u.replace(BASE_URL, "");
  u = urlRemoveQueryStrings(u);

  const uParts = u.split("/").filter((part) => part.length > 0);
  if (uParts.length !== 6) {
    return false;
  }

  return uParts[0] === "app" && uParts[2] === "a" && uParts[4] === "erp";
}

/**
 * Extract the slug from the web url of an ERP.
 *
 * @param {string} url - The URL to extract the slug from.
 *
 * @returns The slug of the ERP or null if not found.
 */
export function extractErpSlugFromUrl(url: string): string | null {
  if (!isValidErpUrl(url)) {
    return null;
  }

  const cleanUrl = urlRemoveQueryStrings(url.trim().replace(BASE_URL, ""));
  const urlParts = cleanUrl.split("/").filter((part) => part.length > 0);

  return urlParts[urlParts.length - 1];
}
