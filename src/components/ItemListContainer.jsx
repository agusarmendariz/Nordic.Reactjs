import{useState, useEffect} from 'react';
import{useParams} from 'react-router-dom'
import ItemCount from "./ItemCount";
import ItemList from './ItemList';
import Loading from "./Loading";
import {getDocs,collection, getFirestore, limit, query, where, } from "firebase/firestore";


const ItemListContainer =() =>{
     const [items,setItems]= useState ([]);
     const [loading, setLoading] = useState(true);
     const {id}= useParams()

    
     useEffect(()=>{
        const db = getFirestore();
        const q =query (
            collection (db, "items"),
            where("categoria", "==", "id"),
            limit(1)
        );
        getDocs(q).then(snapshot=>{
            if(snapshot.size > 0){
                setItems(snapshot.docs.map(doc=>({id: doc.id,  ...doc.data()})))
                setLoading(false)
            }else{
                console.error("Error! No se encontraron productos")

            }
        });

        },[id]);
        useEffect(() => {
            const db = getFirestore();
            const itemsCollection = collection(db, "items");
            const q = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
            getDocs(q).then(resultado => {
                if (resultado.size > 0) {
                    setItems(resultado.docs.map(producto => ({id:producto.id, ...producto.data()})));
                    setLoading(false);
                } else {
                    console.error("Error! No se encontraron productos en la colección!");
                }
            });
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