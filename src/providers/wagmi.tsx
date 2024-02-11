import {http, createConfig, WagmiProvider as WagmiProviderLibrary} from 'wagmi'
import {bsc, bscTestnet} from 'wagmi/chains'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {injected} from 'wagmi/connectors'
import {ReactNode} from 'react';
import {IChildOnly} from '../types';

export const config = createConfig({
    chains: [bsc, bscTestnet],
    connectors: [
        injected(),
    ],
    transports: {
        [bsc.id]: http(),
        [bscTestnet.id]: http(),
    },
})

const queryClient = new QueryClient()

export const WagmiProvider = (props: IChildOnly) => {
    const {children} = props;

    return (
        <WagmiProviderLibrary config={config}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </WagmiProviderLibrary>
    );
}

