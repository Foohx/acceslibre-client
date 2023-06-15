import { API_URL } from "./constants";
import { urlRemoveQueryStrings } from "./url";

/**
 * Checks if a URL has the format of a valid Accessibilite api url.
 * (eg. `https://acceslibre.beta.gouv.fr/api/accessibilite/132735/`)
 *
 * @param {string} url - The URL to validate.
 *
 * @returns A boolean.
 */
export function isValidAccessibilityApiUrl(url: string): boolean {
  let u: string = url.trim();
  if (!u.startsWith(API_URL)) {
    return false;
  }
  u = u.replace(API_URL, "");
  u = urlRemoveQueryStrings(u);

  const uParts = u.split("/").filter((part) => part.length > 0);
  if (uParts.length !== 2) {
    return false;
  }

  return uParts[0] === "accessibilite";
}

/**
 * Extract the slug from the api url of an Accessibility.
 *
 * @param {string} url - The URL to extract the slug from.
 *
 * @returns The slug of the Accessibilite or null if not found.
 */
export function extractAccessibiliteSlugFromApiUrl(url: string): string | null {
  if (!isValidAccessibilityApiUrl(url)) {
    return null;
  }

  const cleanUrl = urlRemoveQueryStrings(url.trim().replace(API_URL, ""));
  const urlParts = cleanUrl.split("/").filter((part) => part.length > 0);

  return urlParts[urlParts.length - 1];
}
