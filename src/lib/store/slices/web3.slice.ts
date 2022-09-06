import { createSlice } from '@reduxjs/toolkit';

type StateType = {
  provider?: any;
  web3Provider?: any;
  address?: string;
  chainId?: number;
};

const initialState: StateType = {
  provider: null,
  web3Provider: null,
  address: undefined,
  chainId: undefined,
};

export const slice = createSlice({
  name: 'web3',
  initialState,
  reducers: {
    setAddress: (state, { payload }) => {
      state.address = payload;
    },
    setChainId: (state, { payload }) => {
      state.chainId = payload;
    },
    setWeb3Provider: (state, { payload }) => {
      state.provider = payload.provider;
      state.web3Provider = payload.web3Provider;
      state.address = payload.address;
      state.chainId = payload.chainId;
    },
    resetWeb3Provider: () => initialState,
  },
  extraReducers: {},
});

export const { setAddress, setChainId, setWeb3Provider, resetWeb3Provider } = slice.actions;

export default slice.reducer;
