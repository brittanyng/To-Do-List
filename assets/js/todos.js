
// cross off task
$("ul").on("click", "li", function(){
    // alert("CLICKED!");
    $(this).toggleClass("completed");
});

// delete task
$("ul").on("click", "span", function(event) {
    // alert("SPAN CLICKED!");
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
});

// adding new task
$("input[type='text']").on("keypress", function(event) {
    if (event.which === 13) {
        // alert("ENTER CLICKED!");
        var newTodo = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + newTodo + "</li>");
    }
});

$("#toggle-form").on("click", function() {
    $("input[type='text']").fadeToggle();
});