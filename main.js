$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        const novaTarefa = $('#nova-tarefa').val();
        const novoItemLista = $('<li></li>');
        
        $(`<p>${novaTarefa}</p>`).appendTo(novoItemLista);
        $(novoItemLista).appendTo('ul');
        $('#nova-tarefa').val('');

        $(novoItemLista).click (function(event){
            $(event.target).toggleClass('item-concluido');
        });
    });
});