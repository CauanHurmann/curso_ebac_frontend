$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000');

    $('#cpf').mask('000.000.000-00');

    $('#cep').mask('00000-000');

    $('form').validate({
        errorClass:'mensagem-erro',
        
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
                minlength: 11
            },
            cpf: {
                required: true,
                minlength: 11
            },
            endereco: {
                required: true
            },
            cep: {
                required: true,
                minlength: 8
            },
        },

        messages:{
            nome: 'Por favor, insira seu nome',
            telefone: {
                required: 'Este campo é obrigatorio',
                minlength: 'Insira um telefone válido'
            },
            cpf: {
                required: 'Este campo é obrigatorio',
                minlength: 'Insira um CPF válido'
            },
            endereco: 'Este campo é obrigatorio',
            cep: {
                required: 'Este campo é obrigatorio',
                minlength: 'Insira um CEP válido'
            }
        },

        submitHandler: function(form) {
            console.log(form)
        },

        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos!`);
            } 
        }
    });
});