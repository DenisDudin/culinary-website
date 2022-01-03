import {CategoryItem} from './CategoryItem'
import {Search} from '../components/Search'

function CategoryList({catalog = []}) {

  return (
    <div className="list">
      {catalog.map((el) => (
        <CategoryItem key={el.idCategory} {...el} />
      ))}
    </div>
  )
}

export {CategoryList}