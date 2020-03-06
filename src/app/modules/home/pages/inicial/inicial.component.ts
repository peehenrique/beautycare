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
          tipo:'Evento',
          show:false,
          texto:`O evento
          destina-se à empresas ainda não participantes do projeto Beautucare Brazil, com a
          finalidade de apresentar a estratégia, forma de atuação, próximas ações e como
          participar deste Projeto Setorial, e também uma introdução à ABIHPEC e suas áreas
          de trabalho.`
        }
      ]
    },
    {
      mesAno:"12/2019",
      eventos:[
        {
          titulo: "APRESENTAÇÃO PROJETO - São Paulo",
          dias: [3],
          tipo:'Evento',
          show:false,
          texto:`O evento
          destina-se à empresas ainda não participantes do projeto Beautucare Brazil, com a
          finalidade de apresentar a estratégia, forma de atuação, próximas ações e como
          participar deste Projeto Setorial, e também uma introdução à ABIHPEC e suas áreas
          de trabalho.`
        },
        {
          titulo: "REUNIÃO COMITÊ GESTOR - São Paulo",
          dias: [5],
          tipo:'Evento',
          show:false,
          texto:`Reunião para apresentação de
          Resultados e Definição de estratégias do projeto Beautycare Brazil.`
        }
      ]
    },
    {
      mesAno:"01/2020",
      eventos:[
        {
          titulo: "WORKSHOP EUROPA - São Paulo",
          dias: [31],
          tipo:'Evento',
          show:false,
          texto:`Workshops: Apresentação de informações aprofundadas sobre
          mercados direcionado ao segmento de beleza, para melhor compreensão de
          competitividade e oportunidades. Temas abordados: resultados do projeto, assuntos
          regulatórias, acordos comerciais, hábitos de consumo e dados de mercado.`
        }
      ]
    },
    {
      mesAno:"02/2020",
      eventos:[
        {
          titulo: "APRESENTAÇÃO PROJETO - São Paulo",
          dias: [5],
          tipo:'Evento',
          show:false,
          texto:`O evento
          destina-se à empresas ainda não participantes do projeto Beautucare Brazil, com a
          finalidade de apresentar a estratégia, forma de atuação, próximas ações e como
          participar deste Projeto Setorial, e também uma introdução à ABIHPEC e suas áreas
          de trabalho.`
        },
        {
          titulo: "WORKSHOP EMIRADOS ÁRABES - São Paulo",
          dias: [17],
          tipo:'Evento',
          show:false,
          texto:`Workshops: Apresentação de informações aprofundadas sobre
          mercados direcionado ao segmento de beleza, para melhor compreensão de
          competitividade e oportunidades. Temas abordados: resultados do projeto, assuntos
          regulatórias, acordos comerciais, hábitos de consumo e dados de mercado.`
        }
      ]
    },
    {
      mesAno:"03/2020",
      eventos:[
        {
          titulo: "APRESENTAÇÃO PROJETO - São Paulo",
          dias: [4],
          tipo:'Evento',
          show:false,
          texto:`O evento
          destina-se à empresas ainda não participantes do projeto Beautucare Brazil, com a
          finalidade de apresentar a estratégia, forma de atuação, próximas ações e como
          participar deste Projeto Setorial, e também uma introdução à ABIHPEC e suas áreas
          de trabalho.`
        }
      ]
    },
    {
      mesAno:"04/2020",
      eventos:[
        {
          titulo: "APRESENTAÇÃO PROJETO - São Paulo",
          dias: [7],
          tipo:'Evento',
          show:false,
          texto:`O evento
          destina-se à empresas ainda não participantes do projeto Beautucare Brazil, com a
          finalidade de apresentar a estratégia, forma de atuação, próximas ações e como
          participar deste Projeto Setorial, e também uma introdução à ABIHPEC e suas áreas
          de trabalho.`
        },
        {
          titulo: "WORKSHOP EUA - São Paulo",
          dias: [28],
          tipo:'Evento',
          show:false,
          texto:`Workshops: Apresentação de informações aprofundadas sobre
          mercados direcionado ao segmento de beleza, para melhor compreensão de
          competitividade e oportunidades. Temas abordados: resultados do projeto, assuntos
          regulatórias, acordos comerciais, hábitos de consumo e dados de mercado.`
        },
      ]
    },
    {
      mesAno:"05/2020",
      eventos:[
        {
          titulo: "APRESENTAÇÃO PROJETO - São Paulo",
          dias: [5],
          tipo:'Evento',
          show:false,
          texto:`O evento
          destina-se à empresas ainda não participantes do projeto Beautucare Brazil, com a
          finalidade de apresentar a estratégia, forma de atuação, próximas ações e como
          participar deste Projeto Setorial, e também uma introdução à ABIHPEC e suas áreas
          de trabalho.`
        },
        {
          titulo: "REUNIÃO COMITÊ GESTOR - São Paulo",
          dias: [7],
          tipo:'Evento',
          show:false,
          texto:`Reunião para apresentação de
          Resultados e Definição de estratégias do projeto Beautycare Brazil.`
        },
        {
          titulo: "WORKSHOP MÉXICO - São Paulo",
          dias: [11],
          tipo:'Evento',
          show:false,
          texto:`Workshops: Apresentação de informações aprofundadas sobre
          mercados direcionado ao segmento de beleza, para melhor compreensão de
          competitividade e oportunidades. Temas abordados: resultados do projeto, assuntos
          regulatórias, acordos comerciais, hábitos de consumo e dados de mercado.`
        },
        {
          titulo: "FEIRA BEAUTYWORLD MIDDLE EAST - DUABI",
          dias: [31],
          textDays:'31 - 1, 2',
          tipo:'Evento',
          show:false,
          texto:`Evento voltado para empresas do setor HPPC ( Higiene Pessoal, Perfumaria e Cosméticos). O setor participa desta feira desde o ano 2003, obtendo excelentes resultados de exportação para países do Oriente Médio e Norte da África (MENA - Middle East and North Africa). Dubai é um mercado que funciona como plataforma de expansão para outros mercados do MENA, devido à sua influência em outros países, tornando esta feira a mais importante da região.  Por também ser reconhecido como um importante centro de distribuição mundial, por meio de suas zonas de livre comércio, Dubai possibilita a armazenagem e pulverização de produtos para diversos países do mundo, facilitando as pequenas operações e vendas brasileiras para mercados asiáticos, que utilizam a proximidade geográfica do país para agilizar a entrega e facilitar vendas de pequenos lotes, descentralizando a operação com saída do Brasil. Sendo um evento realizado em Dubai, Emirado com regras e leis menos restritivas que muitos outros países Árabes, o evento atrai visitantes de toda a região e de muitos países asiáticos, além de outros continentes. Este evento está com a capacidade máxima de expositores e a saída de um expositor é praticamente condição obrigatória para a entrada de um novo, tamanha importância do evento. Os principais concorrentes mundiais do setor HPPC não só estão presentes no evento, como também possuem grande representatividade em sua participação (exemplo Turquia, que ocupa aproximadamente 2.000m2 no evento, com mais de 50 expositores).`
        },
      ]
    },
    {
      mesAno:"06/2020",
      eventos:[
        {
          titulo: "FEIRA BEAUTYWORLD MIDDLE EAST - DUBAI",
          dias: [1,2],
          textDays:'31 - 1, 2',
          tipo:'Evento',
          show:false,
          texto:`Evento voltado para empresas do setor HPPC ( Higiene Pessoal, Perfumaria e Cosméticos). O setor participa desta feira desde o ano 2003, obtendo excelentes resultados de exportação para países do Oriente Médio e Norte da África (MENA - Middle East and North Africa). Dubai é um mercado que funciona como plataforma de expansão para outros mercados do MENA, devido à sua influência em outros países, tornando esta feira a mais importante da região.  Por também ser reconhecido como um importante centro de distribuição mundial, por meio de suas zonas de livre comércio, Dubai possibilita a armazenagem e pulverização de produtos para diversos países do mundo, facilitando as pequenas operações e vendas brasileiras para mercados asiáticos, que utilizam a proximidade geográfica do país para agilizar a entrega e facilitar vendas de pequenos lotes, descentralizando a operação com saída do Brasil. Sendo um evento realizado em Dubai, Emirado com regras e leis menos restritivas que muitos outros países Árabes, o evento atrai visitantes de toda a região e de muitos países asiáticos, além de outros continentes. Este evento está com a capacidade máxima de expositores e a saída de um expositor é praticamente condição obrigatória para a entrada de um novo, tamanha importância do evento. Os principais concorrentes mundiais do setor HPPC não só estão presentes no evento, como também possuem grande representatividade em sua participação (exemplo Turquia, que ocupa aproximadamente 2.000m2 no evento, com mais de 50 expositores).`
        },
        {
          titulo: "APRESENTAÇÃO PROJETO - São Paulo",
          dias: [8],
          tipo:'Evento',
          show:false,
          texto:`O evento
          destina-se à empresas ainda não participantes do projeto Beautucare Brazil, com a
          finalidade de apresentar a estratégia, forma de atuação, próximas ações e como
          participar deste Projeto Setorial, e também uma introdução à ABIHPEC e suas áreas
          de trabalho.`
        },
        {
          titulo: "FEIRA COSMOPROF / COSMOPRIME / COSMOPACK - BOLOGNA",
          dias: [11,12,13,14,15],
          tipo:'Evento',
          show:false,
          texto:`Evento voltado
          para empresas do setor HPPC (Higiene Pessoal, Perfumaria e
          Cosméticos). Considerado como o evento de HPPC mais importante do mundo, que
          terá a sua 53ª edição em 2020, atrai grande número de visitantes de todos os
          continentes, além de contar com representantes de todos os principais concorrentes
          brasileiros no mundo (70 países estão presentes no evento). Não há hoje nenhum
          outro evento de tamanha relevância em toda Europa como este. A partir de 2015, a
          estratégia de participação neste evento foi ajustada de acordo com a necessidade
          das empresas: separação de grupos por categorias de produtos, conforme
          distribuição dos pavilhões do evento (setorização).`
        },
        {
          titulo: "WORKSHOP ÁFRICA DO SUL - São Paulo",
          dias: [15],
          tipo:'Evento',
          show:false,
          texto:`Workshops: Apresentação de informações aprofundadas sobre
          mercados direcionado ao segmento de beleza, para melhor compreensão de
          competitividade e oportunidades. Temas abordados: resultados do projeto, assuntos
          regulatórias, acordos comerciais, hábitos de consumo e dados de mercado.`
        },
        {
          titulo: "FEIRA IN-COSMETICS GLOBAL - BARCELONA",
          dias: [30],
          tipo:'Evento',
          textDays:'30 - 02',
          show:false,
          texto:`Evento voltado para empresas do setor HPPC (Higiene Pessoal, Perfumaria e Cosméticos). A feira in-cosmetics está consolidada como o principal evento para os fabricantes de matéria-prima do setor. Realizada anualmente em países diferentes da Europa, é um evento itinerante que a cada 3 anos retorna para a edição considerada como a principal realizada na Europa, na cidade de Paris.
          O evento possui ações paralelas de foco educacional (seminário e workshops científicos), criando uma plataforma de negócios e de conhecimento dos novos ingredientes. A exposição reúne mais de 800 expositores de ingredientes, fragrâncias, equipamentos de laboratório, testes e soluções regulatórias com até 10.000 fabricantes de cosméticos em todo o mundo. É a plataforma de lançamento Global para inovação em ingredientes e tecnologias.`
        }
      ]
    },
    {
      mesAno:"07/2020",
      eventos:[
        {
          titulo: "FEIRA IN-COSMETICS GLOBAL - BARCELONA",
          dias: [1,2],
          textDays:'30 - 1, 2',
          tipo:'Evento',
          show:false,
          texto:`Evento voltado para empresas do setor HPPC (Higiene Pessoal, Perfumaria e Cosméticos). A feira in-cosmetics está consolidada como o principal evento para os fabricantes de matéria-prima do setor. Realizada anualmente em países diferentes da Europa, é um evento itinerante que a cada 3 anos retorna para a edição considerada como a principal realizada na Europa, na cidade de Paris.
          O evento possui ações paralelas de foco educacional (seminário e workshops científicos), criando uma plataforma de negócios e de conhecimento dos novos ingredientes. A exposição reúne mais de 800 expositores de ingredientes, fragrâncias, equipamentos de laboratório, testes e soluções regulatórias com até 10.000 fabricantes de cosméticos em todo o mundo. É a plataforma de lançamento Global para inovação em ingredientes e tecnologias.`
        },
        {
          titulo: "APRESENTAÇÃO PROJETO - São Paulo",
          dias: [6],
          tipo:'Evento',
          show:false,
          texto:`O evento
          destina-se à empresas ainda não participantes do projeto Beautucare Brazil, com a
          finalidade de apresentar a estratégia, forma de atuação, próximas ações e como
          participar deste Projeto Setorial, e também uma introdução à ABIHPEC e suas áreas
          de trabalho.`
        },
        {
          titulo: "ROAD SHOW MÉXICO - CIDADE DO MÉXICO",
          dias: [20,21,22,23],
          tipo:'Evento',
          show:false,
          texto:`Encontro entre as empresas participantes do projeto com potenciais compradores, nas instalações destes potenciais parceiros. O evento é realizado após o processo de levantamento de informações no país de destino e matchmaking entre fabricantes, distribuidores, importadores e as empresas brasileiras inscritas. Durante o evento, são realizadas reuniões individuais por empresa participante e potenciais compradores em suas próprias instalações, em substituição à rodada de negócios usualmente realizada em hotéis. É importante destacar que por se tratar de uma ação customizada de acordo com o perfil que a empresa brasileira busca no país alvo, é possível atingir um maior número de diferentes contatos comerciais pois todas as empresas locais poderão selecionar, efetivamente, a empresa brasileira com maior similaridade à sua estratégia, independente do setor, segmento ou vertical do projeto.`
        },
      ]
    },
    {
      mesAno:"08/2020",
      eventos:[
        {
          titulo: "APRESENTAÇÃO PROJETO - São Paulo",
          dias: [11],
          tipo:'Evento',
          show:false,
          texto:`O evento
          destina-se à empresas ainda não participantes do projeto Beautucare Brazil, com a
          finalidade de apresentar a estratégia, forma de atuação, próximas ações e como
          participar deste Projeto Setorial, e também uma introdução à ABIHPEC e suas áreas
          de trabalho.`
        },
        {
          titulo: "WORKSHOP RÚSSIA - São Paulo",
          dias: [18],
          tipo:'Evento',
          show:false,
          texto:`Workshops: Apresentação de informações aprofundadas sobre
          mercados direcionado ao segmento de beleza, para melhor compreensão de
          competitividade e oportunidades. Temas abordados: resultados do projeto, assuntos
          regulatórias, acordos comerciais, hábitos de consumo e dados de mercado.`
        },
        {
          titulo: "ROAD SHOW ÁFRICA DO SUL - ÁFRICA DO SUL",
          dias: [24,25,26,27],
          tipo:'Evento',
          show:false,
          texto:`Encontro entre as empresas participantes do projeto com potenciais compradores, nas instalações destes potenciais parceiros. O evento é realizado após o processo de levantamento de informações no país de destino e matchmaking entre fabricantes, distribuidores, importadores e as empresas brasileiras inscritas. Durante o evento, são realizadas reuniões individuais por empresa participante e potenciais compradores em suas próprias instalações, em substituição à rodada de negócios usualmente realizada em hotéis. É importante destacar que por se tratar de uma ação customizada de acordo com o perfil que a empresa brasileira busca no país alvo, é possível atingir um maior número de diferentes contatos comerciais pois todas as empresas locais poderão selecionar, efetivamente, a empresa brasileira com maior similaridade à sua estratégia, independente do setor, segmento ou vertical do projeto.`
        },
      ]
    },
    {
      mesAno:"09/2020",
      eventos:[
        {
          titulo: "APRESENTAÇÃO PROJETO - São Paulo",
          dias: [2],
          tipo:'Evento',
          show:false,
          texto:`O evento
          destina-se à empresas ainda não participantes do projeto Beautucare Brazil, com a
          finalidade de apresentar a estratégia, forma de atuação, próximas ações e como
          participar deste Projeto Setorial, e também uma introdução à ABIHPEC e suas áreas
          de trabalho.`
        },
        {
          titulo: "WORKSHOP ÍNDIA - São Paulo",
          dias: [16],
          tipo:'Evento',
          show:false,
          texto:`Workshops: Apresentação de informações aprofundadas sobre
          mercados direcionado ao segmento de beleza, para melhor compreensão de
          competitividade e oportunidades. Temas abordados: resultados do projeto, assuntos
          regulatórias, acordos comerciais, hábitos de consumo e dados de mercado.`
        }
      ]
    },
    {
      mesAno:"10/2020",
      eventos:[
        {
          titulo: "APRESENTAÇÃO PROJETO - São Paulo",
          dias: [1],
          tipo:'Evento',
          show:false,
          texto:`O evento
          destina-se à empresas ainda não participantes do projeto Beautucare Brazil, com a
          finalidade de apresentar a estratégia, forma de atuação, próximas ações e como
          participar deste Projeto Setorial, e também uma introdução à ABIHPEC e suas áreas
          de trabalho.`
        },
        {
          titulo: "FEIRA IN-COSMETICS NORTH AMERICA - NOVA IORQUE",
          dias: [21,22],
          tipo:'Evento',
          show:false,
          texto:`Evento voltado para empresas do setor HPPC ( Higiene Pessoal, Perfumaria e Cosméticos). Em sua quinta edição, este evento passou a ser realizado mediante à extrema relevância de empresas nacionais e internacionais ainda fabricantes no mercado americano, além de possuir muitos centros de decisão de Marketing, Pesquisa e Desenvolvimento concentrados na região onde a feira é realizada, o que potencializa a busca tendências e inovações no mercado nesta feira pelo corpo diretivo ou decisório das empresas.
          A exposição reúne mais de 200 expositores de ingredientes, fragrâncias, equipamentos de laboratório, testes e soluções regulatórias com até 2.000 fabricantes de cosméticos. Como em todos os demais eventos com a marca “in-cosmetics”, é ainda disponibilizado pela organização uma área de apresentação de testes clínicos e pesquisas laboratoriais dos ingredientes, assim como a empresa que possuir um lançamento de produto que esteja há menos de 6 meses no mercado é selecionada para a exposição em área específica de produtos inovadores.`
        },
        {
          titulo: "INTERCHARM PROFESSIONAL - MOSCOU",
          dias: [28,29,30,31],
          tipo:'Evento',
          show:false,
          texto:`Evento voltado para empresas do setor HPPC ( Higiene Pessoal, Perfumaria e Cosméticos). InterCharm é a maior exposição de perfumaria e cosméticos na Rússia, CIS, Europa Central e Oriental que reúne em Moscou, empresas russas e internacionais, novos fabricantes e distribuidores de perfumaria e cosméticos, ferramentas e equipamentos para cosmetologia, estética, medicina, cabeleireiro, serviço de unhas, bem como tecnologias para o salão de beleza. O mercado russo de cosméticos é um dos maiores do mundo e tem demonstrado constante crescimento a partir de 2016. Segundo Euromonitor, o volume do mercado russo de produtos de beleza em 2016 atingiu USD 10,5 bilhões. Ao mesmo tempo mais de 70% dos produtos de beleza usados tanto pelo consumidor final como pelos salões de beleza são importados.
          Apesar desse potencial, o mercado ainda é praticamente inexplorado pelas empresas brasileiras. Alguns esforços pontuais foram desenvolvidos tanto pelo EA Eurásia (vide histórico), como por algumas empresas individualmente. O objetivo estratégico deste projeto é aumentar exportações dos produtos de beleza brasileiros para o mercado russo e da região euroasiática, bem como melhorar a imagem deste setor entre os importadores/distribuidores russos e os consumidores finais.`
        }
      ]
    },
    {
      mesAno:"11/2020",
      eventos:[
        {
          titulo: "APRESENTAÇÃO PROJETO - São Paulo",
          dias: [4],
          tipo:'Evento',
          show:false,
          texto:`O evento
          destina-se à empresas ainda não participantes do projeto Beautucare Brazil, com a
          finalidade de apresentar a estratégia, forma de atuação, próximas ações e como
          participar deste Projeto Setorial, e também uma introdução à ABIHPEC e suas áreas
          de trabalho.`
        },
        {
          titulo: "RODADA DE NEGÓCIOS ÍNDIA - DELHI",
          dias: [16,17,18,19],
          tipo:'Evento',
          show:false,
          texto:``
        }
      ]
    },
    {
      mesAno:"12/2020",
      eventos:[
        {
          titulo: "REUNIÃO COMITÊ GESTOR - São Paulo",
          dias: [2],
          tipo:'Evento',
          show:false,
          texto:`Reunião para apresentação de
          Resultados e Definição de estratégias do projeto Beautycare Brazil.`
        },
        {
          titulo: "WORKSHOP EUROPA - São Paulo",
          dias: [3],
          tipo:'Evento',
          show:false,
          texto:`Workshops: Apresentação de informações aprofundadas sobre
          mercados direcionado ao segmento de beleza, para melhor compreensão de
          competitividade e oportunidades. Temas abordados: resultados do projeto, assuntos
          regulatórias, acordos comerciais, hábitos de consumo e dados de mercado.`
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
