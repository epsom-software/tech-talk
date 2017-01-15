$(function() {
    var body = $("body");
    body.click(function() {
        body.addClass("roll")
        setTimeout(function() {
            body.removeClass("roll")
        }, 4200)
    })
    
})

