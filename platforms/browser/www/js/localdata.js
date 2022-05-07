function CarregarBanco(){
  //nao consigo pensar em outro jeito
      let listaComum = [
//Tampa cega
        {nome: "Tampa Cega",combinacao: ["tampacega","tampacega","tampacega"]},
// Tomada Simples
        {nome: "Tomada Simples",combinacao: ["tomada"]},
        {nome: "Tomada Simples 20A",combinacao: ["tomada20A"]},
// Tomada Dupla
        {nome: "Tomada Dupla",combinacao: ["tomada","tomada"]},
        {nome: "Tomada Dupla 20A",combinacao: ["tomada20A","tomada20A"]},
// Tomada Tripla
        {nome: "Tomada Tripla",combinacao: ["tomada","tomada","tomada"]},
        {nome: "Tomada Tripla 20A",combinacao: ["tomada20A","tomada20A","tomada20A"]},
// Interruptor Simples 1,2 e 3
        {nome: "Interruptor Simples 1 Tecla",combinacao: ["interruptor"]},
        {nome: "Interruptor Simples 2 Teclas" ,combinacao: ["interruptor","interruptor"]},
        {nome: "Interruptor Simples 3 Teclas",combinacao: ["interruptor","interruptor","interruptor"]},
// Interruptor Paralelo 1,2 e 3
        {nome: "Interruptor Paralelo 1 Tecla",combinacao: ["paralelo"]},
        {nome: "Interruptor Paralelo 2 Teclas",combinacao: ["paralelo","paralelo"]},
        {nome: "Interruptor Paralelo 3 Teclas",combinacao: ["paralelo","paralelo","paralelo"]},
// Interruptor Simples 1 Tecla e tomada Simples conjugada
        {nome: "Interruptor Simples 1 Tecla e tomada Simples conjugada",combinacao: ["interruptor","tomada"]},
        {nome: "Interruptor Simples 1 Tecla e tomada Simples conjugada",combinacao: ["tomada","interruptor"]},
//Interruptor Simples 2 Teclas e tomada Simples conjugada
        {nome: "Interruptor Simples 2 Teclas e tomada Simples conjugada",combinacao: ["interruptor","interruptor","tomada"]},
        {nome: "Interruptor Simples 2 Teclas e tomada Simples conjugada",combinacao: ["interruptor","tomada","interruptor"]},
        {nome: "Interruptor Simples 2 Teclas e tomada Simples conjugada",combinacao: ["tomada","interruptor","interruptor"]},
//Interruptor paralelo 1 Tecla e tomada Simples conjugada
        {nome: "Interruptor paralelo 1 Tecla e tomada Simples conjugada",combinacao: ["paralelo","tomada"]},
        {nome: "Interruptor paralelo 1 Tecla e tomada Simples conjugada",combinacao: ["tomada","paralelo"]},
//Interruptor paralelo 2 Teclas e tomada Simples conjugada
        {nome: "Interruptor paralelo 2 Teclas e tomada Simples conjugada",combinacao: ["paralelo","paralelo","tomada"]},
        {nome: "Interruptor paralelo 2 Teclas e tomada Simples conjugada",combinacao: ["paralelo","tomada","paralelo"]},
        {nome: "Interruptor paralelo 2 Teclas e tomada Simples conjugada",combinacao: ["tomada","paralelo","paralelo"]},
//Interruptor Simples 1 Tecla e Interruptor Paralelo 1 Tecla conjugada
        {nome: "Interruptor Simples 1 Tecla e Interruptor Paralelo 1 Tecla conjugada",combinacao: ["interruptor","paralelo"]},
        {nome: "Interruptor Simples 1 Tecla e Interruptor Paralelo 1 Tecla conjugada",combinacao: ["paralelo","interruptor"]},
//Interruptor Simples 2 Teclas e Interruptor Paralelo 1 Tecla conjugada
        {nome: "Interruptor Simples 2 Teclas e Interruptor Paralelo 1 Tecla conjugada",combinacao: ["interruptor","interruptor","paralelo"]},
        {nome: "Interruptor Simples 2 Teclas e Interruptor Paralelo 1 Tecla conjugada",combinacao: ["interruptor","paralelo","interruptor"]},
        {nome: "Interruptor Simples 2 Teclas e Interruptor Paralelo 1 Tecla conjugada",combinacao: ["paralelo","interruptor","interruptor"]},
//Interruptor Paralelo 2 Teclas e Interruptor Simples 1 Tecla conjugada
        {nome: "Interruptor Paralelo 2 Teclas e Interruptor Simples 1 Tecla conjugada",combinacao: ["paralelo","paralelo","interruptor"]},
        {nome: "Interruptor Paralelo 2 Teclas e Interruptor Simples 1 Tecla conjugada",combinacao: ["paralelo","interruptor","paralelo"]},
        {nome: "Interruptor Paralelo 2 Teclas e Interruptor Simples 1 Tecla conjugada",combinacao: ["interruptor","paralelo","paralelo"]},
//Interruptor Paralelo 1 Tecla, Interruptor Simples 1 Tecla e Tomada conjugada
        {nome: "Interruptor Paralelo 1 Tecla, Interruptor Simples 1 Tecla e Tomada conjugada",combinacao: ["paralelo","interruptor","tomada"]},
        {nome: "Interruptor Paralelo 1 Tecla, Interruptor Simples 1 Tecla e Tomada conjugada",combinacao: ["paralelo","tomada","interruptor"]},
        {nome: "Interruptor Paralelo 1 Tecla, Interruptor Simples 1 Tecla e Tomada conjugada",combinacao: ["interruptor","paralelo","tomada"]},
        {nome: "Interruptor Paralelo 1 Tecla, Interruptor Simples 1 Tecla e Tomada conjugada",combinacao: ["interruptor","tomada","paralelo"]},
        {nome: "Interruptor Paralelo 1 Tecla, Interruptor Simples 1 Tecla e Tomada conjugada",combinacao: ["tomada","interruptor","paralelo"]},
        {nome: "Interruptor Paralelo 1 Tecla, Interruptor Simples 1 Tecla e Tomada conjugada",combinacao: ["tomada","paralelo","interruptor"]},
//Tomada Simples e Tomada 20A conjugada
        {nome: "Tomada Simples e Tomada 20A conjugada",combinacao: ["tomada20A","tomada"]},
        {nome: "Tomada Simples e Tomada 20A conjugada",combinacao: ["tomada","tomada20A"]},
//Interruptor Simples e Tomada 20A conjugada
        {nome: "Interruptor Simples e Tomada 20A conjugada",combinacao: ["tomada20A","interruptor"]},
        {nome: "Interruptor Simples e Tomada 20A conjugada",combinacao: ["interruptor","tomada20A"]},
//Interruptor paralelo e Tomada 20A conjugada
        {nome: "Interruptor paralelo e Tomada 20A conjugada",combinacao: ["tomada20A","paralelo"]},
        {nome: "Interruptor paralelo e Tomada 20A conjugada",combinacao: ["paralelo","tomada20A"]},
//Interruptor Simples 2 Teclas e Tomada 20A
        {nome: "Interruptor Simples 2 Teclas e Tomada 20A conjugada",combinacao: ["interruptor","interruptor","tomada20A"]},
        {nome: "Interruptor Simples 2 Teclas e Tomada 20A conjugada",combinacao: ["interruptor","tomada20A","interruptor"]},
        {nome: "Interruptor Simples 2 Teclas e Tomada 20A conjugada",combinacao: ["tomada20A","interruptor","interruptor"]},
//Interruptor Paralelo 2 Teclas e Tomada 20A
        {nome: "Interruptor Paralelo 2 Teclas e Tomada 20A conjugada",combinacao: ["interruptor","interruptor","tomada20A"]},
        {nome: "Interruptor Paralelo 2 Teclas e Tomada 20A conjugada",combinacao: ["interruptor","tomada20A","interruptor"]},
        {nome: "Interruptor Paralelo 2 Teclas e Tomada 20A conjugada",combinacao: ["tomada20A","interruptor","interruptor"]},

      ];

      if(localStorage.getItem("ListaComum")){
          ListaComum = JSON.parse(localStorage.getItem("ListaComum"));
          if(ListaComum.length < listaComum.length) {
            ListaComum = listaComum;
            localStorage.setItem("ListaComum",JSON.stringify(ListaComum));
          }
      }else{
          ListaComum = listaComum;
          localStorage.setItem("ListaComum",JSON.stringify(ListaComum));
      }

}
//document.addEventListener("deviceready", CarregarBanco, false);
document.addEventListener("DOMContentLoaded", CarregarBanco);
