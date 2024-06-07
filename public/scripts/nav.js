function nav_main(hrf) {

 document.write('<div class="nav-scroller">');
 document.write('<nav class="nav-scroller__items dragscroll">');

 if(hrf=="main") {
   document.write('<a href="#" class="nav-scroller__item nav-scroller__item_active">Главная</a>');
 }
 else {
  document.write('<a href="/" class="nav-scroller__item">Главная</a>');
 }
  if(hrf=="squad") {
   document.write('<a href="#" class="nav-scroller__item  nav-scroller__item_active">Состав</a>');
  }
  else {
   document.write('<a href="/squad" class="nav-scroller__item">Состав</a>');
 }
  if(hrf=="trophies") {
    document.write(' <a href="#" class="nav-scroller__item   nav-scroller__item_active">Достижения</a>');
   }
  else {
   document.write(' <a href="/trophies" class="nav-scroller__item">Достижения</a>');
  }
      if(hrf=="contacts") {
          document.write('<a href="#" class="nav-scroller__item nav-scroller__item_active">Контакты</a>');
       }
       else {
       document.write('<a href="/contacts" class="nav-scroller__item">Контакты</a>');
       }
 document.write('</nav>');
 document.write('</div>');
}
