import { db } from './firebaseConfig';
import { collection, doc, getDoc, getDocs, orderBy, query, where } from 'firebase/firestore';

export const fetchAllFromFirestore = async () => {
    const q = query(collection(db, 'products'), orderBy('categoryId', 'desc'), orderBy('name'));
    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map(product => ({
        id: product.id,
        ...product.data()
    }));
    return dataFromFirestore
}

export const fetchCategoryFromFirestore = async (categoryId) => {
    const q = query(collection(db, 'products'), where('categoryId', '==', categoryId), orderBy('name'));
    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map(product => ({
        id: product.id,
        ...product.data()
    }));
    return dataFromFirestore
}

export const fetchOneFromFirestore = async (productId) => {
    const docRef = doc(db, 'products', productId);
    const docSnap = await getDoc(docRef);
    if(docSnap.exists()){
        return {
            id: productId,
            ...docSnap.data()
        }
    }
}