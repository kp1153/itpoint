// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title("IT Point Computer Shop")
    .items([
      S.documentTypeListItem("category").title("📂 Categories"),
      S.documentTypeListItem("product").title("📦 Products"),
      S.divider(),
      S.documentTypeListItem("offer").title("🎁 Special Offers"),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          !["category", "product", "offer"].includes(item.getId())
      ),
    ]);
