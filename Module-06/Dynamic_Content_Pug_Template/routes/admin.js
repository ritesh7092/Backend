const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  // For rendering add-product.pug file
  res.render('add-product', {pageTitle: 'Add Product', path: '/admin/add-product'});
  // For rendering  html file add-product.html
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title });
  console.log(req.body);
  res.redirect('/');
});

exports.routes = router;
exports.products = products;
