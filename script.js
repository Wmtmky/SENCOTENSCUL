
window.onload = function() {

}

function toggleInfobox() {
    let infoLightbox = document.getElementById('info-lightbox');
    infoLightbox.style.display = (infoLightbox.style.display != 'flex') ? 'flex' : 'none';
}

function toggleUnit(unitNum, event) {
    if(event.target?.innerText.match("exercise|subdirectory")) return;
    location.href.replace("");
}











