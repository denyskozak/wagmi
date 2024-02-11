import {useState} from 'react';
import {useBalance, useChainId} from 'wagmi'
import { useConnect, useAccount } from 'wagmi'
import { injected } from 'wagmi/connectors'

export const MainPage = () => {
    const chainId = useChainId();
    const { connect } = useConnect()
    const account = useAccount()

    const balance = useBalance({
        address: account.address,
        chainId: chainId,
    });

    console.log('account: ', account);

    console.log('balance: ', balance);

    return (
        <div className="App">
            {account.isConnected
                ? (
                    <div>
                        <p>
                            {account && `Connected account: ${account.address}`}
                        </p>
                        <p>
                            {balance.isSuccess && `You balance: ${balance?.data?.formatted}  ${balance?.data?.symbol}`}
                        </p>
                    </div>
                )
                : (<button style={{padding: 10, margin: 10}} onClick={() => connect({ connector: injected() })}>
                    Connect
                </button>)}
        </div>
    );
};
