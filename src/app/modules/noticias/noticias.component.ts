import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {

  public noticias:any[] = [
    {
      titulo: `<b>IN-COSMETICS GLOBAL 2020</b> TEM NOVA DATA: 30 DE JUNHO A 2 DE JULHO`,
      cor:'orange',
      show:false,
      conteudo: `
        <p align="center"><img src="assets/images/noticias/incosmetics.jpg" alt="" width="289" height="289"/></p>
        <small>março 10,2019</small>
        <p>A Reed Exhibitions, empresa organizadora da <b>in-cosmetics Global 2020</b> - maior feira de ingredientes voltados ao mercado de cosméticos - <b>anunciou o adiamento do evento para 30 junho a 2 de julho</b>, que antes seria realizado de 31 de março a 2 de abril, em Barcelona.</p>
        <p>A decisão foi motivada pela crise do Coronavírus visando garantir segurança e qualidade de público visitante, uma vez que muitas empresas estão restringindo viagens ao exterior.</p>
        <p><b> <a href="https://www.in-cosmetics.com/event-updates?utm_campaign=INCOS2020_Fulfillment_er_05_Mar_Announcement&utm_medium=email&utm_source=Fulfilment&queryToken=qik6QDV2AzAdZX4g%20e1tZ3hdyMzbyxGT4BSjhMT94X7x1zmnEzEVv5XKutd3ky3xYZJBFQcu7mPOb9q%2FPBxm1bVL1FFu4IXbFbmDwApFmaWuBx0T8ihahvclrnrF7iREsJUe0wJFCYlO48vr8%20%20myh6lJ6amy7jl6HrVniz7FvU%3D&CampaignId=7013z000001uKnKAAU&dkey=" target="_blank">Clique aqui</a> </b> para mais informações.</p>
      `
    },
    {
      titulo: `<B>ABIHPEC</B> E <B>ITALCAM</B> ASSINARAM ACORDO PARA FORTALECER OS NEGÓCIOS INTERNACIONAIS ENTRE O BRASIL E A ITÁLIA`,
      cor:'red',
      show:false,
      conteudo: `
        <p align="center"><img src="https://abihpec.org.br/site2019/wp-content/uploads/2019/11/340d6c5e-24c5-4918-b09c-bc1caf165da2-380x380.jpg" alt="" width="289" height="289" srcset="https://abihpec.org.br/site2019/wp-content/uploads/2019/11/340d6c5e-24c5-4918-b09c-bc1caf165da2-380x380.jpg 380w, https://abihpec.org.br/site2019/wp-content/uploads/2019/11/340d6c5e-24c5-4918-b09c-bc1caf165da2-700x700.jpg 700w" sizes="(max-width: 289px) 100vw, 289px" /></p>
        <small>novembro 06,2019</small>
        <p>Em 6 de novembro, a ABIHPEC e a Câmara Ítalo-brasileira de Comércio, Indústria e Agricultura de São Paulo (ITALCAM) formalizaram um acordo entre as entidades. A iniciativa tem como principal missão a promoção de negócios internacionais da indústria de higiene pessoal, perfumaria e cosméticos (HPPC), por meio da aproximação entre as companhias brasileiras e italianas.</p>
        <p>Dentre as ações previstas, está a realização de reuniões B2B durante a feira Cosmoprof Worldwide de 2020, em Bolonha, com o objetivo prospectar novas oportunidades de negócios para as empresas participantes do Beautycare Brazil, projeto setorial realizado em parceria entre a ABIHPEC e a Apex-Brasil (Agência Brasileira de Promoção de Exportações e Investimentos).</p>
        <p>Nos últimos anos a ABIHPEC vem estabelecendo aproximação com Câmaras que possam fortalecer a internacionalização do setor de HPPC. “Com a ITALCAM teremos um apoio estratégico na Itália muito importante e eficiente, seja em logística ou em eventos que tragam mais compradores, distribuidores e importadores. Acreditamos que essa parceria venha a somar ainda mais os nossos objetivos de incrementarmos as exportações brasileiras de higiene pessoal, perfumaria e cosméticos “, disse João Carlos Basilio, presidente-executivo da ABIHPEC.</p>
        <p>De acordo com Domenico Alberto Rossini, presidente da ITALCAM, a indústria brasileira de cuidados pessoais tem muito potencial de exportação na Europa. “Há dois anos a Câmara Ítalo-brasileira realiza ações de projeção das empresas nacionais de cosméticos na Cosmoprof. Esse acordo com a ABIHPEC foi muito importante para fortalecer essa nossa vontade de fomentar, cada vez mais, os negócios entre ambos os países”, afirmou.</p>
      `
    },
    {
      titulo: `ABIHPEC MARCA PRESENÇA NA <B>CPHi
      WORDWIDE</B>, MAIOR FEIRA DA CADEIA INDUSTRIAL FARMACÊUTICA NO MUNDO`,
      cor:'purple',
      show:false,
      conteudo: `
      <p>Abihpec marca presença na CPhl Wordwide, maior feira da cadeia industrial
      farmacêutica no mundo</p>

      <p>A Abihpec (Associação Brasileira da Indústria de Higiene Pessoal, Perfumaria e Co
      sméticos), em parceria com a Abiquifi (Associação Brasileira da Indústria de
      Insumos Farmacêuticos), participou da 30ª edição da CPhl Wordwide, entre os dias
      5 e 7 de novembro, em Frankfurt, na Alemanha, com a missão de possibilitar a
      geração de negócios para a cadeia produtiva que atua no fornecimento de insumos
      e empresas fabricantes de produtos acabados de ambos os setores.</p>

      <p>Considerado o maior evento da cadeia industrial farmacêutica, a CPhl Worldwide
      recebeu cerca de 50 mil visitantes e registrou a maior participação brasileira desde
      2007, com a presença de 42 empresas – sendo 12 dessas estreantes, além do
      comparecimento de representantes do Governo Federal, como o Ministério da
      Saúde, Anvisa (Agência Nacional de Vigilância Sanitária) e o Instituto de Tecnologia
      em Fármacos (Farmanguinhos).</p>

      <p>O Pavilhão Brasileiro – presente na feira há nove anos por meio do projeto setorial
      Brazilian Pharma &amp; Health – um convênio entre Abiquifi e Apex Brasil (Agência
      Brasileira de Promoção de Exportações e Investimentos), neste ano contou com a
      importante parceria do Beautycare Brazil, da Abihpec.</p>

      <p>“Essa iniciativa marcou o início da cooperação entre as entidades e prevê a
      realização conjunta de ações internacionais e estudos de mercado com o principal
      objetivo de construir uma agenda positiva para ambos os segmentos e atuar em
      sinergia para fomentar as indústrias brasileiras”, disse João Carlos Basilio,
      presidente-executivo da Abihpec.</p>

      <p>O presidente-executivo da Abiquifi, Norberto Prestes, destaca que “essa parceria
      reforça as vantagens e benefícios que há entre os setores que geralmente resultam
      em novos negócios e produtos inovadores aumentando a competitividade das
      empresas no mercado internacional.”</p>

      <p>Pharma Connection debate marcos regulatórios em insumos e PDP</p>

      <p>Com mudanças previstas sobre os novos marcos regulatórios de Insumos
      Farmacêuticos Ativos e parcerias para o Desenvolvimento Produtivo (PDP), a
      Abiquifi foi responsável pela 3ª edição da Pharma Connection com mais de 70
      empresários brasileiros.</p>

      <p>A semana em Frankfurt ainda contou com um coquetel para a delegação marcado
      pela assinatura de dois acordos relevantes: o termo de cooperação entre as
      entidades setoriais para o desenvolvimento estratégico de ambos os segmentos e o
      memorando de entendimento (MOU), entre a Abiquifi e a cidade de Portalegre, em
      Portugal, fortalecendo a cooperação Portugal-Brasil no campo do setor comercial e
      farmacêutico.</p>

      <p>Na solenidade estiveram presentes a gerente de Negócios Internacionais
      da Abihpec, Gueisa Silvério, além de João Cardoso, vice-presidente da Câmara
      Municipal de Portalegre, e Teresa Narciso, chefe da divisão de Promoção do
      Desenvolvimento e Modernização da Câmara Municipal de Portalegre.</p>

      <p>Sobre o Beautycare Brazil</p>

      <p>O Beautycare Brazil é desenvolvido por meio de uma parceria entre
      a Associação Brasileira da Indústria de Higiene Pessoal, Perfumaria e Cosméticos 
      (Abihpec) e a Agência Brasileira de Promoção de Exportações e Investimentos
      (Apex-Brasil). Criado nos anos 2000, o projeto setorial tema a finalidade de
      promover a internacionalização das empresas de higiene pessoal, perfumaria e
      cosméticos e alavancar o crescimento das exportações de produtos e serviços que
      envolvem a cadeia de valor do setor de HPPC.</p>

      <p>Mais informações: www.beautycarebrazil.org.br</p>
      <p>Sobre o Projeto Brazilian Pharma &amp; Health</p>

      <p>O Brazilian Pharma &amp; Health é o projeto de internacionalização dos setores
      farmoquímico, biotecnológico, farmacêutico e veterinário brasileiros, coordenado
      pela Abiquifi (Associação Brasileira da Indústria Farmoquímica e de Insumos
      Farmacêuticos) com apoio da Apex-Brasil (Agência Brasileira de Promoção de
      Exportações e Investimentos). O objetivo é ampliar a participação das empresas da
      cadeia produtiva farmacêutica, biotecnológica, farmoquímica e de saúde animal
      brasileira no cenário internacional, visando ao aumento das exportações, troca de
      tecnologia, atração de investimentos e a internacionalização do setor. O Brazilian
      Pharma &amp; Health realiza ações de inteligência e prospecção de mercados,
      marketing internacional, cursos e workshops, feiras internacionais, rodadas de
      negócios, missões comerciais, dirigidas a diversos países nos cinco continentes.</p>
      `
    },
    {
      titulo: "<B>BEAUTYCARE BRAZIL</B> É DESTAQUE NA IN-COSMETCIS NORTH AMERICA",
      cor:'orange',
      show:false,
      conteudo: `
      <p>A feira gerou mais de US$ 1,3 milhão em negócios para as empresas brasileiras de cuidados pessoais.</p>

      <p>Parceria entre a ABIHPEC (Associação Brasileira da Indústria de Higiene Pessoal, Perfumaria e Cosméticos) e a Apex-Brasil (Agência Brasileira de Promoção de Exportações e Investimentos), o Beautycare Brazil contabilizou mais de US$ 1,3 milhão em negócios fechados durante a quarta edição da in-cosmetics North America, realizada entre os dias 23 e 24 de outubro, em Nova Iorque.</p>

      <p>A feira reuniu fornecedores de ingredientes e fabricantes da indústria de HPPC de todo o mundo, e gerou impacto positivo para as nove empresas participantes do projeto setorial. Foram contabilizados mais de 650 contatos, que preveem US$ 4,2 milhões para os próximos 12 meses.</p>

      <p>"As companhias brasileiras receberam muitos empresários focados em indie brands (marcas independentes), uma tendência de consumo que vem sendo apresentada pela ABIHPEC. Esse cenário poderá refletir em realização de negócios com menores volumes para os fabricantes de ingredientes, em contrapartida haverá uma ampliação de número de clientes e potencial de crescimento em negociações futuras", afirma Gueisa Silverio, gerente do Beautycare Brazil.</p>

      <p>Segundo a executiva, a organização da in-cosmetics confirmou a realização do evento em 2020 em um outro centro de exposições, localizado em Nova Jersey, o que poderá gerar maior número de visitantes, já que grande parte das indústrias de produtos acabados estão fora de Manhattam.</p>

      <p>Sobre o Beautycare Brazil<br />

      O Beautycare Brazil é desenvolvido por meio de uma parceria entre a Associação Brasileira da Indústria de Higiene Pessoal, Perfumaria e Cosméticos (ABIHPEC) e a Agência Brasileira de Promoção de Exportações e Investimentos (Apex-Brasil). Criado nos anos 2000, o projeto setorial tema a finalidade de promover a internacionalização das empresas de higiene pessoal, perfumaria e cosméticos e alavancar o crescimento das exportações de produtos e serviços que envolvem a cadeia de valor do setor de HPPC. Mais informações: http://www.beautycarebrazil.org.br</p>

      <p>Sobre a ABIHPEC<br />

      A Associação Brasileira da Indústria de Higiene Pessoal, Perfumaria e Cosméticos (ABIHPEC) é uma entidade privada sem fins lucrativos, com a finalidade de reunir e representar - em âmbito nacional e internacional - as indústrias do setor, instaladas em todo país e de todos os portes, promovendo e defendendo os seus legítimos interesses, por meio de ações e instrumentos que contribuam para o seu desenvolvimento, buscando fomentar a competitividade, a credibilidade, a ética e a evolução contínua de toda a cadeia produtiva. Mais informações: http://www.abihpec.org.br</p>

      <p>Sobre a Apex-Brasil<br />

      A Agência Brasileira de Promoção de Exportações e Investimentos (Apex-Brasil) atua para promover os produtos e serviços brasileiros no exterior e atrair investimentos estrangeiros para setores estratégicos da economia brasileira.</p>

      <p>Para alcançar esses objetivos, a Agência realiza ações diversificadas de promoção comercial, que visam promover as exportações e valorizar os produtos e serviços brasileiros no exterior. São iniciativas como missões prospectivas e comerciais, rodadas de negócios, apoio à participação de empresas brasileiras em grandes feiras internacionais, além de visitas de compradores, investidores e formadores de opinião estrangeiros ao Brasil para conhecer a estrutura produtiva do país, além de outras plataformas de negócios que também contribuem para fortalecer a marca Brasil.</p>

      <p>Na atração de investimentos estrangeiros diretos (IED), a Apex-Brasil atua de forma coordenada com atores públicos e privados e foca sua atuação em setores estratégicos para o desenvolvimento da competitividade das empresas brasileiras e do país. Nesse sentido, a Agência identifica oportunidades de negócios, promove eventos estratégicos e presta apoio a investidores estrangeiros interessados em alocar recursos no Brasil.</p>
      `
    },
    {
      titulo: "EMPRESAS BRASILEIRAS <B>GERAM MAIS DE US$ 1 MILHÃO EM NEGÓCIOS</B> REALIZADOS EM FEIRA DE DUBAI",
      cor:'red',
      show:false,
      conteudo: `
      <div class="d-flex justify-content-center">
        <div class="col-6">
          <img src="assets/images/noticias/Pasted-2.jpg" class="img-fluid" width="100%" />
          <p class="text-center"><small><em>Delegação foi composta por 15 companhias, que realizaram aproximadamente 700 contatos comerciais com organizações de outros países</em></small></p>
        </div>
      </div>

      <p>De 15 a 17 de abril, empresas brasileiras de higiene pessoal, perfumaria e cosméticos (HPPC) estiveram na feira Beautyworld Middle East, em Dubai, e fecharam mais de US$ 1 milhão em negócios.</p>

      <p>As perspectivas para os próximos 12 meses são de gerar mais de US$ 6 milhões de vendas.

      <p>Em sua 23ª edição, a feira reuniu expositores e visitantes de diversos países, e mostrou a força do mercado árabe para o setor. A participação nacional contou com 15 empresas e foi realizada pela Associação Brasileira da Indústria de Higiene Pessoal, Perfumaria e Cosméticos (ABIHPEC).

      <p>“Diante da tradição de mais de 17 anos nesta feira e da representatividade global da nossa indústria, ano a ano conquistamos espaços privilegiados em cada nova edição, possibilitando melhores resultados para o setor de HPPC. O esforço e o investimento da ABIHPEC para participar deste evento foram imprescindíveis para garantir a presença das empresas brasileiras " afirma João Carlos Basilio, presidente-executivo da ABIHPEC.

      <p>Para o embaixador do Brasil em Abu Dhabi, Fernando Luís Lemos Igreja, “o Brasil mantém importante presença no mercado de cosméticos nos Emirados Árabes e na região. Isto é resultado da indústria inovadora que temos no país nesse setor, cada vez mais referência no mercado mundial, e da adaptação de nossas empresas às preferências do consumidor árabe." Gueisa Silverio, gerente de projeto da Associação, destaca a importância da participação brasileira em eventos como este, não apenas para a estratégia de internacionalização das organizações, mas também para a qualificação da percepção sobre o setor de HPPC do país.

      <p>“A presença de companhias associadas à ABIHPEC nesta feira demonstra o quanto os mercados desta região são importantes para suas exportações. Além das empresas presentes no pavilhão Brasil, outros seis associados estiveram em áreas individuais e relataram um relevante aumento em seus negócios locais”, afirma.`
    },

    {
      titulo: "LEI DA BIODIVERSIDADE BRASILEIRA É TEMA DE PALESTRA DA <B>ABIHPEC EM PARIS</B>",
      cor:'purple',
      show:false,
      conteudo: `
      <img src="assets/images/noticias/Pasted-1.png" />
      `
    },
    {
      titulo: "EMPRESAS BRASILEIRAS GERAM <B>US$ 5,3 MILHÕS EM NEGÓCIOS</B> REALIZADOS NA IN-COSMETICS, EM PARIS",
      cor:'orange',
      show:false,
      conteudo: `
      <div class="d-flex justify-content-center">
        <div class="col-6">
          <img src="assets/images/noticias/image002-1.jpg" class="img-fluid" width="100%" />
          <p class="text-center"><small><em>Delegação brasileira foi composta por empresas de HPPC, que realizaram mais de 1.500 interações com organizações de outros países</em></small></p>
        </div>
      </div>


      <p>Representando o quarto maior mercado de produtos de higiene pessoal, perfumaria e cosméticos do mundo, empresas brasileiras estiveram presentes na in-cosmetics Global 2019 – uma das mais importantes feiras internacionais de ingredientes voltados à indústria do setor – e geraram aproximadamente R$ 5,3 milhões em negócios. A perspectiva é que nos próximos 12 meses ainda sejam produzidos cerca de R$ 15,9 milhões em negociações estimuladas pelo evento, que ocorreu em Paris, entre os dias 2 e 4 de abril.</p>

      <p>Já consolidada como um dos momentos mais aguardados do calendário do setor de HPPC mundial, a in-cosmetics Global 2019 reuniu centenas de expositores e milhares de visitantes de diversos países. A participação nacional foi possibilitada pelo Beautycare Brazil, uma realização da Associação Brasileira da Indústria de Higiene Pessoal, Perfumaria e Cosméticos (ABIHPEC) e da Agência Brasileira de Promoção de Exportações e Investimentos (Apex-Brasil).</p>

      <p>Para a gerente do projeto, Gueisa Silverio, os expositores brasileiros chamaram a atenção do público presente e contribuíram para a qualificação da percepção sobre o setor de HPPC do país.</p>

      <p>“Pela relevância e tamanho do mercado de HPPC brasileiro, a exposição das empresas do Brasil sempre atrai o interesse de diversos atores globais. Estas companhias realizaram mais de 1.500 interações com organizações de outros países durante o evento. Segundo a organização da in-cosmetics Global, a feira cresceu 29% em número de visitantes, e isso se reflete em mais oportunidades para os participantes”, afirma.</p>

      <p>O chefe do setor de Promoção Comercial e Investimentos, da embaixada do Brasil em Paris, Wagner Alves, destaca o potencial da indústria de HPPC do país se tornar cada vez mais uma referência mundial.</p>

      <p>“Temos um mercado importante e a maior biodiversidade do mundo, com mais de 20% do estoque global. É muito provável que continuemos a desenvolver esta indústria criativa e inovadora e que exerçamos cada vez mais papel de influenciadores e geradores de tendências mundiais no setor”, explica Alves.</p>

      <p>Sobre o Beautycare Brazil<br />
      É uma iniciativa realizada por meio de uma parceria entre a ABIHPEC e a Apex-Brasil, que tem como objetivo promover as exportações da cadeia produtiva e de empresas do setor de Higiene Pessoal, Perfumaria e Cosméticos, contribuindo para a competitividade das empresas brasileiras por meio da internacionalização. Desenvolvido desde o ano 2000, o projeto setorial vem alcançando uma história de sucesso de apoio à exportação e para a relevância do setor para a economia nacional. Atualmente, o Beautycare Brazil atende empresas de todos portes e faturamentos, que tem a possibilidade de participar de eventos internacionais, tais como feiras, road shows e missões prospectivas, além outras ações que englobam atividades de capacitação, adequação técnica de produtos, ações comerciais para facilitação e geração de negócios, fortalecimento de imagem, entre outros.</p>

      <p>Sobre a ABIHPEC<br />
      A Associação Brasileira da Indústria de Higiene Pessoal, Perfumaria e Cosméticos (ABIHPEC) é uma entidade privada sem fins lucrativos, com a finalidade de reunir as indústrias do setor, instaladas em todo país e de todos os portes, promovendo e defendendo os seus legítimos interesses. Tem como missão apoiar, desenvolver, estimular e criar ações e instrumentos que contribuam para o desenvolvimento do setor, além de representar seus associados em âmbito nacional e internacional, buscando fomentar a competitividade, credibilidade, ética e a evolução contínua de toda a cadeia produtiva.</p>

      <p>Sobre a Apex-Brasil<br />
      A Agência Brasileira de Promoção de Exportações e Investimentos (Apex-Brasil) atua para promover os produtos e serviços brasileiros no exterior e atrair investimentos estrangeiros para setores estratégicos da economia brasileira. A Agência apoia 12.000 empresas em 80 setores da economia brasileira, que por sua vez exportam para cerca de 200 mercados. A Apex-Brasil também desempenha um papel fundamental na atração de investimento estrangeiro direto (IED) para o Brasil, trabalhando para identificar oportunidades de negócios, promovendo eventos estratégicos e prestando apoio a investidores estrangeiros interessados em alocar recursos no Brasil.</p>
      `
    },
    {
      titulo: "EMPRESAS BRASILEIRAS GERAM <B>US$ 3,6 MILHÕS EM NEGÓCIOS</B> REALIZADOS NA COSMOPROF, EM BOLONHA",
      cor:'red',
      show:false,
      conteudo: `

      <p>Quantidade de empresas presentes n-o pavilhão brasileiro neste ano cresceu em relação a 2018  O setor de higiene pessoal, perfumaria e cosméticos do Brasil marcou presença relevante na Cosmoprof Worldwide, sendo representado por 54 empresas, número 16% maior do que o verificado em 2018. Considerada mundialmente como a principal feira do segmento, a Cosmoprof foi realizada em Bolonha (Itália), entre os dias 14 e 17 de março, e serviu de oportunidade para a geração de US$ 3,6 milhões em negócios para as companhias do país. A expectativa para os próximos 12 meses é que sejam gerados cerca de US$ 26,5 milhões por meio dos contatos iniciados no evento.  </p>

      <p>A participação nacional no evento foi uma iniciativa do Beautycare Brazil, projeto realizado pela Associação Brasileira da Indústria de Higiene Pessoal, Perfumaria e Cosméticos (ABIHPEC) e pela Agência Brasileira de Promoção de Exportações e Investimentos (Apex-Brasil). </p>

      <p>Os expositores do país ocuparam sete diferentes halls, incluindo um espaço para experimentação e demonstração de produtos, totalizando uma área aproximada de 950 m2, em que foram apresentadas as principais tendências do setor. “Nesta edição, separamos as empresas por categorias em diferentes pavilhões, o que proporcionou maior visibilidade e maior direcionamento para negociações comerciais. Isto é positivo para quem busca novas posições no mercado internacional”, afirma Gueisa Silvério, gerente do projeto Beautycare Brazil, que trabalha continuamente para promover o setor de higiene pessoal, perfumaria e cosméticos do Brasil no exterior por meio de eventos como este.</p>

      <p>O cônsul-geral adjunto do Brasil em Milão, Júlio Laranjeira, reconheceu a importância da Cosmoprof para criar oportunidades de negócios às empresas brasileiras. “Trata-se de uma ocasião ímpar para disseminação das novidades do setor de higiene pessoal, perfumaria e cosméticos, como novas tecnologias e tendências, além de uma situação propícia para a realização de parcerias entre companhias de diversas partes do mundo. O consulado concedeu apoio institucional à delegação do país, sempre buscando criar ambientes de relacionamento qualificados. Um destes momentos foi um evento, paralelo à programação da feira, do qual participaram cerca de 90 empresários brasileiros, italianos e de outras nacionalidades, e que foi uma boa oportunidade para propiciar negociações”, relata.</p>

      <p>Sobre o Beautycare Brazil<br />
      É uma iniciativa realizada por meio de um acordo de cooperação técnico-financeiro em parceria com a ABIHPEC e a Apex-Brasil, que tem como objetivo promover a competitividade das empresas brasileiras de Higiene Pessoal, Perfumaria e Cosméticos no mercado internacional.   Desenvolvido desde o ano 2000, o projeto setorial vem alcançando uma história de sucesso de apoio à exportação e para a relevância do setor para a economia nacional. Atualmente, o Beautycare Brazil atende empresas de todos portes e faturamentos, que tem a possibilidade de participar de eventos internacionais, tais como feiras, road shows e missões prospectivas, além outras ações que englobam atividades de capacitação, adequação técnica de produtos, ações comerciais para facilitação e geração de negócios, fortalecimento de imagem, entre outros.</p>

      <p>Sobre a ABIHPEC <br />
      A Associação Brasileira da Indústria de Higiene Pessoal, Perfumaria e Cosméticos (ABIHPEC) é uma entidade privada sem fins lucrativos, com a finalidade de reunir as indústrias do setor, instaladas em todo país e de todos os portes, promovendo e defendendo os seus legítimos interesses.   Tem como missão apoiar, desenvolver, estimular e criar ações e instrumentos que contribuam para o desenvolvimento do setor, além de representar seus associados em âmbito nacional e internacional, buscando fomentar a competitividade, credibilidade, ética e a evolução contínua de toda a cadeia produtiva.   Mais informações: www.abihpec.org.br   </p>

      <p>Sobre a Apex-Brasil <br />
      A Agência Brasileira de Promoção de Exportações e Investimentos (Apex-Brasil) atua para promover os produtos e serviços brasileiros no exterior e atrair investimentos estrangeiros para setores estratégicos da economia brasileira. A Agência apoia 12.000 empresas em 80 setores da economia brasileira, que por sua vez exportam para cerca de 200 mercados.   A Apex-Brasil também desempenha um papel fundamental na atração de investimento estrangeiro direto (IED) para o Brasil, trabalhando para identificar oportunidades de negócios, promovendo eventos estratégicos e prestando apoio a investidores estrangeiros interessados em alocar recursos no Brasil.</p>
      `
    },
    {
      titulo: "BEAUTYCARE BRAZIL <B>AMPLIA EM 16%</B> O NÚMERO DE EMPRESAS PARTICIPANTES NA COSMOPROF WORLDWIDE",
      cor:'purple',
      show:false,
      conteudo: `
      <div class="d-flex justify-content-center">
        <div class="col-6">
          <img src="assets/images/noticias/fotomateria.jpg" class="img-fluid" width="100%" />
        </div>
      </div>
      <p class="mt-3">De 14 a 17 de março, 54 empresas brasileiras do setor de higiene pessoal, perfumaria e cosméticos participarão da Cosmoprof Worldwide – considerada a principal feira do segmento do mundo -, que acontece em Bolonha, na Itália. A participação nacional é uma iniciativa do Beautycare Brazil, projeto realizado pela Associação Brasileira da Indústria de Higiene Pessoal, Perfumaria e Cosméticos (ABIHPEC) e Agência Brasileira de Promoção de Exportações e Investimentos (Apex-Brasil).</p>

      <p>O número de empresas participantes é 16% maior que o registrado em 2018. Outro ponto de destaque é a quantidade de novos expositores. “Em 2019, houve um incremento de 12 novas empresas, o que reforça o perfil diversificado da nossa indústria e também reflete um crescimento contínuo do interesse em participar do evento“, explica Gueisa Silverio, gerente do projeto Beautycare Brazil. </p>

      <p>As indústrias brasileiras estarão em sete diferentes halls, incluindo um espaço para experimentação e demonstração de produtos, totalizando uma área aproximada de 950 m2, onde serão apresentadas as principais tendências do setor. </p>

      <p>Novidade <br />
      Em 16 de março, o Beautycare Brazil promoverá, em parceria com o Consulado Brasileiro em Milão, na Itália, um coquetel com o objetivo de aproximar as empresas expositoras brasileiras do setor de higiene pessoal, perfumaria e cosméticos de potenciais parceiros italianos. “Neste ano, com a Cosmoprof e com este inédito evento em parceria com o Consulado, a nossa expectativa é valorizar e incentivar ainda mais as indústrias do nosso setor que querem exportar, proporcionando canais de contato com importantes players do mercado”, afirma Silverio.</p>
      `
    },
    {
      titulo: "<B>ROAD SHOW NO MÉXICO</B> DEVE GERAR US$ 3,7 MILHÕES EM NEGÓCIOS PARA AS EMPRESAS DO BEAUTYCARE BRAZIL",
      cor:'orange',
      show:false,
      conteudo: `
      <div class="d-flex justify-content-center">
        <div class="col-6">
          <img src="assets/images/noticias/fotomateriaroadshow.jpg" class="img-fluid" width="100%" />
        </div>
      </div>
      <p class="mt-3">De 22 a 25 de julho, 19 empresas nacionais de higiene pessoal, perfumaria e cosméticos participaram do Road Show México. Ao todo foram realizadas 159 reuniões com importadores e distribuidores locais e a expectativa de gerar, em 12 meses, cerca de US$ 3,7 milhões em novos negócios.</p>

      <p>A iniciativa promovida pelo Beautycare Brazil - projeto setorial coordenado pela Associação Brasileira da Indústria de Higiene Pessoal, Perfumaria e Cosméticos (ABIHPEC), em parceria com Agência Brasileira de Promoção de Exportações e Investimentos (Apex-Brasil) - é uma ação customizada de acordo com o perfil que a empresa nacional busca no país alvo, com o objetivo ampliar a presença brasileira no mercado internacional.</p>

      <p>Para Gueisa Silvério, gerente do Beautycare Brazil, esta missão comercial possibilitou que as empresas compreendessem melhor sobre o formato de distribuição e posicionamento de produtos no mercado mexicano. “Com reuniões individuais e, preferencialmente, nas instalações das empresas locais, esta ação colocou o empresário em contato direto com seu potencial parceiro comercial, possibilitando maior assertividade de agenda para realização de negócios e grande satisfação por parte do grupo participante do evento”, conta. </p>

      <p>Entre as atividades realizadas ao longo dos quatro dias, o Road Show possibilitou a capacitação sobre registro de produtos, aduana, acordos comerciais, entre outros temas apresentados por consultorias especializadas; visitas a diversos pontos de vendas para identificar marcas e produtos já presentes no México; e reuniões com empresários locais a fim de encontrar potenciais parceiros e aumentar seus resultados em exportações de produtos do setor de HPPC.</p>

      <p>O Road Show contou com a importante presença de Lucas Frota, Chefe do Setor Comercial da Embaixada do Brasil no México, que explicou aos participantes algumas das particularidades desse mercado. “O México é um grande mercado potencial para as exportações brasileiras de produtos de higiene pessoal, perfumaria e cosméticos. Além de ser o segundo maior mercado consumidor na América Latina, já é o terceiro principal destino das exportações do segmento. Além disso, os impostos de importação, não muito elevados, permitem o aceso tarifário ao mercado local”, destacou.</p>
      `
    },
    {
      titulo: "<B>COSMOPROF NORTH AMERICA</B> GERA EXPECTATICVA DE US$ 10,3 MILHÕES EM NEGÓCIOS PARA EMPRESAS BRASILEIRAS",
      cor:'red',
      show:false,
      conteudo: `
      <div class="d-flex justify-content-center">
        <div class="col-6">
          <img src="assets/images/noticias/fotocosmoprofnorthamerica.jpg" class="img-fluid" width="100%" />
          <p class="text-center"><small><em>Feira teve um aumento de 42% na participação nacional em 2018, na comparação com o ano anterior</em></small></p>
        </div>
      </div>

      <p>Com uma representativa presença brasileira de empresas de higiene pessoal, perfumaria e cosméticos ainda maior que nos anos anteriores, foi encerrada nesta terça-feira a Cosmoprof North America. Realizada no Mandalay Bay Convention Center, em Las Vegas, entre os dias 29 e 31 de julho, a feira proporcionou aos participantes do Beautycare Brazil 810 contatos comerciais. A expectativa para os próximos 12 meses é que sejam gerados cerca de US$10,3 milhões em novos negócios resultantes do evento. </p>

      <p>Durante os três dias de feira, a Cosmoprof North America gerou oportunidades para mais de mil expositores de 39 países diferentes. A participação nacional é uma iniciativa do Beautycare Brazil, uma realização da Associação Brasileira da Indústria de Higiene Pessoal, Perfumaria e Cosméticos (ABIHPEC) e da Agência Brasileira de Promoção de Exportações e Investimentos (Apex-Brasil).</p>

      <p>A gerente do projeto Beautycare Brazil, Gueisa Silvério, conta que esse foi mais um ano muito proveitoso para as empresas brasileiras onde puderam estar em contato com potenciais parceiros comerciais de diversos países, principalmente da América do Norte, Central e do Sul. “Em 2018 contamos com a presença de 33 empresas participantes do projeto nesta feira, um considerável aumento de 42% em número de expositores, o que demonstra a relevância deste evento, que tem foco no relacionamento B2B e, consequentemente, torna este evento um excelente ambiente para negócios”, comemora.</p>
      `
    },
    {
      titulo: "<B>EXPECTATIVA DE NEGÓCIOS</B> PARA EMPRESAS BRASILEIRAS APÓS IN-COSMETICS NORTH AMERICA É DE <B>US$ 11,3 MILHÕES</B>",
      cor:'purple',
      show:false,
      conteudo: `
      <p>Realizada em Nova Iorque, nos Estados Unidos, entre os dias 17 e 18 de outubro, a edição 2018 da in-cosmetics North America, feira que reúne expositores de matérias-primas, fragrâncias, equipamento de laboratório, testes e soluções regulatórias, proporcionou aos participantes brasileiros 729 contatos comerciais e US$1,9 milhões em negócios realizados. A expectativa para os próximos 12 meses é que sejam gerados cerca de US$11,3 milhões em novos negócios resultantes do evento. </p>

      <p>Durante os dois dias, a feira, gerou oportunidades para mais de 150 expositores, sendo 11 brasileiros. A participação nacional é uma iniciativa do Beautycare Brazil, uma realização da Associação Brasileira da Indústria de Higiene Pessoal, Perfumaria e Cosméticos (ABIHPEC) e da Agência Brasileira de Promoção de Exportações e Investimentos (Apex-Brasil). </p>

      <p>A gerente do projeto Beautycare Brazil, Gueisa Silvério, conta que, nessa terceira edição, as empresas brasileiras notaram que a feira vem se tornando cada ano mais relevante. “O público é bastante qualificado, pois, em geral, os profissionais que estão no evento são grandes responsáveis pelas decisões dos negócios”, destaca. </p>

      <p>Para Candida Borges, do setor de promoção comercial do Consulado Geral do Brasil, em Nova Iorque, a participação das empresas brasileiras na in-cosmetics tem evoluído. “Nesta edição, vários expositores confirmaram resultados positivos tanto com a feira quanto com a iniciativa Beautycare Brazil. Fiquei bem impressionada com o profissionalismo dos representantes no relacionamento com os visitantes.”</p>
      `
    },
    {
      titulo: "EMPRESAS BRASILEIRAS DEVEM GERAR <B> US$ 19,2 EM NEGÓCIOAS</B> APÓS A COSMOPROF WORLDWIDE",
      cor:'orange',
      show:false,
      conteudo: `
      <div class="d-flex justify-content-center">
        <div class="col-6">
          <img src="assets/images/noticias/Pasted.jpg" class="img-fluid" width="100%" />
          <p class="text-center"><small><em>Gueisa Silverio, gerente do Beautycare Brazil; Julio F. Laranjeira, Cônsul do Brasil em Milão; Anna Marcella e Maria Ester, representantes do Consulado; João Carlos Basilio, presidente-executivo da ABIHPEC; Gabriel Isaacsson, gestor de Projeto da Apex-Brasil</em></small></p>
        </div>
      </div>

      <p>Com um aumento de 30% da presença brasileira em relação a 2017, as 46 empresas de higiene pessoal, perfumaria e cosméticos presentes à Cosmoprof Worldwide (Bolonha - Itália), principal evento mundial do setor, encerram o evento nessa segunda-feira (19) totalizando mais de US$3,5 milhões em negócios fechados e 1,7 mil contatos comerciais. A expectativa para os próximos 12 meses é que sejam gerados cerca de US$19,2 milhões.-</p>

      <p>Durante os cinco dias de feira, a Cosmoprof Worldwide 2018 recebeu visitantes de mais de 70 países. A participação nacional é uma iniciativa do Beautycare Brazil, uma realização da Associação Brasileira da Indústria de Higiene Pessoal, Perfumaria e Cosméticos (ABIHPEC) e da Agência Brasileira de Promoção de Exportações e Investimentos (Apex-Brasil).</p>

      <p>João Carlos Basilio, presidente-executivo da ABIHPEC, acompanhou e faz um balanço da participação do Brasil. “Os produtos nacionais têm inovação, tecnologia e sem dúvida nenhuma são do agrado dos visitantes que passaram pelos pavilhões onde o país estava representado. Todos os expositores brasileiros garantiram pelo menos um negócio. É importante sairmos de Bolonha com resultados positivos, para motivar e reforçar o setor na busca de melhores resultados para 2018 e 2019”, pondera.</p>

      <p>Para Julio César Fontes Laranjeira, Cônsul Geral Adjunto do Consulado Geral do Brasil em Milão, a Cosmoprof é o evento de maior envergadura e relevância para o setor mundialmente. “Em 2018 a feira contou com 2800 expositores, 3% a mais em relação a 2017. A participação do Brasil no evento, portanto, é de fundamental importância para a internacionalização das empresas brasileiras do setor, para a realização de contatos, aprofundamento de conhecimento do mercado internacional”.</p>

      <p>O cônsul destacou ainda que fica patente o interesse cada vez maior do setor de higiene pessoal, perfumaria e cosméticos do Brasil de se fazer representar nesse importante evento, com vistas a expandir sua atuação no mundo. ” O produto brasileiro atrai a atenção do público especializado pelo seu diferencial de diversidade, sustentabilidade e inovação”.</p>

      <p>Entre as categorias de produtos nacionais expostos na feira, tivemos cabelos, unhas, cuidados com a pele, estética/SPA e acessórios, como mobiliário para salões de beleza e adesivos para maquiagem. “A divisão das empresas em pavilhões separados por categorias de produtos garantiu maior assertividade em relação ao perfil dos visitantes para as empresas expositoras do Brasil. O formato favoreceu a realização de negócios e a feira foi um sucesso. Estaremos aqui com uma representatividade ainda maior em 2019”, conclui Gueisa Silvério, gerente do Beautycare Brazil.  </p>
      `
    },
    {
      titulo: "<B>BRASIL SE DESTACA EM FEIRA NO ORIENTE MÉDIO</B> COM PRODUTOS INOVADORES",
      cor:'red',
      show:false,
      conteudo: `
      <div class="d-flex justify-content-center">
        <div class="col-6">
          <img src="assets/images/noticias/fotonoticia2.png" class="img-fluid" width="100%" />
          <p class="text-center"><small><em>Empresas de higiene pessoal, perfumaria e cosméticos abriram espaço para novos negócios e fizeram 1.500 novos contatos comerciais </em></small></p>
        </div>
      </div>

      <p>O Oriente Médio está tornando-se um mercado cada vez mais relevante para as indústrias brasileiras de higiene pessoal, perfumaria e cosméticos. A mais importante feira do setor na região, a Beautyworld Middle East 2018, entre os dias 8 e 10 de maio, contou com a participação de 42 empresas nacionais e teve como resultado negócios ao país de US$ 3,4 milhões, além de 1.500 contatos comerciais. A expectativa é que sejam gerados nos próximos 12 meses mais US$ 18,7 milhões, fruto das negociações realizadas durante o evento. </p>

      <p>Durante os três dias, a feira recebeu mais de 1.700 expositores de 62 países e 25 pavilhões internacionais, proporcionando um ambiente repleto de inovação, tendências pioneiras, profissionais talentosos e produtos revolucionários. A participação brasileira foi viabilizada pelo Beautycare Brazil – projeto setorial coordenado pela Associação Brasileira da Indústria de Higiene Pessoal, Perfumaria e Cosméticos (ABIHPEC), em parceria com Agência Brasileira de Promoção de Exportações e Investimentos (Apex-Brasil).</p>

      <p>As empresas brasileiras consideraram a participação na feira bastante proveitosa, já que rendeu contatos importantes, inclusive com novos mercados, como Índia, Paquistão e Irã, além de ótimas perspectivas de bons negócios. Segundo Gueisa Silvério, gerente do Beautycare Brazil, “o nosso propósito é auxiliar as empresas a avançar no processo de internacionalização e a expectativa para a edição 2018 da Beautyworld Middle East era muito grande. Ficamos satisfeitos com a organização do evento e o resultado, que evidencia a ótima receptividade dos produtos nacionais no exterior”.</p>

      <p>Entre as categorias do mercado brasileiro que chamam a atenção dos visitantes da região está a de produtos para cabelos, que são reconhecidos internacionalmente como referência de inovação e tecnologia. “A grande miscigenação do Brasil estimula a nossa indústria a inovar para atender à grande e variada demanda local, o que acaba atraindo os olhares estrangeiros e abrindo o mercado para que nossas empresas exportem”, explica Gueisa. Além do forte nicho de cabelos, as empresas levaram suas novidades em categorias como pele, unhas e acessórios.</p>

      <p>As 42 empresas que participaram da feira são: Agilise Cosméticos, Amend, Bel Col, Beox Professional, Bijoux De Pele, Bionat, Brazil Cosmetics, Brazilian Kimberlite Clay, Brazilian Secrets Hair, Clorofitum Cosméticos, De Sírius, Ecosmetics Salon, Embelleze, Extremelly Cosmetics, Fashion Cosméticos, Fina Flor, Fit Cosméticos, Floractive, Gnano, Haskell Cosmética Natural, Honma Tokyo, Ideal Cosméticos, Kostume Beauty From Brazil, Larree Cosmetiques, Mac Paul, Maxibrasil, Mediterrani Professional, Mundial, Nazca Cosméticos, NG de France, Prolab Cosmetics, Result Cosmetics, Samba Brazilian, Secrets Professional, Sorali Cosmetic, Star Cosmetics International, Sther Cosméticos, Sweet Professional, Sweeteez, Tech Line, Vita Gold, Yamá Cosméticos</p>
      `
    },
    {
      titulo: "EMPRESAS BRASILEIRAS DEVEM GERAR <B>MAIS DE US$ 16,3 MILHÕES EM NEGÓCIOS</B> APÓS A FEIRA IN-COSMETICS GLOBAL",
      cor:'purple',
      show:false,
      conteudo: `
      <div class="d-flex justify-content-center">
        <div class="col-6">
          <img src="assets/images/noticias/image002.jpg" class="img-fluid" width="100%" />
          <p class="text-center"><small><em>Pavilhão brasileiro na in-cosmetics Global 2018</em></small></p>
        </div>
      </div>

      <p>As empresas brasileiras fecharam US$ 5,9 milhões em negócios e realizaram mais de 1,2 mil contatos comerciais na in-cosmetics Global, principal evento mundial de ingredientes voltado à indústria de higiene pessoal, perfumaria e cosméticos, que aconteceu entre os dias 17 e 19 de abril em Amsterdã, na Holanda. A expectativa para os próximos 12 meses é que sejam gerados mais US$ 16,3 milhões em novos negócios.</p>

      <p>Ao longo dos três dias de feira, a in-cosmetics Global 2018 reuniu cerca de 800 expositores e recebeu visitantes de diversos países. A participação nacional contou com 11 empresas e foi uma iniciativa do projeto setorial Beautycare Brazil, uma realização da Associação Brasileira da Indústria de Higiene Pessoal, Perfumaria e Cosméticos (ABIHPEC) e da Agência Brasileira de Promoção de Exportações e Investimentos (Apex-Brasil).</p>

      <div class="d-flex justify-content-center">
        <div class="col-6">
          <img src="assets/images/noticias/fotonoticia2interno.jpg" class="img-fluid" width="100%" />
          <p class="text-center"><small><em>Daniel Zanetti e Stephen Guthartz, executivos da Reed Exhibition; Tiago Milani, coordenador do Beautycare Brazil; Regina Dunlop, embaixadora do Brasil nos Países Baixos; e Gueisa Silverio, gerente do Beautycare Brazil</em></small></p>
        </div>
      </div>

      <p>Gueisa Silverio, gerente do Beautycare Brazil, acompanhou os expositores e ressaltou a importância do evento. “A participação em uma feira itinerante, como a in-cosmetics, permite que os expositores apresentem os ingredientes nacionais a diversos fabricantes, despertando o interesse mundial para os nossos produtos e, consequentemente, promovendo a geração de mais negócios”, destaca. “A edição do ano que vem deve acontecer em Paris e contará novamente com a participação de empresas brasileiras”, afirma Gueisa.</p>

      <p>Para a Embaixadora do Brasil nos Países Baixos, Regina Maria Cordeiro Dunlop, que visitou a feira no dia da abertura, a participação do Brasil constitui uma oportunidade valiosa para os expositores ampliarem sua rede de contatos e avançarem no processo de internacionalização de um setor que ganha cada vez maior relevância para o país. “O Brasil tem características únicas, que o tornam particularmente atrativo para o setor mundial de cosméticos. Além de ser o quarto maior mercado consumidor, o país, com a sua população etnicamente diversa, desenvolve uma indústria criativa e inovadora. ”</p>

      <p>As empresas que representaram o país na in-cosmetics Global, por meio do Beautycare Brazil, foram: ALLERGISA, AQIA, ASSESSA, ATINA ATIVOS NATURAIS, BRAZILIAN KIMBERLITE CLAY, CHEMYUNION, CITRÓLEO, ICOSMETOLOGIA EDUCACIONAL, NANOVETORES, OXITENO e PLANTUS.</p>
      `
    },

  ];
  constructor() { }

  ngOnInit() {
  }

  public toggleNoticia(noticia):void{
    noticia.show = (noticia.show)?false:true;
  }

}
