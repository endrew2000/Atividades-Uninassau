const situacao = ["Vermelho","Amarelo","Verde"]
const idoso = 60

function analisePaciente() {

    const nome = document.getElementById("nome").value
    const idade = Number (document.getElementById("idade").value)
    const sexo = document.getElementById("sexo").value
    const resultado = document.getElementById("retorno")
    const buxo = document.getElementById("campo_gestante")
    const gestante = document.getElementById("gestante").value

    sexo === "Feminino" ? buxo.style.display = "block" : buxo.style.display = "none"

    if (!nome || !idade || !sexo || (sexo === "Feminino" && !gestante)){
        resultado.textContent = "Aguardando Preenchimento dos Dados..."
        return
    }

    if (idade >= idoso || (sexo == "Feminino" && gestante === "Sim")) {

        if (sexo == "Feminino" && gestante === "Sim") {

            resultado.textContent = `${nome} (${idade} anos, ${sexo}, Gestante) - Prioridade: ${situacao[1]}`

        } else {

        resultado.textContent = `${nome} (${idade} anos, ${sexo}) - Prioridade: ${situacao[1]}`

    } } else if ( idade <=12 ){

        resultado.textContent = `${nome} (${idade} anos, ${sexo}, Pediatria) - Prioridade: ${situacao[2]}`

    } else {

        resultado.textContent = `${nome} (${idade} anos, ${sexo}) - Prioridade: ${situacao[2]}`

    }

}

document.getElementById("triagem").addEventListener("input", analisePaciente);