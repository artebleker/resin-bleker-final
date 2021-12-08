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

const firestoreFetch = async (resolve, testOrId) => {
  let q;
  if (resolve && testOrId === 1)
    q = query(
      collection(db, "data"),
      where("keyWords", "array-contains", resolve)
    );
  else if (resolve && testOrId === 0)
    q = query(collection(db, "data"), where("categoryId", "==", resolve));
  else q = query(collection(db, "data"), orderBy("type"));

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
