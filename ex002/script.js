function testar() {
    var anoNasc = document.getElementById('anoNasc')
    var sexo = document.getElementById('sexo')
    var data = new Date()
    var anoAt = data.getFullYear()
    var res = document.querySelector('div#res')

    if(anoNasc.value.length == 0 || anoNasc.value > anoAt){
        window.alert('[ERRO] ano invalido')
    } else{
        var sexo = document.getElementsByName('sex')
        var idade = anoAt - Number(anoNasc.value)
        var genero = ''
        if(sexo[0].checked){
            genero= 'homem'
        }else if (sexo[1].checked){
            genero = 'mulher'
        }else{
            window.alert('[ERRO] sexo não definido')
        }res.innerHTML = `você é um ${genero} de ${idade} anos`
    }
        
    

} 