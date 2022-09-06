/**
 * 
 */

const images = document.querySelectorAll(".content img");
images.forEach(item => item.addEventListener('click', handleZoomImage));
function handleZoomImage(event) {
    //lay ra duong dan src
    const image = event.target.getAttribute('src');
    const template = `
    <div class="lightbox">
    <div class="lightbox-content">
        <i class = "fa fa-angle-left lightbox-prev"></i>
        <img class="lightbox-img" 
                src="${image}" 
                alt="">
        <i class = "fa fa-angle-right lightbox-next"></i>
    </div>

    </div>
    `;
    document.body.insertAdjacentHTML("beforeend", template);

}
let index = 0;
document.body.addEventListener('click', function (e) {
    const lightImage = document.querySelector('.lightbox-img');
    let lightSrc = "";

    if (e.target.matches('.lightbox')) {
        //remove lightbox  out of dom
        e.target.parentNode.removeChild(e.target);
    } else if (e.target.matches('.lightbox-next')) {
        //handle next image
        lightSrc = lightImage.getAttribute('src');
        index = [...images].findIndex(item => item.getAttribute('src') === lightSrc);
        index = index + 1;
        if (index > images.length - 1) {
            index = 0;
        }
        const newSrc = [...images][index].getAttribute('src');
        lightImage.setAttribute('src', newSrc);
    } else if (e.target.matches('.lightbox-prev')) {
        //handle prev image
        lightSrc = lightImage.getAttribute('src');
        index = [...images].findIndex(item => item.getAttribute('src') === lightSrc);
        index = index + 1;
        if (index < 0) {
            index = images.length - 1;
        }
        const newSrc = [...images][index].getAttribute('src');
        lightImage.setAttribute('src', newSrc);
    }
})