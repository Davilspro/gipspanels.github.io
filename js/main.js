function view(n) {
    
    style = document.getElementById(n).style;
    arrow = document.querySelector(n + " i");
    if (style.display == 'block') {
        style.display ='none';
    }
    else {
        style.display ='block';
        arrow.style.rotate = "180deg";
        //document.getElementByClass(section-faq__items__item__list__arrow).style.Transorm
    }
        //(style.display == 'block') ? 'none' : 'block';
}