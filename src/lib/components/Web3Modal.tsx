import { chains, providers } from '@web3modal/ethereum';
import { Web3Modal } from '@web3modal/react';
import { ColorMode } from '@chakra-ui/react';

// Get projectID at https://cloud.walletconnect.com
if (!process.env.NEXT_PUBLIC_PROJECT_ID)
  throw new Error('You need to provide NEXT_PUBLIC_PROJECT_ID env variable');

// Configure web3modal
const modalConfig = {
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  theme: 'light' as const,
  accentColor: 'default' as const,
  ethereum: {
    appName: 'web3Modal',
    autoConnect: true,
    chains: [
      chains.mainnet,
      chains.avalanche,
      chains.polygon,
      chains.binanceSmartChain,
      chains.fantom,
      chains.arbitrum,
      chains.optimism,
    ],
    providers: [providers.walletConnectProvider({ projectId: process.env.NEXT_PUBLIC_PROJECT_ID })],
  },
};
export default function Web3ModalModule({ theme }: { theme: ColorMode }) {
  return <Web3Modal config={{ ...modalConfig, ...{ theme } }} />;
}
