const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        console.log(`Passo Atual: ${atual.id}`);  // Log do passo atual
        console.log(`Próximo Passo: ${proximoPasso}`); // Log do próximo passo

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    });
});
