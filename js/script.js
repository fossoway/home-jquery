const modalBtn = $('.present__btn');
const modalClose = $('.modal-order__close');
const modalOrderInput = $('.modal-order__input');
const modalOrderTitle = $('.modal-order__title');
const modalOrder = $('.modal-order');

modalBtn.on('click', function() {
    modalOrder.show(500);
});

modalClose.on('click', function() {
    modalOrder.hide(500);
});

modalOrderInput.focus(function() {
    modalOrderTitle
    .text(`Введите ${$(this).attr('placeholder').toLowerCase()}`);
});

modalOrderInput.blur(function() {
    modalOrderTitle.text('Заполните форму');
});

$('.modal-order__form').submit(function(event) {
    event.preventDefault();
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/todos',
        type: 'POST',
        data: $(this).serialize(),
        success: function(data) {
            modalOrderTitle.text('Спасибо, ваша заявка принята, номер заявки ' + data.id);
            $('.modal-order__form').slideUp(300);
        },
        error() {
            modalOrderTitle.text('Что-то пошло не так, попробуйте позже');
        },
    })
});

$('.header__burger').on('click', function() {
    $('.navigation').animate({
        left: 0,
    }, 500, function() {
        $('.navigation__close').animate({
            opacity: 1,
        }, 300, 'swing')
    })
});

$('.navigation__close').on('click', function() {
    $('.navigation').animate({
        left: -400,
    })
});

$(document).on('click', function(event) {
    if (!$(event.target).is('.navigation') && $('.navigation')[0].offsetLeft === 0) {
        $('.navigation').animate({
            left: -400,
        })
    }
});