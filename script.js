window.addEventListener('load', function(){
    //How many slides?
    const slideCount = document.querySelectorAll('#slider-wrapper ul li').length;
    //How wide is the slide?
    const slideWidth = document.querySelector('#slider-wrapper').offsetwidth;
    //Total width of the slider
    const totalWidth = slideCount * slideWidth + 'px';
    //Slider DOM element
    const slider = document.querySelector('#slider-wrapper ul');
    //Next button
    const next = document.querySelector('#next');
    //Previous button
    const previous = document.querySelector('#prev');

    let leftPosition = 0;
    let counter = 0;
    slider.style.width = totalWidth;

    next.addEventListener('click', function(evt){
        evt.preventDefault();
        counter++;
        if (counter == slideCount){
            counter = 0;
            leftPosition = 0;
            slider.style.left = leftPosition;
        }
        else{
            leftPosition = `-${counter * slideWidth}px`;
            slider.style.left = leftPosition;
        }
    });
});