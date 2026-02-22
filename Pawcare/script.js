function show() {
    document.getElementById("heading").style.display = "block";
    
  
}

function hide() {
    document.getElementById("heading").style.display = "none";
   
}

 $(document).ready(function(){
  $(".adoption-process").click(function(){
    $(".adoption-process-content").toggle();
  });
});


$(document).ready(function(){
  $(".dog-health").click(function(){
    $(".dog-health-content").toggle();
  });
});


$(document).ready(function(){
  $(".return-policy").click(function(){
    $(".return-policy-content").toggle();
  });
});


  



