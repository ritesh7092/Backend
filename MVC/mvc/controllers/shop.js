const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll(products =>{
      res.render('shop/product-list', {
        prods: products,
        pageTitle: 'All products',
        path: '/products',
    });
    });
  };

  exports.getIndex = (req, res, next) => {
    Product.fetchAll(products =>{
      res.render('shop/index', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
    });
    });
  };

  exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
      path: '/cart',
      pageTitle: 'Your Cart'
    });
  };

  exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
      path: '/oders',
      pageTitle: 'Your Oders'
    });
  };

  exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
      path: '/checkout',
      pageTitle: 'Checkout'
    });
  };
