const form = document.getElementById('form-validacao');

function validacaoNumeros (numeroA, numeroB) {
        if (numeroB > numeroA) {
        return true;
    } else {
        return false;
    }
};

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    const numeroA = parseInt(document.querySelector('#numero-A').value);
    const numeroB = parseInt(document.querySelector('#numero-B').value);
    const containerMenssagemValidacao = document.querySelector('.success-msg');
    const containerMenssagemNaoValidacao = document.querySelector('.error-msg');
    const menssagemValidacao = `Parabéns como <b>${numeroB}</b> é maior que <b>${numeroA}</b>, então numero 2 > numero 1!`;
    const menssagemNaoValidacao = `Como <b>${numeroB}</b> é menor que <b>${numeroA}</b>. Tente novamente!`;

    containerMenssagemValidacao.style.display = 'none';
    containerMenssagemNaoValidacao.style.display = 'none';

    if (validacaoNumeros(numeroA, numeroB)){
        containerMenssagemValidacao.innerHTML = menssagemValidacao;
        containerMenssagemValidacao.style.display = 'block';
    } else {
        containerMenssagemNaoValidacao.innerHTML = menssagemNaoValidacao;
        containerMenssagemNaoValidacao.style.display = 'block';
    }
});
