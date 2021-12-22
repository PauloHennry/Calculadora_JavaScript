function calculadora(){
	const operacao = prompt("Escolha uma operação:\n 1 - Soma(+)\n 2 - subtração(-)\n 3 - divisão(/)\n 4 - Multiplicação(*)\n 5 - divisão inteira(%)\n 6 - Potênciação(**)\n");

    if(!operacao || operacao >= 7){
        alert("Erro - Operação invalida!!")
        calculadora();
    }else{

    if(!n1 || !n2){
        alert("Erro -  Paramentros invalidos")
        calculadora();
    }else{
        function soma(){
            resultado =  n1 + n2;
            alert('${n1} + ${n2} = ${resultado}');
            novOperacao()
    
        }
        function subtracao(){
            resultado =  n1 - n2;
            alert('${n1} + ${n2} = ${resultado}');
            novOperacao()
    
        }
        function divisao(){
            resultado =  n1 / n2;
            alert('${n1} + ${n2} = ${resultado}');
            novOperacao()
    
        }
        function multipicacao(){
            resultado =  n1 * n2;
            alert('${n1} + ${n2} = ${resultado}');
            novOperacao()
    
        }
        function divisao_Inteiro(){
            resultado =  n1 % n2;
            alert('${n1} + ${n2} = ${resultado}');
            novOperacao()
    
        }
        function potenciacao(){
            resultado =  n1 ** n2;
            alert('${n1} + ${n2} = ${resultado}');
            novOperacao()
        }
    
        function novOperacao(){
            let opcao = prompt("Deseja realizar uma nova operação?\n 1 -sim\n 2- não");
    
            if (opcao == 1){
                calculadora();
            }
            else if (opcao == 2){
                alert("Até mais !")
            }
            else{
                alert("Digite uma operação valida!")
                novOperacao()
            }
        }
    }
        
	let n1 = Number(prompt("Insira o Primeiro valor: "));
	let n2 = Number(prompt("Insira o Primeiro valor: "));
	let resultado;

	function soma(){
		resultado =  n1 + n2;
		alert('${n1} + ${n2} = ${resultado}');
        novOperacao()

	}
	function subtracao(){
		resultado =  n1 - n2;
		alert('${n1} + ${n2} = ${resultado}');
        novOperacao()

	}
	function divisao(){
		resultado =  n1 / n2;
		alert('${n1} + ${n2} = ${resultado}');
        novOperacao()

	}
	function multipicacao(){
		resultado =  n1 * n2;
		alert('${n1} + ${n2} = ${resultado}');
        novOperacao()

	}
	function divisao_Inteiro(){
		resultado =  n1 % n2;
		alert('${n1} + ${n2} = ${resultado}');
        novOperacao()

	}
	function potenciacao(){
		resultado =  n1 ** n2;
		alert('${n1} + ${n2} = ${resultado}');
        novOperacao()
	}

    function novOperacao(){
        let opcao = prompt("Deseja realizar uma nova operação?\n 1 -sim\n 2- não");

        if (opcao == 1){
            calculadora();
        }
        else if (opcao == 2){
            alert("Até mais !")
        }
        else{
            alert("Digite uma operação valida!")
            novOperacao()
        }
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


}
calculadora();