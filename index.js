

const firebaseConfig = {
    apiKey: "AIzaSyCp1kJNRwBI8tdE0lXGbYTM94mZRl1X0Ao",
    authDomain: "kitapistan-d320b.firebaseapp.com",
    databaseURL: "https://kitapistan-d320b-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "kitapistan-d320b",
    storageBucket: "kitapistan-d320b.appspot.com",
    messagingSenderId: "334442491394",
    appId: "1:334442491394:web:bacc030d734b3f65eb411b",
    measurementId: "G-9N6QDV6NQT"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database()

var test = "asda";

function getCover(index) {

    var data;
    var book_ref = database.ref('books/' + index + '/image')
    book_ref.on('value', function (snapshot) {
        data = snapshot.val();

    })
    return data;
}

function getName(index) {

    var data;
    var book_ref = database.ref('books/' + index + '/book_name')
    book_ref.on('value', function (snapshot) {
        data = snapshot.val();

    })
    return data;
}

function getPrice(index) {

    var data;
    var book_ref = database.ref('books/' + index + '/price')
    book_ref.on('value', function (snapshot) {
        data = snapshot.val();

    })
    return data;
}

function getPage(index) {

    var data;
    var book_ref = database.ref('books/' + index + '/pages')
    book_ref.on('value', function (snapshot) {
        data = snapshot.val();

    })
    return data;
}

function getDesc(index) {

    var data;
    var book_ref = database.ref('books/' + index + '/description')
    book_ref.on('value', function (snapshot) {
        data = snapshot.val();

    })
    return data;
}

function getAuthor(index) {

    var data;
    var book_ref = database.ref('books/' + index + '/author')
    book_ref.on('value', function (snapshot) {
        data = snapshot.val();

    })
    return data;
}

function getPublisher(index) {

    var data;
    var book_ref = database.ref('books/' + index + '/publisher')
    book_ref.on('value', function (snapshot) {
        data = snapshot.val();

    })
    return data;
}

function getCategory(index) {

    var data;
    var book_ref = database.ref('books/' + index + '/category')
    book_ref.on('value', function (snapshot) {
        data = snapshot.val();

    })
    return data;
}