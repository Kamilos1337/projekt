
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js"
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Firestore
    import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js'
    import { collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js'

    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyC_Ckr6ukuKfnYBcSutBACb8nTxRLq2B30",
      authDomain: "mobile1-b8d84.firebaseapp.com",
      projectId: "mobile1-b8d84",
      storageBucket: "mobile1-b8d84.appspot.com",
      messagingSenderId: "904226315912",
      appId: "1:904226315912:web:7a419ed8447221fa50c93d"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    // Initialize Cloud Firestore and get a reference to the service
    const db = getFirestore(app);

    // Read data
    const querySnapshot = await getDocs(collection(db, "cars"));

    querySnapshot.forEach((doc) => {
        console.log(doc.data());
        console.log(doc.data()['brand'],doc.data()['model']);
        document.writeln(doc.data()['brand'],' ',doc.data()['model'],'<br>');
    });
