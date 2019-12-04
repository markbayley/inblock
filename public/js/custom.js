/* 

1. Add your custom JavaScript code below
2. Place the this code in your template:

  

*/

$('.like-btn').on('click', function() {
    $(this).toggleClass('is-active');
 });

$('.minus').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());
 
    if (value > 1) {
        value = value - 1;
    } else {
        value = 0;
    }
 
  $input.val(value);
 
});
 
$('.plus').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());
 
    if (value < 100) {
        value = value + 1;
    } else {
        value =100;
    }
 
    $input.val(value);
});


$(".cart-product-remove").on("click", function(e) {
    e.preventDefault();
    
    $(this).parents("tr").remove();
    

});

$(".cart-product-add").on("click", function(e) {
    e.preventDefault();
    
    $(this).parents("tr").add();
    

});



