$("ul").on("click", "li", function() {
    $(this).toggleClass("complited");   
});

$("ul").on("click", "span", function() {
    $(this).parent().fadeOut("slow", function() {
        $(this).remove(); 
    }); 
});

$("input").keypress(function(event) {
    if (event.which === 13) {
        var task = $("input").val();
        $("ul").append(`<li><span class="delete"><i class="fa fa-trash" aria-hidden="true"></i></span>${task}</li>`);
        $("input").val("");
    }
});

$("#toggleInput").on("click", "i", function() {   
    if ($(this).hasClass("fa fa-minus-square")) {
        console.log("ebu");   
        $(this).removeClass("fa fa-minus-square");
        $(this).addClass("fa fa-plus-square"); 
        $("input").fadeOut("slow");
    }
    else {
        console.log("ebutebia");
        
        $(this).removeClass("fa fa-plus-square");
        $(this).addClass("fa fa-minus-square"); 
        $("input").fadeIn("slow");
    }  
});





