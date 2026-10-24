import { ViteReactSSG } from 'vite-react-ssg';
import { routes } from './routes';
import './index.css';
import './fix-mobile.css';

export const createRoot = ViteReactSSG({ routes });
