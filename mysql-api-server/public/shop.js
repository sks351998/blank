function fetchProducts(done){
    $.get('/api/products',function (data){
        done(data)
    })
}

function addProduct(name,manuf,price,done){
    $.post('/api/products/',{
        name:name,
        manu:manuf,
        price:price
    },function(data){
        done(data)
    })
    
    
}

function createProductCard(product){
   return $(`
            <div class="col-3 card mx-2 p-2">
                  <div class="product-name"><h4>${product.name}</h4></div>
                  <div class="manufacturer-name">${product.manufacturer}</div>
                  <div class="row">
                      <div class="col-6 m-3 p-3">
                          <b>Rs.${product.price}</b>
                      </div>
                      <button class="col btn btn-primary m-3">Buy</button>
                  </div>
            </div>
   `)
}

