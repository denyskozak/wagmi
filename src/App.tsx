import {MainPage} from './pages';
import {MetaMaskProvider} from './contexts';
import './App.css'
import {WagmiProvider} from './providers';

function App() {
    return (
        <div className="app">
            <WagmiProvider>
                <MainPage/>
            </WagmiProvider>
        </div>
    )
}

export default App
