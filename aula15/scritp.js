function verificar() {
   var data = new Date()
   var ano = data.getFullYear()  /* ano atual com dois digitos */
   var fano = document.getElementById ('txtano') /* variavel txtano vem do modelo */
   var res = document.querySelector('div#res')
        if (fano.value.length == 0 || Number(fano.value) > ano) 
        {
            window.alert('[erro] verifique os dados e tente novemente')
        } 
        else 
        {
            var fsex = document.getElementsByName('radsex')
            var idade = ano - Number(fano.value)
            var gênero = ''
                var img = document.createElement('img')
                img.setAttribute('id','foto')

            if (fsex[0].checked) {

                gênero = 'Homem'


                if (idade >= 0 && idade< 10) {

                    //Criança
                    img.setAttribute('src', 'foto-bebe-m.png')
                } else if (idade < 21){
                    //jovem
                    img.setAttribute('src', 'foto-jovem-m.png')

                } else if(idade < 50) {
                    //Atulto
                    img.setAttribute('src', 'foto-adulto-m.png')

                }else {
                    // idoso
                    img.setAttribute('SRC', 'foto-idoso-m.png')
                }
                    

            } else if (fsex[1].checked) {

                gênero = 'Mulher'

                if (idade >= 0 && idade< 10) {

                    //Criança
                    img.setAttribute('src', 'foto-bebe-f.png')
                } else if (idade < 21){
                    //jovem
                    img.setAttribute('src', 'foto-jovem-f.png')

                } else if(idade < 50) {
                    //Atulto
                    img.setAttribute('src', 'foto-adulto-f.png')

                }else {
                    // idoso
                    img.setAttribute('SRC', 'foto-idoso-f.png')
                
                }
            }
            res.style.textAlign = 'center' /* centraliza o testo */
            res.innerHTML = ` Detectamos ${gênero} com ${idade} anos.`
            res.appendChild(img) // appendchild para mostra o elemento imagem


        }

}