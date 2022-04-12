import './app.module.scss';
import Header from './components/Header/Header';
import Navigator from './components/Navigator/Navigator';
import SearchField from './components/SearchField/SearchField';



export function App() {
  return (
    <>
      <Header>
        <SearchField></SearchField>
      </Header>
      <Navigator></Navigator>
    </>
  );
}

export default App;
