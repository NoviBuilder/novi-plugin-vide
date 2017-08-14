const React = novi.react.React;
const Icons = novi.ui.icons;
const Icon = novi.ui.icon;
const modal = novi.modal;
const acceptVideos = novi.types.videos;

const ReplaceVideo = {
    trigger: <Icon>{Icons.ICON_FILM_PLAY}</Icon>,
    tooltip: "Replace Video",
    closeIcon: "submit",
    title: "Replace Video",
    onTriggerClick: onClick
};

export default ReplaceVideo;


function onClick(element) {
    modal.fileUpload({
        path: novi.video.directory,
        accept: acceptVideos,
        messages: {
            submit: "Upload an video",
            title: "Upload an video",
            body: 'Click on "Choose File" to upload your video.'
        },
        onSubmitClick: onSubmitClick.bind(this, element)
    })
}

function onSubmitClick(element, path, data) {
    let correctPath = path.replace(/['|"]/g, ``);

    novi.element.setAttribute(element, "data-vide-path", correctPath);
    novi.page.forceUpdate();
}