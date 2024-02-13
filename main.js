$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown()
    } );

    $('#bt-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit' , function(e) {
        e.preventDefault();
        const enderecoNovaImagem = $('#endereco-nova-imagem').val();
        const novoItem = $('<li style="display: none;"></li>')
        $(`<img src="${enderecoNovaImagem}" alt="Imagem"/>`).appendTo(novoItem);
        $(`<div class="overlay-imagem-link">
            <a href="${enderecoNovaImagem}" title="Ver Imagem em tamanho real" target="_blank">Ver Imagem em tamanho real</a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(500);
        $('#endereco-nova-imagem').val('');
    });
})