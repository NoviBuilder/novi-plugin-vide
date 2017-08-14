const React = novi.react.React;
const Icons = novi.ui.icons;
const modal = novi.modal;
const acceptImages = novi.types.images;

const ReplaceVideoPoster = {
    trigger: Icons.ICON_BG_IMAGE,
    tooltip: "Replace Poster Image",
    closeIcon: "submit",
    title: "Replace Poster",
    onTriggerClick: onClick
};

export default ReplaceVideoPoster;


function onClick(element) {
    modal.fileUpload({
        path: novi.video.directory,
        accept: acceptImages,
        messages: {
            submit: "Upload Poster",
            title: "Upload poster",
            body: 'Click on "Choose File" to upload your poster.'
        },
        onSubmitClick: onSubmitClick.bind(this, element)
    })
}

function onSubmitClick(element, path, data) {
    if (data.underLimit){
        return setBackground(element, path);
    }
    let originalRatio = element.offsetWidth / element.offsetHeight;
    modal.imageCrop({
        path,
        aspect: originalRatio,
        x: 0,
        y: 0,
        width: 100,
        height: 100,
        onCrop: setBackground.bind(this, element, path)
    });
}

function setBackground(element, path){
    let correctPath = path.replace(/['|"]/g, ``);
    novi.element.setAttribute(element, "data-vide-poster", correctPath);
    novi.page.forceUpdate();
}
