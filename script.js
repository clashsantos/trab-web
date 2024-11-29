let showRange = document.getElementById("showRange");
let numRange = document.getElementById("numRange");
showRange.innerHTML = numRange.value;
numRange.addEventListener('input', function () {
    showRange.innerHTML = numRange.value;
    showRange.innerHTML = numRange.value.padStart(2, '0');

});


let start = document.getElementById("go");
start.addEventListener('click', function () {
    let resulRange = document.getElementById("numRange").value;
    let senha = document.getElementById("senha");
    let maiusculo = document.getElementById("maiusculo");
    let minusculo = document.getElementById("minusculo");
    let numero = document.getElementById("numero");
    let caracterEspecial = document.getElementById("caracter"); // Pega o valor do checkbox de caracteres especiais
    let lengh = parseInt(resulRange);  // Garantir que o comprimento seja um nÃºmero inteiro

    // Definir os conjuntos de caracteres possÃ­veis
    let caracteres = '';
    if (maiusculo.checked) {
        caracteres += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';  // Letras maiÃºsculas
    }
    if (minusculo.checked) {
        caracteres += 'abcdefghijklmnopqrstuvwxyz';  // Letras minÃºsculas
    }
    if (numero.checked) {
        caracteres += '0123456789';  // NÃºmeros
    }
    if (caracterEspecial.checked) {
        caracteres += '!@#$%^&*()_+-=[]{}|;:,.<>?/';  // Caracteres especiais
    }

    // Verificar se pelo menos um tipo de caractere foi selecionado
    if (caracteres.length === 0) {
        senha.innerHTML = "Por favor, selecione pelo menos um tipo de caractere!";
        return;
    }

    // Garantir que a senha gerada tenha o comprimento exato
    let novaSenha = '';
    for (let i = 0; i < lengh; i++) {
        let index = Math.floor(Math.random() * caracteres.length);  // Pega um Ã­ndice aleatÃ³rio
        novaSenha += caracteres.charAt(index);  // Adiciona o caractere na senha
    }

    // Exibir a senha gerada
    senha.innerHTML = novaSenha;

});


// ObtÃ©m o botÃ£o de copiar e o conteÃºdo da senha
let copyButton = document.getElementById("copyButton");
let senha = document.getElementById("senha");

copyButton.addEventListener('click', function () {
    // Cria um elemento de input temporÃ¡rio para copiar o conteÃºdo
    let tempInput = document.createElement("input");
    tempInput.value = senha.innerHTML; // Copia o conteÃºdo do div 'senha'
    document.body.appendChild(tempInput); // Adiciona o input temporÃ¡rio no body
    tempInput.select(); // Seleciona o texto no input

    try {
        // Tenta copiar o conteÃºdo selecionado para a Ã¡rea de transferÃªncia
        document.execCommand("copy");
    } catch (err) {
    }

    // Remove o input temporÃ¡rio
    document.body.removeChild(tempInput);
});


let copiado = document.getElementById("copiado");

copyButton.addEventListener('click', function () {
    // Exibir o "Copiado" imediatamente ao clicar no botÃ£o
    copiado.style.display = 'block';

    // Definir um temporizador para esconder o "Copiado" apÃ³s 5 segundos
    setTimeout(function () {
        copiado.style.display = 'none';
    }, 5000); // 5000 milissegundos = 5 segundos
});
