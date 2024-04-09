import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "../contacts/selectors";

export const selectNameFilters = (state) => state.filters.name;

export const selectNumberFilters = (state) => state.filters.number;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilters, selectNumberFilters],
  (contacts, filterName, filterNumber) => {
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filterName.toLowerCase()) ||
        contact.number.includes(filterNumber)
    );
  }
);
