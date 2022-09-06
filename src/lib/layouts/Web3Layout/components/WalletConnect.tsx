import { useEffect, useCallback } from 'react';
import { Button, Menu, MenuButton, MenuList, MenuItem, Box } from '@chakra-ui/react';
import WalletConnect from '@walletconnect/web3-provider';
import { providers } from 'ethers';
import Web3Modal from 'web3modal';

import { useAppSelector, useAppDispatch } from 'lib/hooks';
import { setWeb3Provider, resetWeb3Provider, setAddress } from 'lib/store/slices/web3.slice';

const providerOptions = {
  walletconnect: {
    package: WalletConnect,
    options: {
      infuraId: process.env.INFURA_KEY,
    },
  },
};

let web3Modal: any;
if (typeof window !== 'undefined') {
  web3Modal = new Web3Modal({
    cacheProvider: true,
    providerOptions,
  });
}

const Index = () => {
  const { provider, web3Provider, address } = useAppSelector((state) => state.web3);
  const dispatch = useAppDispatch();

  const connect = useCallback(
    async function () {
      const provider = await web3Modal.connect();
      const web3Provider = new providers.Web3Provider(provider);

      const signer = web3Provider.getSigner();
      const address = await signer.getAddress();
      const network = await web3Provider.getNetwork();

      dispatch(setWeb3Provider({ provider, web3Provider, address, chainId: network.chainId }));
    },
    [dispatch],
  );

  const disconnect = useCallback(
    async function () {
      await web3Modal.clearCachedProvider();
      if (provider?.disconnect && typeof provider.disconnect === 'function') {
        await provider.disconnect();
      }
      dispatch(resetWeb3Provider());
    },
    [provider, dispatch],
  );

  useEffect(() => {
    if (web3Modal.cachedProvider) {
      connect();
    }
  }, [connect]);

  useEffect(() => {
    if (provider?.on) {
      const handleAccountsChanged = (accounts: string[]) => {
        const address = accounts[0];
        dispatch(setAddress(address));
      };

      const handleChainChanged = () => {
        window.location.reload();
      };

      const handleDisconnect = (error: { code: number; message: string }) => {
        console.log('error: ', error);
        disconnect();
      };

      provider.on('accountsChanged', handleAccountsChanged);
      provider.on('chainChanged', handleChainChanged);
      provider.on('disconnect', handleDisconnect);

      return () => {
        if (provider.removeListener) {
          provider.removeListener('accountsChanged', handleAccountsChanged);
          provider.removeListener('chainChanged', handleChainChanged);
          provider.removeListener('disconnect', handleDisconnect);
        }
      };
    }
  }, [provider, disconnect, dispatch]);

  return (
    <>
      {web3Provider ? (
        <Menu isLazy>
          <MenuButton as={Button} variant="outline" w="10rem">
            <Box w="100%" noOfLines={1} lineHeight="tight">
              {address && `${address.slice(0, 6)}...${address.slice(-4)}`}
            </Box>
          </MenuButton>
          <MenuList>
            <MenuItem onClick={disconnect}>Sign out</MenuItem>
          </MenuList>
        </Menu>
      ) : (
        <Button variant="outline" onClick={connect}>
          Connect
        </Button>
      )}
    </>
  );
};

export default Index;
