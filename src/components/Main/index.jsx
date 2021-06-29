import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchCategories, fetchCats, fetchMoreCats} from "../../store/actions";
import { Link } from "react-router-dom";
import Loading from "../Loading";

const Main = () => {
  const dispatch = useDispatch();
  const [catCategories, setCatCategories] = useState([]);
  const [allCats, setAllCats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categoryId, setCategoryId] = useState('');

  const cats = useSelector((state) => state.catsReducer.cats);
  const categories = useSelector((state) => state.categoriesReducer.categories);

  useEffect(() => {
    dispatch(fetchCats(''));

  }, []);


  useEffect(() => {
    if(categories.length) {
      const [categoriesCopy] = [...categories];
      setCatCategories(categoriesCopy);
      setLoading(false);
    }
    dispatch(fetchCategories())
  },  [categories]);

  useEffect(() => {
    if (cats.length) {
      setAllCats(cats);
    }
  }, [cats]);

  const getCats = (categoryID) => {
    setLoading(true);
    setCategoryId(categoryID);
    dispatch(fetchCats(categoryID));
  }

  const handleShowMore = () => {
    dispatch(fetchMoreCats(categoryId));
  }

  return (
    <div className="container">
     <nav className="navigation-container">
      <h3 className="title">Categories</h3>
       <div>
         {catCategories.length > 0 &&
           <div>
             {catCategories.map((item) =>
               <li key={item.id} className="category-name" onClick={() => getCats(item.id)}>
                 <Link className="link" to={`/${item.name}`}>
                   {item.name}
                 </Link>
               </li>
             )}
           </div>
         }
       </div>
     </nav>
      {!loading ?
        <div className="images-container">
          {allCats.length ?
            <>
            <div className="cat-image">
              {allCats.map((item) =>
                <li key={item.id}>
                  <img src={item.url} alt="cat-image"/>
                </li>
              )}
            </div>
              <button className="show-more" onClick={() => handleShowMore()}>
                Show more
              </button>
            </>
            : null
          }
        </div>
        : <Loading />
      }
    </div>
  )
}

export default Main;