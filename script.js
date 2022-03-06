const letters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers ='0123456789';
const symbols ='!"#$%&/=?@';
const copyButton = document.getElementById('copy');
const textInput = document.getElementById('password');

function button(){
	var tamanho = document.getElementById("length").value;

	if (document.getElementById('checkbox1').checked && document.getElementById('checkbox2').checked && document.getElementById('checkbox3').checked && document.getElementById('checkbox4').checked){
		let resultado = '';
		for (let i = 0; i < tamanho/4; i++){
			resultado += letters.charAt(Math.floor(Math.random() * 25)).toUpperCase();
			resultado += numbers.charAt(Math.floor(Math.random() * 9));
			resultado += letters.charAt(Math.floor(Math.random() * 25)).toLowerCase();
			resultado += symbols.charAt(Math.floor(Math.random() * 9));
		}
		document.getElementById("password").value = resultado;
	
	}else if (document.getElementById('checkbox1').checked && document.getElementById('checkbox2').checked && document.getElementById('checkbox3').checked){
		alert("You can't select 3 boxes.\nSelect more or select less.")
	
	}else if (document.getElementById('checkbox2').checked && document.getElementById('checkbox3').checked && document.getElementById('checkbox4').checked){
		alert("You can't select 3 boxes.\nSelect more or select less.")
	
	}else if (document.getElementById('checkbox1').checked && document.getElementById('checkbox2').checked && document.getElementById('checkbox4').checked){
		alert("You can't select 3 boxes.\nSelect more or select less.")
	
	}else if (document.getElementById('checkbox1').checked && document.getElementById('checkbox2').checked && document.getElementById('checkbox3').checked){
		alert("You can't select 3 boxes.\nSelect more or select less.")
	
	}else if (document.getElementById('checkbox1').checked && document.getElementById('checkbox3').checked && document.getElementById('checkbox4').checked){
		alert("You can't select 3 boxes.\nSelect more or select less.")
	
	}else if (document.getElementById('checkbox1').checked && document.getElementById('checkbox2').checked){
		let resultado = '';
		for (let i = 0; i < tamanho/2; i++){
			resultado += letters.charAt(Math.floor(Math.random() * 25)).toUpperCase();
			resultado += letters.charAt(Math.floor(Math.random() * 25)).toLowerCase();
			
		}
		document.getElementById("password").value = resultado;
		
	}else if (document.getElementById('checkbox1').checked && document.getElementById('checkbox3').checked){
		let resultado = '';
		for (let i = 0; i < tamanho/2; i++){
			resultado += letters.charAt(Math.floor(Math.random() * 25)).toUpperCase();
			resultado += numbers.charAt(Math.floor(Math.random() * 9));
			
		}
		document.getElementById("password").value = resultado;	
		
	}else if (document.getElementById('checkbox1').checked && document.getElementById('checkbox4').checked){
		let resultado = '';
		for (let i = 0; i < tamanho/2; i++){
			resultado += letters.charAt(Math.floor(Math.random() * 25)).toUpperCase();
			resultado += symbols.charAt(Math.floor(Math.random() * 9));
			
		}
		document.getElementById("password").value = resultado;
		
	}else if (document.getElementById('checkbox2').checked && document.getElementById('checkbox3').checked){
		let resultado = '';
		for (let i = 0; i < tamanho/2; i++){
			resultado += letters.charAt(Math.floor(Math.random() * 25)).toLowerCase();
			resultado += numbers.charAt(Math.floor(Math.random() * 9));
			
		}
		document.getElementById("password").value = resultado;
		
	}else if (document.getElementById('checkbox2').checked && document.getElementById('checkbox4').checked){
		let resultado = '';
		for (let i = 0; i < tamanho/2; i++){
			resultado += letters.charAt(Math.floor(Math.random() * 25)).toLowerCase();
			resultado += symbols.charAt(Math.floor(Math.random() * 9));
			
		}
		document.getElementById("password").value = resultado;
		
	}else if (document.getElementById('checkbox3').checked && document.getElementById('checkbox4').checked){
		let resultado = '';
		for (let i = 0; i < tamanho/2; i++){
			resultado += numbers.charAt(Math.floor(Math.random() * 9));
			resultado += symbols.charAt(Math.floor(Math.random() * 9));
		}
		document.getElementById("password").value = resultado;
		
	}else if (document.getElementById('checkbox1').checked){
		let resultado = '';
		for (let i = 0; i < tamanho; i++){
			resultado += letters.charAt(Math.floor(Math.random() * 25)).toUpperCase();
		}
		document.getElementById("password").value = resultado;
		
		}else if (document.getElementById('checkbox2').checked){
		let resultado = '';
		for (let i = 0; i < tamanho; i++){
			resultado += letters.charAt(Math.floor(Math.random() * 25)).toLowerCase();
		}
		document.getElementById("password").value = resultado;
		
	}else if (document.getElementById('checkbox3').checked){
		let resultado = '';
		for (let i = 0; i < tamanho; i++){
			resultado += numbers.charAt(Math.floor(Math.random() * 9));
		}
		document.getElementById("password").value = resultado;
		
	}else if (document.getElementById('checkbox4').checked){
		let resultado = '';
		for (let i = 0; i < tamanho; i++){
			resultado += symbols.charAt(Math.floor(Math.random() * 9));
		}
		document.getElementById("password").value = resultado;
		
	}
}


copyButton.addEventListener('click', ()=> {
	textInput.select();
    document.execCommand('copy');
	document.getElementById('copiado').innerText = "Copied!";
	setTimeout(copied, 2000);
});
	 
function copied(){
		document.getElementById('copiado').innerText = "";
	 }





