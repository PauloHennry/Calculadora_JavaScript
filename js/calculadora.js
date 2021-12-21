function calculadora(){
	const operacao = prompt("Escolha uma operação:\n 1 - Soma(+)\n 2 - subtração(-)\n 3 - divisão(/)\n 4 - Multiplicação(*)\n 5 - divisão inteira(%)\n 6 - Potênciação(**)\n");

	let n1 = Number(prompt("Insira o Primeiro valor: "));
	let n2 = Number(prompt("Insira o Primeiro valor: "));
	let resultado;

	function soma(){
		resultado =  n1 + n2;
		alert("A soma de ",n1," + ",n2 ," é igual a ",resultado);

	}
	function subtracao(){
		resultado =  n1 - n2;
		alert("A subtração de ",n1," - ",n2 ," é igual a ",resultado);

	}
	function divisao(){
		resultado =  n1 / n2;
		alert("A divisão de ",n1," / ",n2 ," é igual a ",resultado);

	}
	function multipicacao(){
		resultado =  n1 * n2;
		alert("A multiplicacao de ",n1," * ",n2 ," é igual a ",resultado);

	}
	function divisao_Inteiro(){
		resultado =  n1 % n2;
		alert("A divisão inteira  de ",n1," % ",n2 ," é igual a ",resultado);

	}
	function potenciacao(){
		resultado =  n1 ** n2;
		alert("A potenciação de ",n1," ** ",n2 ," é igual a ",resultado);

	}

	if (operacao == 1){
		soma();
	}
	else if(operacao == 2){
		subtracao();	
	}
	else if(operacao == 3){
		divisao();
	}
	else if(operacao == 4){
		multipicacao();
	}
	else if(operacao == 5){
		divisao_Inteiro();
	}
	else if(operacao == 6){
		potenciacao();
	}

}
calculadora();