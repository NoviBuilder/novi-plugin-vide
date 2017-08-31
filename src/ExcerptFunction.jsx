
export function validVideo(element){
    let videoPath = getAction(element);
    return videoPath !== null;
}

function getAction(element){
    let videoPath = novi.element.getAttribute(element, 'data-vide-bg');
    return videoPath;
}
