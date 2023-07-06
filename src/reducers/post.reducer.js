// State manager pour gérer les états
import {ADD_POST, ADD_POST_LIKE, DELETE_POST, EDIT_POST, GET_POSTS} from "../actions/post.action";

const initialState = {}

export default function postReducer(state = initialState, action) {
  // switch pour recevoir tel type d'action et l'exécuter
  switch (action.type) {
    case GET_POSTS:
      return action.payload;
    case ADD_POST:
      // Retourne le nouvel objet et l'ajoute au state qui est un tableau
      return [action.payload, ...state];
    case EDIT_POST:
      // On mappe tous les posts
      return state.map((post) => {
        // Si on est bien dans le post que l'on souhaite modifier.
        if (post.id === action.payload.id) {
          return {
            // retourne le post normal et ne modifie que ce qu'il doit modifier
            ...post,
            content: action.payload.content
          }
        }
        // Si on ne rentre pas dans le cas de figure, il faut retourner les autres articles
        else return post
      });
    case DELETE_POST:
      // Retourne tout ce qui n'est pas égal à post.id. On enlève le post.id
      return state.filter((post) => post.id !== action.payload)
    case ADD_POST_LIKE:
      return state.map((post) => {
        if (post.id === action.payload.id) {
          return {
            ...post,
            likes: action.payload.likes
          }
        } else return post
      })
    default:
      return state;
  }
}
