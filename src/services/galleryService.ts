import {
    collection,
    getDocs,
    getDoc,
    doc,
} from "firebase/firestore";
import { type Album } from "@/types/gallery";
import { db, auth } from "@/lib/firebase";
import { signInAnonymously } from 'firebase/auth';
const COLLECTION_NAME = "albums";

export const getAlbums = async (): Promise<Album[]> => {
    try {
        if (!auth.currentUser) {
            await signInAnonymously(auth);
        }
        const albumsCollectionRef = collection(db, 'albums');
        const querySnapshot = await getDocs(albumsCollectionRef);

        const albums: Album[] = [];
        querySnapshot.forEach((doc) => {
            albums.push({
                id: doc.id,
                ...doc.data()
            } as Album);
        });

        return albums;
    } catch (error) {
        console.error("Erro ao buscar álbuns:", error);
        throw error; // Re-lança o erro para ser tratado por quem chamou a função
    }
};

export const getAlbumById = async (id: string): Promise<Album | null> => {
    try {
        if (!auth.currentUser) {
            await signInAnonymously(auth);
        }
        const docRef = doc(db, COLLECTION_NAME, id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const data = docSnap.data();
            return { id: docSnap.id, ...data } as Album
        } else {
            console.log("No such album!");
            return null;
        }
    } catch (error) {
        console.error("Error fetching album:", error);
        return null;
    }
};