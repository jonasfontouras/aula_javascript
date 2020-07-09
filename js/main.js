var turismo_recanto = ["Hotel Capo Zorial", "Hotel Beira-Rio", "Dipaolo"];
var curso = [{Fculdade: "AMF"}, {curso: "Sistemas de Informação"}, {curso: "Ontopsicologia"}, {curso: "Administração"}, {curso: "Direito"}, {curso: "Pedagogia"}];
turismo_recanto.push("Domus Mea");
turismo_recanto.pop("Dipaolo");

console.log(curso);

console.log(turismo_recanto.toString());

console.log(turismo_recanto.join(" - "));




var data = new Date();
alert(data)
var nome = prompt("Digite seu nome: ");
var idade = prompt(nome + ", digite sua idade: ");

if (idade <= 18){
    alert(nome + ", você tem " + idade + " anos e é menor de idade.");
}
else{
    alert(nome + ", você tem " + idade + " anos e é maior de idade.");
}

function soma(n1, n2){
    return n1 + n2;
}

alert(soma(10, 5));

function btnClicar(){
    document.getElementById("text").innerHTML = "Clicado com sucesso!"
    //alert("Botão clicado com sucesso!");
}

function redirect(){
    window.open("/Users/jonas/OneDrive/Documentos/DIO/aula_javascript/.vscode/redirect.html")
}

function passemouse(elemento){
    elemento.innerHTML = "Obrigado por passar.";
}

function tiremouse(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
}
//console.log(frase);

//console.log(frase.replace("Harvard", "AMF").toUpperCase());

//alert(frase.replace("Harvard", "AMF"));
