import './App.css';
import Header from "./Components/Header";
import AppRouter from './routes/Routes';
import { Provider } from 'react-redux';
import { store} from './store/store';
import { BrowserRouter as Router } from 'react-router-dom';
export function App() {
  return (
    <>
      <AppRouter />
    </>
  );
}