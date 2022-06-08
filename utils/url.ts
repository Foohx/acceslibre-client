/**
 * Remove query strings (eg. `?a=1&b=2...`) from a given string url.
 *
 * @param {string} url - The URL to remove the query strings from.
 *
 * @returns The url without the query string.
 */
export function urlRemoveQueryStrings(url: string): string {
  let urlChars = url.split("");

  let qsPosition: number | null = null;
  for (let i = 0; i < urlChars.length; i++) {
    if (urlChars[i] === "?") {
      qsPosition = i;
      break;
    }
  }

  if (qsPosition === null) {
    return url;
  }

  urlChars.splice(qsPosition, urlChars.length - qsPosition);

  return urlChars.join("");
}
