import { useEffect } from "react";
import "./styles.css";

import Masonry from "react-masonry-css";
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters } from "../../redux/charactersSlice";

const Home = () => {
  const characters = useSelector((state) => state.characters.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  return (
    <div>
      <h1>Character</h1>
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {/* array of JSX items */}
      </Masonry>
      {characters.map((character) => (
        <div key={character.char_id}>
          <img alt={character.name} src={character.img} className="character" />
        </div>
      ))}
    </div>
  );
};

export default Home;
