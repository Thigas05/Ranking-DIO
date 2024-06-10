let saldo = saldoVitoria(120, 10) 
let patamar = patente(saldo)

console.log( "O Herói tem de saldo de vitorias de " + saldo + " está no nível de " + patamar )

function saldoVitoria(vitorias, derrotas) {
    let soma = (vitorias - derrotas)
    return soma
}

function patente(teste){
    let nivel
    if ( teste == 10 )
        nivel = "Ferro"
    else if ( teste >= 11 && teste <= 20)
        nivel = "Bronze"
    else if ( teste >= 21 && teste <= 50)
        nivel = "Prata"
    else if ( teste >= 51 && teste <= 80)
        nivel = "Ouro"
    else if ( teste >= 81 && teste <= 90)
        nivel = "Diamante"
    else if ( teste >= 91 && teste <= 100)
        nivel = "Lenda"
    else nivel = "Imortal"
    return nivel
}