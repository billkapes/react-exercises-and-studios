import styles from './Description.module.css';
import React from 'react';

function RecipeAuthor() {
    let authorLink = "https://www.allrecipes.com/cook/24320830";
    let authorPhoto = "https://www.allrecipes.com/static/2.91.0/images/public-profile/avatar-4.png";
    let authorName = "Allie";

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Blog name</a> 
           </div>
        </div>
     );
}

class RecipeDescription extends React.Component {
    render() {
        return (
            <div> 
            <div>
                <h1>Almond flour pancakes</h1>
                <p>These almond flour pancakes are a wonderful substitute for regular pancakes when watching your carbs! They are very filling and are on the dense side. This is a basic recipe that can be tweaked. Any sweetener can be substituted for maple syrup. Enjoy!</p>
            </div>
            <RecipeAuthor />
            </div>
        );
    }
}

export default RecipeDescription;