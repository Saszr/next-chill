import { EthereumClient, modalConnectors } from '@web3modal/ethereum';
import { Web3Modal } from '@web3modal/react';
import { configureChains, createClient, WagmiConfig, Chain } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { mainnet, bsc } from 'wagmi/chains';
import { ColorMode } from '@chakra-ui/react';

interface Web3ModalProps {
  theme: ColorMode;
}

interface WagmiConfigProviderProps {
  children: React.ReactNode;
}

// 1. Get projectID at https://cloud.walletconnect.com
if (!process.env.NEXT_PUBLIC_PROJECT_ID)
  throw new Error('You need to provide NEXT_PUBLIC_PROJECT_ID env variable');

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

// 2. Configure wagmi client
const chains = [mainnet, bsc];
const { provider } = configureChains(chains, [publicProvider()]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({ appName: 'next-chill', chains }),
  provider,
});

// 3. Configure modal ethereum client
export const ethereumClient = new EthereumClient(wagmiClient, chains);

// 4. Wrap your app with WagmiProvider and add <Web3Modal /> compoennt
export const DefaultWeb3Modal = ({ theme }: Web3ModalProps) => {
  return <Web3Modal projectId={projectId} ethereumClient={ethereumClient} themeMode={theme} />;
};

export const WagmiConfigProvider = ({ children }: WagmiConfigProviderProps) => {
  return <WagmiConfig client={wagmiClient}>{children}</WagmiConfig>;
};
