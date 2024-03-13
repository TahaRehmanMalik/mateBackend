const {initializeApp}=require("firebase/app");
const {getFirestore, collection, getDocs}=require("firebase/firestore");
const firebaseConfig = {
    apiKey: "AIzaSyA7PfpfGlXAkOp14CxXRdkf_6mSywSaF7k",
    authDomain: "mobile-mate-a76dd.firebaseapp.com",
    projectId: "mobile-mate-a76dd",
    storageBucket: "mobile-mate-a76dd.appspot.com",
    messagingSenderId: "481199753272",
    appId: "1:481199753272:web:a714019275328c1e1d3ecd"
};
const app=initializeApp(firebaseConfig);
const db=getFirestore(app);
const userCollection=collection(db,"brands");


const getBrands=async()=>{
    try {
        const response=await getDocs(userCollection);
        console.log("Brands data is fetch",response);
        return response;
    } catch (error) {
        console.log("The error in brands is",error);
        throw error;
    }
}
module.exports={getBrands};