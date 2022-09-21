// $('p').hide()
$(document).ready(function(){
    $('button').mouseenter(function(){
        $("p").hide()
        alert('salam khili gap nazan')
    })
    $('bold').mouseenter(function(){
        $('p').show()

})
$('input').focus(function(){
    $(this).css('background-color','red')
})
$('input').blur(function(){
    $(this).css('background-color','green')
})
$('button').click(function(){
    $(this).css('background-color','gray')
})
$('[href]').click(function(){
    $(this).css('background-color','gray')
})

$('p').on({
    click: function(){
        $(this).css('background-color','gray')
    },
    dblclick:function(){
        $(this).css('background-color','red')
    },
    mouseenter:function(){
        alert('u enterd in p')
    }
})

})
