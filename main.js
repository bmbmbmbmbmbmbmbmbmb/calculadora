const display = document.querySelector("#display"); 
//o querySelector retotna o primeiro elemento dentro do documento.
const butons = document.querySelectorAll("button")
//retorna uma lista de elementos presentes no documento.
butons.forEach((btn) =>{
    btn.addEventListener("click" ,() =>{
    if(btn.id === "="){
        display.value = eval (display.value);
    } else if(btn.id === "ac"){
        display.value = "";
    } else if(btn.id === "de"){

        display.value = display.value.slice(0, -1);
    } else {
        display.value += btn.id;
    }
   })
}) 

    //Const:A declaração const cria uma variável cujo o valor é fixo, ou seja, uma constante somente leitura. Isso não significa que o valor é imutável, apenas que a variável constante não pode ser alterada ou retribuída.

    //querySelector:O querySelector retorna o primeiro elemento dentro do documento

    //Retorna uma lista de elementos presentes no documento.

//=== (Valor e Tipo igual) - é usado para a comparação entre duas variáveis, mas isso irá verificar o tipo estrito, o que significa que ele irá verificar o tipo de dados e comparar dois valores.

//O método slice() percorre a string ou o array para selecionar a faixa de valores determinada por parâmetro. A primeira posição de uma string ou array é a posição de número 0.





