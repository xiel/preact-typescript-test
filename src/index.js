import './style';
import { render } from 'preact';
import App from './App';

if (typeof window !== 'undefined') {
	const root = document.getElementById('root');
	render(<App />, root || document.documentElement.appendChild(document.createElement('div')));
}
