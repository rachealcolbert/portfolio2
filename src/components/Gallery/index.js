import React from "react";
import Portfolio from "../Portfolio";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Gallery(props) {
  const { currentCategory } = props;
  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.description}</p>
      <Portfolio category={currentCategory.name} />
    </section>
  );
}
export default Gallery;
