var express = require('express');
var router = express.Router();

//File Upload code with multer
var multer = require('multer'); // uploads multiple data
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images/') // cb = callback a file, telling the server, here is what I want you to do when done
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});

var upload = multer({
    storage: storage
});


//Main products page
router.get('/', function (req, res, next) { // the slash '/' is a callback function
    res.render('products', {
        products: myProducts
    })
})


//Direct User to Create Product Form
router.get('/product-create', (req, res, next) => {
    res.render('product-create')
})

//Direct User to Edit Product Form
router.get('/product-edit/:id', (req, res, next) => {
    let prodId = req.params.id | 0;
    let product = myProducts.find(product => product.id == prodId);
    res.render('product-edit', {
        product: product
    });
});

//Post New Product
router.post('/product-create', upload.single('imageUpload'), (req, res, next) => {
    myProducts.push({
        id: req.body.id | 0,
        name: req.body.name,
        price: req.body.price,
        size: req.body.size,
        image_path: '/images/' + req.file.originalname
    })
    res.redirect('/products') // sends you to a brand new page
})

//Edit Product
router.post('/product-edit/:id', upload.single('imageUpload'), (req, res, next) => {

    //find product in array
    let prodId = req.params.id | 0;
    productToEdit = myProducts.find(product => product.id === prodId);

    productToEdit.id = req.body.id | 0;
    productToEdit.name = req.body.name;
    productToEdit.price = req.body.price;
    productToEdit.size = req.body.size;
    let imgPath = req.file == undefined ? req.body.image_path : '/images/' + req.file.originalname;
    productToEdit.image_path = imgPath;

    res.redirect('/products')
})

//Delete Product
router.get('/product-delete/:id', (req, res, next) => {
    let prodId = req.params.id | 0;
    myProducts.splice(myProducts.findIndex(product => product.id === prodId), 1) // great way to delete product
    let deletedProduct = myProducts.splice(myProducts.findIndex(product => product.id === prodId), 1)
    // myProducts = myProducts.filter(product => product.id !== prodId); //alternative to the code above
    // res.redirect('/products')
    res.render('success', {
        product: deletedProduct[0]
    })
})

//Product details page
router.get('/:id', function (req, res, next) {
    let prodId = req.params.id | 0;
    let prod = myProducts.find(product => product.id === prodId);
    res.render('product-detail', {
        product: prod
    })
})

class Product {
    constructor(id, name, price, size, image_path) {
        this.id = id
        this.name = name
        this.price = price
        this.size = size
        this.image_path = image_path
    }
}

let myProducts = []
myProducts.push(
    new Product(1, 'Helmet', 3.99, 'M', '/images/helmet.jpg'),
    new Product(2, 'Bat', 75.99, '34"', '/images/bat.jpg'),
    new Product(3, 'Glove', 35.00, 'M', '/images/glove.jpg')
)

module.exports = router;