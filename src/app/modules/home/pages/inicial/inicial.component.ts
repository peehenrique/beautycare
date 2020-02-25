import { Component, OnInit } from '@angular/core';
import {trigger, style, animate, transition, state} from '@angular/animations';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }), 
        animate(1000,style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate(1000,style({ opacity: 0 }))
      ])
    ]),
  ]
})
export class InicialComponent implements OnInit {
  indexAtivo = 0;
  banner = [true,false,false,false];

  public dt:Date = new Date();
  public diaUm:Date = new Date(this.dt.setDate(1));
  public mesAtual:number = this.dt.getMonth();
  public nomeMeses:String[] = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
  public mesTxt:String = this.nomeMeses[this.mesAtual] + '/' + this.diaUm.getFullYear();
  public semanas:any[] = [];
  public eventos:any[] = [
    
    {
      mesAno:"11/2019",
      eventos:[
        {
          titulo: "APRESENTAÇÃO PROJETO - São Paulo",
          dias: [11],
          tipo:'Evento'
        }
      ]
    },
    {
      mesAno:"12/2019",
      eventos:[
        {
          titulo: "APRESENTAÇÃO PROJETO - São Paulo",
          dias: [3],
          tipo:'Evento'
        },
        {
          titulo: "REUNIÃO COMITÊ GESTOR - São Paulo",
          dias: [5],
          tipo:'Evento'
        }
      ]
    },
    {
      mesAno:"01/2020",
      eventos:[
        {
          titulo: "WORKSHOP EUROPA - São Paulo",
          dias: [31],
          tipo:'Evento'
        }
      ]
    },
    {
      mesAno:"02/2020",
      eventos:[
        {
          titulo: "APRESENTAÇÃO PROJETO - São Paulo",
          dias: [5],
          tipo:'Evento'
        },
        {
          titulo: "WORKSHOP EMIRADOS ÁRABES - São Paulo",
          dias: [17],
          tipo:'Evento'
        }
      ]
    },
    {
      mesAno:"03/2020",
      eventos:[
        {
          titulo: "APRESENTAÇÃO PROJETO - São Paulo",
          dias: [4],
          tipo:'Evento'
        },
        {
          titulo: "FEIRA COSMOPROF / COSMOPRIME / COSMOPACK - BOLOGNA",
          dias: [12,13,14,15,16],
          tipo:'Evento'
        },
        {
          titulo: "FEIRA IN-COSMETICS GLOBAL - BARCELONA",
          dias: [31],
          tipo:'Evento'
        }
      ]
    },
    {
      mesAno:"04/2020",
      eventos:[
        {
          titulo: "FEIRA IN-COSMETICS GLOBAL - BARCELONA",
          dias: [1,2],
          tipo:'Evento'
        },
        {
          titulo: "APRESENTAÇÃO PROJETO - São Paulo",
          dias: [7],
          tipo:'Evento'
        },
        {
          titulo: "WORKSHOP EUA - São Paulo",
          dias: [28],
          tipo:'Evento'
        },
      ]
    },
    {
      mesAno:"05/2020",
      eventos:[
        {
          titulo: "APRESENTAÇÃO PROJETO - São Paulo",
          dias: [5],
          tipo:'Evento'
        },
        {
          titulo: "REUNIÃO COMITÊ GESTOR - São Paulo",
          dias: [7],
          tipo:'Evento'
        },
        {
          titulo: "WORKSHOP MÉXICO - São Paulo",
          dias: [11],
          tipo:'Evento'
        },
        {
          titulo: "FEIRA BEAUTYWORLD MIDDLE EAST - DUABI",
          dias: [31],
          tipo:'Evento'
        },
      ]
    },
    {
      mesAno:"06/2020",
      eventos:[
        {
          titulo: "FEIRA BEAUTYWORLD MIDDLE EAST - DUABI",
          dias: [1,2],
          tipo:'Evento'
        },
        {
          titulo: "APRESENTAÇÃO PROJETO - São Paulo",
          dias: [8],
          tipo:'Evento'
        },
        {
          titulo: "WORKSHOP ÁFRICA DO SUL - São Paulo",
          dias: [15],
          tipo:'Evento'
        },
      ]
    },
    {
      mesAno:"07/2020",
      eventos:[
        {
          titulo: "APRESENTAÇÃO PROJETO - São Paulo",
          dias: [6],
          tipo:'Evento'
        },
        {
          titulo: "ROAD SHOW MÉXICO - CIDADE DO MÉXICO",
          dias: [20,21,22,23],
          tipo:'Evento'
        },
      ]
    },
    {
      mesAno:"08/2020",
      eventos:[
        {
          titulo: "APRESENTAÇÃO PROJETO - São Paulo",
          dias: [11],
          tipo:'Evento'
        },
        {
          titulo: "WORKSHOP RÚSSIA - São Paulo",
          dias: [18],
          tipo:'Evento'
        },
        {
          titulo: "ROAD SHOW ÁFRICA DO SUL - ÁFRICA DO SUL",
          dias: [24,25,26,27],
          tipo:'Evento'
        },
      ]
    },
    {
      mesAno:"09/2020",
      eventos:[
        {
          titulo: "APRESENTAÇÃO PROJETO - São Paulo",
          dias: [2],
          tipo:'Evento'
        },
        {
          titulo: "WORKSHOP ÍNDIA - São Paulo",
          dias: [16],
          tipo:'Evento'
        }
      ]
    },
    {
      mesAno:"10/2020",
      eventos:[
        {
          titulo: "APRESENTAÇÃO PROJETO - São Paulo",
          dias: [1],
          tipo:'Evento'
        },
        {
          titulo: "FEIRA IN-COSMETICS NORTH AMERICA - NOVA IORQUE",
          dias: [21,22],
          tipo:'Evento'
        },
        {
          titulo: "INTERCHARM PROFESSIONAL - MOSCOU",
          dias: [28,29,30,31],
          tipo:'Evento'
        }
      ]
    },
    {
      mesAno:"11/2020",
      eventos:[
        {
          titulo: "APRESENTAÇÃO PROJETO - São Paulo",
          dias: [4],
          tipo:'Evento'
        },
        {
          titulo: "RODADA DE NEGÓCIOS ÍNDIA - DELHI",
          dias: [16,17,18,19],
          tipo:'Evento'
        }
      ]
    },
    {
      mesAno:"12/2020",
      eventos:[
        {
          titulo: "REUNIÃO COMITÊ GESTOR - São Paulo",
          dias: [2],
          tipo:'Evento'
        },
        {
          titulo: "WORKSHOP EUROPA - São Paulo",
          dias: [3],
          tipo:'Evento'
        }
      ]
    },
  ];

  public eventosMes:any[]=[];

  constructor() { }

  ngOnInit() {
    setInterval(()=>{
      this.indexAtivo++;
      for(let x=0; x<this.banner.length;x++){
        this.banner[x]=false;
      }
      if(this.banner.length == this.indexAtivo){
        this.indexAtivo=0;
      }
      this.banner[this.indexAtivo] = true;
    },4000)

    this.montaCalendario();
  }

  public montaCalendario(){
    this.eventosMes = [];
    let mesAno = ((this.mesAtual+1) < 10?'0'+(this.mesAtual+1):(this.mesAtual+1)) + '/'+this.diaUm.getFullYear();
    this.eventos.forEach(lista =>{     
      if(lista.mesAno == mesAno){
        this.eventosMes = lista.eventos;
      }
    });
    while(true){
      let dias = [];
      for(let x=0;x<7;x++){
        let dia = this.diaUm.getDay();
        if(x>=dia){
          if(this.diaUm.getMonth() == this.mesAtual){
            dias.push({dia:this.diaUm.getDate(),dateEvent:this.isDateEvent(this.diaUm.getDate())});
          }else{
            dias.push({dia:null});
          }
          
          this.diaUm = new Date(this.diaUm.setDate(this.diaUm.getDate()+1));
        }else{
          dias.push({dia:null});
        }
      }
      this.semanas.push(dias);
      
      if(this.diaUm.getMonth() != this.mesAtual){
        break;
      }
    }
    console.log(this.eventosMes);
    
  }

  public isDateEvent(day){
    for(let x=0;x<this.eventosMes.length;x++){
      let evento = this.eventosMes[x];
      if(evento.dias.indexOf(day) != -1){
        return true;
      }
    }
    return false;
  }

}
