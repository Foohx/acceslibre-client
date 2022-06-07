import { getErp, getErps } from "./methods";

export function hello(firstName: string): string {
  return `Hello ${firstName}!`;
}

export * from "./types";
export * from "./methods";

(async () => {
  //   const erps = await getErps({ page: 1, q: "montargis" });
  //   console.log(`TOTAL: ${erps.count}`);
  //   const x: any = [];
  //   for (const erp of erps.results) {
  //     x.push({ name: erp.nom, slug: erp.slug });
  //   }
  //   console.table(x);
  //   const erp = await getErp("mairie-montargis");
  //   console.table(erp);
})();
