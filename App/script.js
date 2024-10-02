$("ul").on("click", "li", function() {
    $(this).toggleClass("complited");   
});

$("ul").on("click", "span", function() {
    $(this).parent().fadeOut("slow", function() {
        $(this).remove(); 
    }); 
});

$("input").keypress(function(event) {
    if (event.which === 13)
    {
        var task = $("input").val();
        $("ul").append(`<li><span class="delete"><i class="fa fa-trash" aria-hidden="true"></i></span>${task}</li>`);
        $("input").val("");
    }
});

$("#plus").click(function() {
    $("input").fadeToggle("slow");
});

