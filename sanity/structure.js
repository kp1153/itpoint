// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title("Computer Shop")
    .items([
      S.documentTypeListItem("offer").title("Special Offers"),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !["offer"].includes(item.getId())
      ),
    ]);
