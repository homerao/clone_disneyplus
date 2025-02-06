
document.addEventListener('DOMContentLoaded',function(){
const buttons = document.querySelectorAll('[data-tab-button]');
const tabContainer = document.querySelectorAll('[data-tab-id]');
const questions = document.querySelectorAll('[data-faq-question]');
const heroSection = document.querySelector('.hero');

// header 
window.addEventListener('scroll', function(){
  const alturaHero = heroSection.clientHeight;
   const posicaoAtual = window.scrollY;
   if(posicaoAtual < alturaHero){
     
     ocultaElementodoHeader();
   } else {
     exibeElementosDoHeader();
   }
}); 


//efeito nos botões
for(let i =0; i < buttons.length;i++){
 buttons[i].addEventListener('click', function (botao){
   console.log(botao.target);
   const abaAlvo = botao.target.dataset.tabButton;
   const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
   escondeTodasAbas();
   aba.classList.add('shows__list--is-active');
   removeBotaoAtivo();
   botao.target.classList.add('shows__tabs__button--is-active');
   
 });
}
  //for para a faq question
  for(let i =0; i < questions.length;i++){
    questions[i].addEventListener('click',abreOuFechaResposta); 
  }
});
// add button no header
function ocultaElementodoHeader(){
  const header = document.querySelector('header');
  header.classList.add('header--is-hidden');
}
// exibe elementos do header
function exibeElementosDoHeader(){
  const header = document.querySelector('header');
  if(header.classList.contains('header--is-hidden')){
    header.classList.remove('header--is-hidden');
  }
 
}
// 
function abreOuFechaResposta(elemento){
    const classe = 'faq__questions__item--is-open';
    console.log(elemento);
    const elementoPai = elemento.target.parentNode;
    elementoPai.classList.toggle(classe);
}
function removeBotaoAtivo(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    for(let i=0; i< buttons.length;i++){
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}
function escondeTodasAbas(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    for(let i=0; i< tabsContainer.length;i++){
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}
