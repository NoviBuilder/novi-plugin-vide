const React = novi.react.React;
const Icons = novi.ui.icons;
const Icon = novi.ui.icon;
const Types = novi.types;

const ReplaceVideo = {
    trigger: <Icon>{Icons.ICON_FILM_PLAY}</Icon>,
    tooltip: "Replace Video",
    closeIcon: "submit",
    title: "Replace Video",
    onTriggerClick: onClick
};

export default ReplaceVideo;


function onClick(element) {
    novi.media.choose({onSubmit: onSumbit.bind(this,element), type: Types.mediaVideo});
}

function onSumbit(element, path) {
    let correctPath = path.replace(/['|"]/g, ``);

    novi.element.setAttribute(element, "data-vide-path", correctPath);
    novi.page.forceUpdate();
}