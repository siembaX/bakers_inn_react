import Carousel from '../js/components/Carousel';
import {  Uitabs } from '../js/components/Uitabs'
import croissant from '../images/croissant.png';
import breakfast from "../images/breakfast.png";
import chimodho from "../images/chimodho.png";
import factorybread from "../images/factorybread.png";
import { useState } from "react";


const Recipes = () => {
  const [recipeText, setRecipeText] = useState(
    "Make the finest croissants worthy of Paris from your home #Croissant #Zimbabwe #Paris #Baker's_Inn"
  );

  const handleTextChange = (text) => {
    setRecipeText(text);
  };

  const images = [
    {
      src: croissant,
      alt: 'Image 1',
      title: 'Image 1 Title',
      description: 'This is the description for Image 1.',
    },
    {
      src:breakfast ,
      alt: 'Image 2',
      title: 'Image 2 Title',
      description: 'This is the description for Image 2.',
    },
    {
      src: chimodho,
      alt: 'Image 3',
      title: 'Image 3 Title',
      description: 'This is the description for Image 3.',
    },
    {
      src: factorybread ,
      alt: 'Image 4',
      title: 'Image 4 Title',
      description: 'This is the description for Image 4.',
    },
  ];

  const texts = [
    'Make the finest croissants worthy of Paris from your home #Croissant #Zimbabwe #Paris #Baker’s_Inn',
    'English breakfast done right with Bakers Inn Bread #British #Bakers #Breakfast',
    'Forget BREAD, here’s a better recipe that makes use of those same ingredients #Chimodho #Local #Baker’s_Inn',
    'Ever wondered how our bread is made? Check this out  #Baker’s_Inn #Baker #Zimbabwe',
  ];

  return (
    <div>
      <section className="wrapper">
        <div className='recipesContainer'>
          <div className='col-lg-6'>
            <h1>The Finest of Baker's Tik Tok Community Recipes</h1>
            <p>{recipeText}</p>
            <h5>@The_Bakers_Inn</h5>
          </div>
          <div className='col-lg-6'>
            <Carousel images={images} texts={texts} onTextChange={handleTextChange} />
          </div>
        </div>
      </section>

      <section className='recipeSection'>
        <div className="wrapper">
        <Uitabs />
        </div>
      </section>
    </div>
  );
};

export default Recipes
