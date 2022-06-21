import Directory from '../../components/directory/directory.component';
import categories from '../../components/category-menu';

const Home = () => {
    return <Directory categories={categories} />;
};

export default Home;