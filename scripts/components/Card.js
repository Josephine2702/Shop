import { container, cardContainer} from "../DOM.js"
import { createUI } from "./UI.js"
import { BASE_URL } from "../api.js"
import { getJSON } from "./helper.js"




export const showDetailedProduct = async function(id) {
    container.classList.add('fade');
    cardContainer.classList.remove('hide');

    try{
    const data = await getJSON(`${BASE_URL}/${id}`);
    createUI.createCardUI(data);
    
   } catch (err){
    console.error(err);
   }
}
    
    







  























