
import logo from './logo.svg';
import styles from './App.module.css';

function App() {
  const [searchTerm, setSearchTerm] = useSignal("");
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          A lista de produtos com aquele precinho que você esperava. Criado por @onhernandes.
        </p>

        <input className="input" type="text" placeholder="Busque um termo" />
      </header>

      <section className="results"></section>
    </div>
  );
}

export default App;
