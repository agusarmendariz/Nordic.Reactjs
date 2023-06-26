import{useState, useEffect} from 'react';
import{useParams} from 'react-router-dom'
import ItemList from './ItemList';
import Loading from "./Loading";
import {getDocs,collection, getFirestore, query, where, } from "firebase/firestore";


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
  
    useEffect(() => {
      const db = getFirestore();
      const itemsCollection = collection(db, "items");
      const getData = async () => {
        const q = !id ? itemsCollection : query(collection(db, "items"), where("categoria", "==", id));
        const querySnapshot = await getDocs(q);
        const productos = querySnapshot.docs.map((doc) => {
          const newProduct = {
            ...doc.data(),
            id: doc.id,
          };
          return newProduct;
        });
        setTimeout(() => {
          setItems(productos);
          setLoading(false);
        }, 1000);
      };
      getData();
    }, [id]);
        

    return (
        <div className= "container my-5">
            <div className='row'>
                {loading ? <Loading /> : <ItemList products ={items} />}
            </div>
        </div>

    )
    }
 export default ItemListContainer