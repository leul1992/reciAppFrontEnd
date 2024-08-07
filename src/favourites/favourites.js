import { BASE_URL } from "..";
export const saveToFavourites = async (userId, recipeId, recipeName, recipeImage) => {
    try {
      const response = await fetch(`${BASE_URL}/api/saveFavourites`, {
        method: 'POST',
        body: JSON.stringify({userId, recipeId, recipeName, recipeImage}),
        headers: { 'Content-Type': 'application/json' },
      });
      return response.json();
    } catch (error) {
      console.error('can\'t fetch');
    }
  };

export const deleteFromFavourites = async (userId, recipeId) => {
  try{
    await fetch(`${BASE_URL}/api/deleteFromfavourites`, {
      method: 'POST',
      body: JSON.stringify({userId, recipeId}),
      headers:{ "content-type": "application/json"},
    });

  } catch(e){
    console.error('can\'t delete');
  }
}
