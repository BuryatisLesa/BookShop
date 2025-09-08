function getSlide(numberSlide: number = 0){
    const slides: NodeList | null = document.querySelectorAll(".slider-promo__item");

    slides.forEach((slide: object, index: number) => {

        const htmlSlide = slide as HTMLElement;
        htmlSlide.style.display = "none";

        if (index === numberSlide){
            htmlSlide.style.display = "block";
        }
    });
}
getSlide();
function navigationCircle(){
    const circles: NodeList | null = document.querySelectorAll(".slider-promo__circle-container-circle");

    circles.forEach((circle: object, index:number) => {
        const htmlCircle = circle as HTMLElement;
        htmlCircle.addEventListener('click', () => {
            getSlide(index);
        });
})}

navigationCircle();