function recolherDados() {

let form = document.forms["myform"]

console.log(document.forms);

		let nome = form.nome_cliente.value;
		let telefone = form.telefone_cliente.value;
		let email = form.email_cliente.value;
		
let sabor = form.sabor.value;

let recipiente = form.recipiente.value;


let extras = document.getElementsByName("extras[]");


let mensagemFinal = "O cliente com nome: "+nome+
					",telefone: "+telefone+
		     		",email:"+email+
					",escolheu um sorvete de: "+sabor+
					",em um recipiente de: "+ recipiente+
					",com extras de: ";

	    for (let i = 0; i < extras.length; i++) {
		const element = extras[i];

		if(element.checked){
			mensagemFinal+= element.value + " ";
		}
		    
	}
			console.log(mensagemFinal);
}

    // Otro codigo de practica para validar 
		function iniciar(){
			document.getElementById("enviar").addEventListener('click',validar,false);
		}
								
        function validaNome(){
         var elemento = document.getElementById("nome");
         if (!elemento.checkValidity()) {
			 if (elemento.validity.valueMissing){
				 error1(elemento,"coloque um nome");
			 }
        	//error(elemento);
	        return false;
           }
          return true;
		}

		
		function validaTelefone(){
			var elemento = document.getElementById("telefone");
			if (!elemento.checkValidity()) {
				if (elemento.validity.valueMissing){
					error1(elemento,"coloque um telefone");
				}
			   //error(elemento);
			   return false;
			  }
			 return true;
		   }


		   function validaEmail(){
			var elemento = document.getElementById("email");
			if (!elemento.checkValidity()) {
			   error(elemento);
			   return false;
			  }
			 return true;
		   }

		   function validar(e) {
			   borrarError();
			   if(validaNome() && validaTelefone() && validaEmail() &&
			   confirm("Click para enviar seu formulario")) {
				   return true
			   } else {
				   e.preventDefaulf();
				   return false;
			   }
		   }

		   function error(elemento) {
			   document.getElementById("mensagemError").innerHTML =
			   elemento.validationMessage;
			   elemento.className= "error";
			   elemento.focus();
		   }

		   function error1(elemento,mensagem) {
			document.getElementById("mensagemError").innerHTML = mensagem;
			elemento.className= "error";
			elemento.focus();
		}


		     function borrarError(){
			 var formulario = document.forms[0];
		 	 for (var i=0; i<formulario.elements.length;i++){
             formulario.element[i].className ="";
			 }
		 }


