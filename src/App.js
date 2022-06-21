import './categories.styles.scss'
import Directory from './components/directory/directory.component';
import categories from './components/category-menu';

function App() {

  return (
    <Directory categories={categories} />
  );
}

export default App;
