// Toma los datos de la db (data base) de firebaseConfig para poder usarse en todo el proyecto

import {
  query,
  orderBy,
  where,
  collection,
  getDocs,
} from "@firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import db from "./firebaseConfig";
const firestoreFetch = async (idCategory) => {
  let q;
//   let keywordContext="";
// if(keywordContext){
//    q = query(collection(db, "data"), where("keyWords", "array-contains", keywordContext))
 
if(Array.isArray(idCategory)){
   q = query(collection(db, "data"), where("keyWords", "array-contains", idCategory))
   
}else{

  if (idCategory) 
    q = query(collection(db, "data"), where("categoryId", "==", idCategory));
   else 
    q = query(collection(db, "data"), orderBy("type"));
  }
  const querySnapshot = await getDocs(q);
  const dataFromFirestore = querySnapshot.docs.map((document) => ({
    id: document.id,
    ...document.data(),
  }));
return dataFromFirestore;
};
export default firestoreFetch;
export const firestoreFetchOne = async (idItem) => {
  const docRef = doc(db, "data", idItem);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return {
      id: idItem,
      ...docSnap.data(),
    };
  } else {
    console.log("404 No Found");
  }
};
