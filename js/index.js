   /*
v=v.replace(/\D/g,'');
    v=v.replace(/(\d{1,2})$/, ',$1');  
    v=v.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');  
    v = v != ''?'R$ '+v:'';
    */
function intToCurrency(number) {
    var strNum = number.toString();
    strNum=strNum.replace(/\D/g,'');
    //Separa dois últimos dígitos por vírgula
    //strNum=strNum.replace(/(\d{1,2})$/, ',$1');
    //Separa milhares com ponto
    strNum=strNum.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');  
    //Adiciona "R$"
    strNum=strNum != ''?'R$ '+strNum:''; 
    return strNum;
}

function calculate() {
    var pessoas = $("#pessoas").val();
    var valorhora = $("#valorhora").val();
    var horassemana = $("#horassemana").val();
    var customensal = pessoas*valorhora*horassemana*4;
  
    $("#resultadomes").text(intToCurrency(customensal));
    $("#resultadoano").text(intToCurrency(customensal*11));
  }

$(document).ready(function() {

 
  
});