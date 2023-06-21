import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  items: [],
  rooms: [],
  invoices: [],
  inUseds: null,
  inStocks: null,
  damages: null,
  donateds: null,
  broken: null,
  lost: null,
  superCategory:[],
  superCategoryName:[],
  lastInvoice:[],
  users:[]
};

export const dashboardSlice = createSlice({
  name: "DashboardSlice",
  initialState,
  reducers: {
    setTotalUsers: (state, action) => {
      state.data = action.payload;
    },
    setTotalItems: (state, action) => {
      state.items = action.payload;
    },
    setTotalRooms: (state, action) => {
      state.rooms = action.payload;
    },
    setTotalInvoices: (state, action) => {
      state.invoices = action.payload;
    },
    setInUsedAssets: (state, action) => {
      state.inUseds = action.payload;
    },
    setInStockAssets: (state, action) => {
      state.inStocks = action.payload;
    },
    setDamageAssets: (state, action) => {
      state.damages = action.payload;
    },
    setDonatedAssets: (state, action) => {
      state.donateds = action.payload;
    },
    setBrokenAssets: (state, action) => {
      state.broken = action.payload;
    },
    setLostAssets: (state, action) => {
      state.lost = action.payload;
    },
    setSuperCategory:(state, action) => {
        state.superCategory = action.payload
    },
    setCategoryName:(state, action) => {
        state.superCategoryName = action.payload
    },
    setLastInvoice:(state, action) => {
        state.lastInvoice = action.payload
    },
    setCurrentUSer:(state, action) => {
      state.users = action.payload
    }
  },
});

export const {
  setTotalUsers,
  setTotalItems,
  setTotalRooms,
  setTotalInvoices,
  setInUsedAssets,
  setInStockAssets,
  setDamageAssets,
  setDonatedAssets,
  setBrokenAssets,
  setLostAssets,
  setSuperCategory,
  setCategoryName,
  setLastInvoice,
  setCurrentUSer
} = dashboardSlice.actions;
export default dashboardSlice.reducer;
