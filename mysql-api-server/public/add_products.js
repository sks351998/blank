$(function(){

    let name = $('#productName').val()
    let manuf = $('#productManufacturer').val()
    let price = $('#price').val()
    $('#btnAddProduct').click(function(){
      addProduct(name,manuf,price,function(data){
          window.alert("Added  "+data.name+ " to database")
      } )
    })
})