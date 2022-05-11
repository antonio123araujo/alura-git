var agora = new Date()
var hora = agora.getHours()
console.log(`AGORA SÃO EXATAMENTE ${hora} HORAS.`)
if (hora < 12) {
    console.log('Bom dia !')
}

else if (hora <= 18) {
    console.log('boa tarde')
}
else{
    console.log('boa noite')
}