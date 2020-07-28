function recolherDados() {
		let nome = document.getElementById("nome").value;
		let telefone = document.getElementById("telefone").value;
		let email = document.getElementById("email").value;
		
let sabor = "";

let saborCoco = document.getElementById("coco");
let saborChocolate = document.getElementById("chocolate");
let saborMixto = document.getElementById("mixto");


if(saborCoco.cheked) {
     sabor = saborCoco.value;
} else if (saborChocolate.cheked) {
	sabor = saborChocolate.value;
} else {
	sabor = saborMixto.value;
}

let recipiente = "";

let recipienteCopo = document.getElementById("copo");
let recipienteCasquinha = document.getElementById("casquinha");

if(recipienteCopo.cheked){
	recipiente = recipienteCopo.value;
} else {
	recipiente = recipienteCasquinha.value;
}

let coberturas = [];

let coberturaLeitecondensado = document.getElementById("leitecondensado");
let coberturaMorango = document.getElementById("morango");
let coberturaCaramelo = document.getElementById("caramelo");

if(coberturaLeitecondensado.cheked){
	cobertura.push(coberturaLeitecondensado.value);
}
if(coberturaMorango.cheked){
	cobertura.push(coberturaMorango.value);
}
if(coberturaCaramelo.cheked){
	cobertura.push(coberturaCaramelo.value);
}


		let mensagemfinal = " O cliente: "+nome+
							",telefone: "+telefone+
							",email:"+email+
							" escolheu um sorvete de: "+sabor+
							",em um recipiente de: "+recipiente+
							",com coberturas de: ";

							for (let i = 0; i < coberturas.length; i++) {
								const element = coberturas [i];

							mensagemfinal+= element + " ";
						}
						console.log(mensagemfinal);
						
}