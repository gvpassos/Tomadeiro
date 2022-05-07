"use strict"
const caixinha  = document.getElementById("caixinha");
var ListaComum = [];
function mudarFuncao(id){
    let funcoes = [
            document.getElementById('ListasTomadas'),
            document.getElementById('ListaDisjuntores'),
            document.getElementById('ListaFios'),
          ];

    funcoes.forEach(function (funcao) {
      if(funcao.getAttribute('id') == id){
        funcao.setAttribute('class','mostrar');
      }else{
        funcao.setAttribute('class','esconder');
      }
    });


 }
function imprimirConteudo(){

  const css ="<style>"+
              "table.paleBlueRows{border: 1px solid #4F4F4F;width: 99vw;text-align: center;border-collapse: collapse;}"+
              "table.paleBlueRows td, table.paleBlueRows th {border: 1px solid #4F4F4F;padding: 3px 2px;font-weight: normal}"+
              "table.paleBlueRows tbody td {font-size: 13px;}"+
              "table.paleBlueRows tr:nth-child(even) {background: #F4F2F2;}"+"+"+
              "table.paleBlueRows thead {background-color: #C0C0C0;border-bottom: 1px solid #4F4F4F;}"+
              "table.paleBlueRows thead th {background-color: #C0C0C0;font-size:20px;font-weight: bold;color: black;text-align: center;border-left: 1px solid #4F4F4F;}"+
              "table.paleBlueRows thead th:first-child {border-left: none;}table.paleBlueRows tfoot {font-size: 16px;font-weight: normal;color: #333333;border-top: 3px solid #444444;}"+
              "table.paleBlueRows tfoot td {font-size: 14px;}"+
              "</style>";

  let tabelaDis ="",tabelaTom = "",tabelaFios = "";
  if(Disjuntores.ListaPronta.length){
    if(confirm("Imprimir tabela de Disjuntores")){
      tabelaDis = "<table class='paleBlueRows'><thead><tr><th scope='col'>Disjuntores</th><th scope='col'>Quants</th></tr></thead>"+
      "<tbody>";
      Disjuntores.ListaPronta.forEach(function(item,pos) {
        tabelaDis += "<tr><th scope='row'>Disjuntor <label>"+
          item.Polar +
          "</label> de <label>" +
          item.Ampere +
          "</label> Amperes</th><td data-title='Quants'>"+
          item.Quant +
          " Unidade";
          if(Number(item.Quant) > 1) tabelaDis += "s";
          tabelaDis += "</td></tr>";
        });
      }
      tabelaDis += "</tbody></table>";

    }

  if(Fios.ListaPronta.length){
    if(confirm("Imprimir tabela de Fios")){
      tabelaFios = "<table class='paleBlueRows'><thead><tr><th scope='col'>Fios</th><th scope='col'>Quants</th></tr></thead>"+
      "<tbody>";
      Fios.ListaPronta.forEach(function(item,pos) {
        tabelaFios += "<tr><th scope='row'>Fio de <label>"+
          item.Secao +
          " mm " +
          item.Cor +
          "</label></th><td data-title='Quants'>"+
          item.Quant +
          " "+
          item.TipoQuant;
          if(Number(item.Quant) > 1 && item.TipoQuant == "rolo") tabelaFios += "s";
          tabelaFios += "</td></tr>";
        });
      }
      tabelaFios += "</tbody></table>";

    }

  if(Pontos.ListaPronta.length){
    if(confirm("Imprimir tabela de Pontos")){
      tabelaTom = "<table class='paleBlueRows'><thead><tr><th scope='col'>Pontos</th><th scope='col'>Quants</th></tr></thead>"+
      "<tbody>";
      Pontos.ListaPronta.forEach(function(item,pos) {
        tabelaTom += "<tr><th scope='row'>"+
         item.nome +
         "</th><td data-title='Quants'>"+
         item.quant+
         " Unidade";
         if(Number(item.quant) > 1) tabelaTom += "s";
         tabelaTom += "</td></tr>";
      });
        tabelaTom += "</tbody></table>";
    }
  }

  localStorage.setItem('tabela',"<html><head>" + css +"</head><body>"+ tabelaDis + "<br><br>" + tabelaFios +"<br><br>" + tabelaTom +"</body></html>");

  let nomedoarquivo = prompt("nome da lista","Listas de materiais.pdf");

  let options = {
              documentSize: 'A4',
              type: 'share',
              fileName: nomedoarquivo,
              landscape: "portrait",
            }

  pdf.fromData( localStorage.getItem("tabela"), options);


  //localStorage.setItem('tabela',"<table style='border:1px solid black'>"+tabela.innerHTML+"</table>");

}


var Pontos = {
 ListaPronta : [],
 PontoAdicionado: [],

 AdicionarModulo: function(Modulo){
   if(Modulo == "tampacega"){
     if(this.PontoAdicionado.length) {
       alert("Para inserir uma Tampa cega é necessario um ponto vazio !");
       return false;
     }

     this.PontoAdicionado = ["tampacega","tampacega","tampacega"];
     caixinha.innerHTML = "<div class='tampacega' onclick='Pontos.removerModulos(this)'>TAMPA CEGA</div>"

     return;
   }

   if(this.PontoAdicionado.length >=3){
     alert("no maximo 3 por ponto");
     return;
   }

   this.PontoAdicionado.push(Modulo);
   caixinha.innerHTML += "<div class='"+Modulo+"' onclick='Pontos.removerModulos(this)'>"+Modulo+"</div>";
 },
 ProximoPonto: function(){
   if(!this.PontoAdicionado.length) {alert(" ponto vazio !");return}
   let naoTem = ListaComum.every(function(item,index) {
       if(Pontos.PontoAdicionado.toString() === item.combinacao.toString()){
         console.log(index);
           if(!Pontos.ListaPronta.length){
             console.log(Pontos.ListaPronta.length,"entrou")
             Pontos.ListaPronta.push({nome:item.nome,quant:1});
             return false;
           }
           let naoachei = Pontos.ListaPronta.every(function(modulo,indice) {
                           console.log("procurando");
                             if(modulo.nome === item.nome){
                               console.log("achou");
                               modulo.quant++;
                               return false;
                             }
                             return true;
                         });
           if(naoachei){
             console.log('nao achou');
             Pontos.ListaPronta.push({nome:item.nome,quant:1});
           }
           return false;
       }
       return true;
     });
     if(naoTem){
       let nomePonto = "";
         do{
           nomePonto = prompt("Nova combinação, digite um nome:", this.PontoAdicionado);
         }while(nomePonto == "" || nomePonto == null);

         ListaComum.push({nome: nomePonto,combinacao:this.PontoAdicionado});
         localStorage.setItem("ListaComum",JSON.stringify(ListaComum));

         let naoNovaComb = Pontos.ListaPronta.every(function(modulo,indice) {
             if(modulo.nome === nomePonto){
               modulo.quant++;
               return false;
             }
             return true;
         });
         if (naoNovaComb) {
             this.ListaPronta.push({nome:nomePonto,quant:1});
         }
     }
   caixinha.innerHTML = "";
   this.PontoAdicionado = [];
   //console.log(this.ListaPronta);
   document.getElementById("ultimoAdicionada").innerHTML = this.ListaPronta[this.ListaPronta.length-1].nome +": "+this.ListaPronta[this.ListaPronta.length-1].quant;
   //localStorage.setItem("ListaPronta",JSON.stringify(this.ListaPronta));
 },
 LimparPonto: function(){
   caixinha.innerHTML = "";
   if(!this.PontoAdicionado.length) {
     alert("Ponto limpo");
     return;
   }
   this.PontoAdicionado.length = [];
 },
 removerModulos:function(button){
   let texto = button.getAttribute("class");
   button.parentNode.removeChild(button);
   if(texto === "tampacega"){this.PontoAdicionado = [];return false;}
   for( let i = 0; i < this.PontoAdicionado.length; i++){
        if (  this.PontoAdicionado[i] === texto) {
             this.PontoAdicionado.splice(i, 1);
             break;
        }
    }
 },
 EditarPontos:function(lista){
   let editador;
   let editadorTabela;
   if(document.getElementById("editadora")){
     editador = document.getElementById("editadora");
     editadorTabela = document.getElementsByTagName("table")[0];
   }
   else {editador = document.createElement("div");
     editador.setAttribute("class","editadora");
     editador.setAttribute("id","editadora");
     const editadorCabecalho = document.createElement("select");
            editadorCabecalho.setAttribute("id","editadoraOpt");
            editadorCabecalho.innerHTML = "<option value='ListaPronta'>Lista feita</option>";
            editadorCabecalho.innerHTML += "<option value='ListaComum'>Lista de nomes</option>";
            editador.appendChild(editadorCabecalho);
     editador.innerHTML += "<button onclick='Pontos.EditarPontos(document.getElementById(\"editadoraOpt\").value)'>gerar</button><button onclick='Pontos.fecharEditarPontos()'>fechar</button></button><button onclick='Pontos.ListaPronta = [],Pontos.EditarPontos(\"ListaPronta\")'>LimparLista</button>";
     editadorTabela  = document.createElement("table");
     editadorTabela.setAttribute("class","editadoratable");
   }


   if(lista === "ListaPronta"){
     editadorTabela.innerHTML = "<thead><tr><td>Ponto</td><td>Quant</td><td>DEL</tr></thead><tbody>";
     for( let i = 0; i < this.ListaPronta.length; i++){
         editadorTabela.innerHTML += "<tr><td>"+ this.ListaPronta[i].nome +"</td><td>"+this.ListaPronta[i].quant+"</td><td><a onclick=\"Pontos.removerPontoLista('"+lista+"',"+i+")\">x</a></td></tr>";
     }
   }else if(lista === "ListaComum"){
      editadorTabela.innerHTML = "<thead><tr><td>Nome</td><td>Combinação</td></thead><tbody>";
     for( let i = 0; i < ListaComum.length; i++){
         editadorTabela.innerHTML += "<tr><td>"+ ListaComum[i].nome +"</td><td>"+ListaComum[i].combinacao+"</td></tr>";
     }
   }
   editadorTabela.innerHTML += "</tbody></table>";

   document.getElementById("topnav").appendChild(editador);
   document.getElementById("editadora").appendChild(editadorTabela);
 },
 fecharEditarPontos:function(){
  document.getElementById("editadora").parentNode.removeChild(document.getElementById("editadora"));
 },
 removerPontoLista:function(lista,i){
   if(lista == 'ListaPronta'){
     if(this.ListaPronta[i].quant == 1 ){
       this.ListaPronta.splice(i,1);
       this.EditarPontos("ListaPronta");
       return false;
     }
     this.ListaPronta[i].quant -= 1;
     this.EditarPontos("ListaPronta");
   }
 },
};


var Disjuntores = {
  ListaPronta : [],

  Adicionar : function(polar,amperes,quant){

    if( polar != null){

      let nova = this.ListaPronta.every(function(item){
          if(item.Polar == polar.value && Number(item.Ampere) == Number(amperes.value) ){
            item.Quant = Number(item.Quant) + Number(quant.value);
            return false;
          }
          return true;
      });
        if(nova){
          this.ListaPronta.push(
            {
              Polar:polar.value,
              Ampere:amperes.value,
              Quant:quant.value
            }
          );
        }
    }
    let ListaDisjuntores  = document.getElementById('listagemDisjuntores');
    let HTML = "";
    this.ListaPronta.forEach(function(item,ind){
    HTML += "<li><a onclick='Disjuntores.removerItem(\""+ind+
      "\")'>Disjuntor <label>"+
      item.Polar +
      "</label> de <label>" +
      item.Ampere +
      "</label> Amperes :<label>"+
      item.Quant +
      "</label> Unidades</a></li>"});


    ListaDisjuntores.innerHTML = HTML;


  },
  removerItem: function(id) {
      if(confirm("Deseja remover Disjuntor  "+this.ListaPronta[id].Polar +" de "+this.ListaPronta[id].Ampere +"A")){
          if(this.ListaPronta[id].Quant == Number(1)){
            this.ListaPronta.splice(id,1);
          }
          else{
            this.ListaPronta[id].Quant -= 1;
          }
        Disjuntores.Adicionar(null);
      }
  },
}


var Fios = {
  ListaFios  : document.getElementById('listagemFios'),
  ListaPronta: [],

  Adicionar:function(secao,cor,quant,tipoQ){
    if( secao != null){
      let nova = this.ListaPronta.every(function(item){
          let auxTipo = document.querySelector('input[name="tipoQuant"]:checked').value
          if(item.Secao == secao.value && item.Cor == cor.value && item.TipoQuant == auxTipo){
            item.Quant = Number(item.Quant) + Number(quant.value);
            return false;
          }
          return true;
      });
        if(nova){
          this.ListaPronta.push(
            {
              Secao:secao.value,
              Cor:cor.value,
              Quant:quant.value,
              TipoQuant:this.getTipoQuant(tipoQ),
            }
          );
        }
    }
    let HTML = "";
    this.ListaPronta.forEach(function(item,ind){
    HTML += "<li><a onclick='Fios.removerItem(\""+ind+
      "\")'>Fio de  <label>"+
      item.Secao +
      " mm " +
      item.Cor +
      "</label> : <label>"+
      item.Quant +" "+ item.TipoQuant;
      if(Number(item.Quant) > 1 && item.TipoQuant != "metros") HTML +="s";
      "</label></a></li>"});


    this.ListaFios.innerHTML = HTML;




  },
  removerItem:function(id){
    if(confirm("Deseja remover fio de "+this.ListaPronta[id].Secao+" "+this.ListaPronta[id].Cor)){
        if(this.ListaPronta[id].TipoQuant == "metros") {
          this.ListaPronta.splice(id,1);/// Remover completamente
          this.Adicionar(null);
          return;
        }
        if(this.ListaPronta[id].Quant == Number(1)){
          this.ListaPronta.splice(id,1);
        }
        else{
          this.ListaPronta[id].Quant -= 1;
        }
      this.Adicionar(null);
    }
  },

  getTipoQuant:function(radio){
    let nomeTipo;
    radio.forEach(function(tipo){
      if(tipo.checked){ nomeTipo = tipo.value}
    });
    radio[0].checked = true;
    return nomeTipo;
  },


}
