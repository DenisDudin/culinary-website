import {useParams, useNavigate, useLocation} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {getFilteredCategory} from '../api'
import {Preloader} from '../components/Preloader'
import {MealList} from '../components/MealList'

function Category() {
  const {name} = useParams();
  const [meals, setMeals] = useState([])
  const navigate = useNavigate();

  async function goBack(event) {
    event.preventDefault();
    navigate("../", { replace: true });
  }

  useEffect(() => {
    getFilteredCategory(name).then(date => setMeals(date.meals));
  }, [name]);

  return <>
    <button className="btn " onClick={goBack}>Back</button>
    {!meals.length ? <Preloader /> : <MealList meals={meals} />}
  </>
}

export {Category}