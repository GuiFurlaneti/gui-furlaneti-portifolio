$(document).ready(function() {
  $('.ct-modal-desc-exp').hide();
});

function abrirDetalhes(text){
  $('body').css('overflow', 'hidden'); // Bloquear a rolagem
  $('.ct-modal-desc-exp').fadeIn();

  $('html, body').animate({
    scrollTop: $('#modalDetalhes').offset().top
  }, 500); 

  $('#modalDetalhes').focus();

  switch (text) {

    case "bacaneli":
      preencheDetalhesBacaneli();
      break;

    case "vegas":
      preencheDetalhesVegas();
      break;

  }


}

function fecharDetalhes(){
  $('body').css('overflow', 'auto'); // Bloquear a rolagem
  $('.ct-modal-desc-exp').hide();
}

function preencheDetalhesBacaneli(){

  $('.ct-title-cargo-img').css('background-image', 'url("./img/bacaneli-consig-logo.png")');

  var title = "Bacaneli Consig";
  var cargo = "Cargo: Promoção de Vendas";
  var duracao = "Tempo: 8 meses (Tempo Integral)";

  var desc = `Na Bacaneli Consig fui
  Promotor de Vendas Tempo durante 8 meses, durante esse tempo fui responsável por promover
  a antecipação de FGTS, utilizando WhatsApp e outras plataformas digitais para 
  contatar clientes. Meu trabalho envolvia administrar e realizar atendimentos, 
  garantindo que as informações fossem claras e que o processo fosse o mais eficiente
  possível para os clientes. Contribuí para a administração de vendas digitais e 
  fortaleci minhas habilidades em comunicação digital e atendimento ao cliente.`;

  $('#title-exp').text(title);
  $('#cargo-exp').text(cargo);
  $('#duracao-exp').text(duracao);
  $('#desc-exp').text(desc);


}

function preencheDetalhesVegas(){

  $('.ct-title-cargo-img').css('background-image', 'url("./img/iconExperienceVegas.png")');

  var title = "Vegas Transportes";
  var cargo = "Coordenador de Projetos Digitais";
  var duracao = "Tempo: 11 Meses";

  var desc = `Fui um Coordenador de Projetos Digitais, Durante 11 meses minha atuação na 
  Vegas Transportes, fui responsável liderar e transformar o ramo digital da empresa.
  Desenvolvi e implementei estratégias para otimizar processos internos, resultando em 
  uma melhoria significativa na eficiência operacional. Como parte do meu trabalho, 
  coordenei a criação e o desenvolvimento de um sistema de cotação digital, com design 
  completo realizado no Figma, integrando APIs e funcionalidades que aprimoraram o 
  atendimento ao cliente. Minhas principais responsabilidades incluíram: desenvolvimento 
  de estratégias de transformação digital, gestão de projetos digitais desde a concepção
  até a execução, e liderança de equipe para garantir a entrega de soluções digitais de
  alta qualidade.`;

  $('#title-exp').text(title);
  $('#cargo-exp').text(cargo);
  $('#duracao-exp').text(duracao);
  $('#desc-exp').text(desc);


}