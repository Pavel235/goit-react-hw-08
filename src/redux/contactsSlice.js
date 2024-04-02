import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, deleteContact, addContact } from "./contactsOps";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(deleteContact.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(addContact.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});

export const selectContacts = (state) => state.contacts.items;

export default contactsSlice.reducer;

// reducers: {
//     addContact: {
//       reducer: (state, action) => {
//         state.items.push({
//           name: action.payload.value.name,
//           number: action.payload.value.number,
//           id: action.payload.id,
//         });
//       },
//       prepare: (value) => {
//         return {
//           payload: {
//             value,
//             id: nanoid(),
//           },
//         };
//       },
//     },

//     deleteContact(state, action) {
//       state.items = state.items.filter(
//         (contact) => contact.id !== action.payload
//       );
//     },
//   },
