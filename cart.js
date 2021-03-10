var moreButton = function(field){
    let value = parseInt(document.getElementById('quantity_item_'+field).value);
    value = value + 1;
    document.getElementById('quantity_item_'+field).value = value;
    console.log( document.getElementById('quantity_item_'+field).value);
}

var lessButton = function(field){
    let value = parseInt(document.getElementById('quantity_item_'+field).value);
    if(value === 0){
    }else{
        value = value - 1;
        document.getElementById('quantity_item_'+field).value = value;
        console.log( document.getElementById('quantity_item_'+field).value);
    }
}
let total = [];
var add = function(field){
    let value = parseInt(document.getElementById('quantity_item_'+field).value);
    let product_name = document.getElementById('quantity_item_'+field).dataset.name; 
    let amount = 0;

    if(value === 0){
    }else{
        for (let index = 0; index < value; index++) {
            amount += parseInt(document.getElementById('quantity_item_'+field).dataset.price);
        }
        total.push({amount,product_name});
        jQuery('#products_list').append(`<div class="product-item">${product_name}</div>`);
        jQuery('#products_list_amount').append(`<div class="product-amount">$${amount}</div>`);

        var cant = parseInt(document.getElementById('total').value);
        var suma = cant + amount;
        console.log(suma);
        document.getElementById('total').value = suma;
    }
}

var pay = function(){
    let total = document.getElementById('total').value;
    if(parseInt(total) != 0){
        jQuery('#modal').removeClass('fade');
        setTimeout( () =>  clean(), 2000);
    }
}

var clean = function(){
    jQuery('#modal').addClass('fade')
    jQuery('#products_list').empty();
    jQuery('#products_list_amount').empty();
    document.getElementById('total').value = 0;
    jQuery('#quantity_item_1').val(0);
    jQuery('#quantity_item_2').val(0);
    jQuery('#quantity_item_3').val(0);
    jQuery('#quantity_item_4').val(0);
}
