import { createSignal } from 'solid-js';
import './styles.css';

export const Header = () => {
    const [count, setCount] = createSignal(0);

    return (
        <header>
            <div class="icon-container">
                <img src="icon.png" alt="Icon" />
            </div>
            <div>
                <button onClick={() => setCount(count() - 1)}>Login</button>
                <button onClick={() => setCount(count() + 1)}>User Profile</button>
            </div>
        </header>
    );
};

export default Header;
