import SearchFilter from '../public/SearchFilter'
import Menu from '../public/Menu'
import './Filter.css'

function Filter () {
    return (
        <div className="Filter">
            <SearchFilter />
            <Menu />
        </div>
    );
}

export default Filter;