
$(".site-name").hover(function(){
    $(this).css("background-color", "white");
    $(this).css("color", "rgb(51,51,51)");
    },
    function(){
    $(this).css("background-color", "rgb(51,51,51)");
    $(this).css("color","white");
}
  );

$(".product-imagee").hover(function(){
    $(this).css("transform", "scale(1.1)");
},
    function(){
    $(this).css("transform", "scale(1.0)");
    }
    );