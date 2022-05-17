import './categories.styles.scss'
import CategoryItem from './components/category-item/category-item.component';
import categories from './components/category-menu';

function App() {

  return (
    <div className="categories-container">
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category}/>
      })}
    </div>
  );
}

export default App;
