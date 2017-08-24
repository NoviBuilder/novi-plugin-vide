const React = novi.react.React;
const Icons = novi.ui.icons;
const Types = novi.types;

const ReplaceVideoPoster = {
    trigger: Icons.ICON_BG_IMAGE,
    tooltip: "Replace Poster Image",
    closeIcon: "submit",
    title: "Replace Poster",
    onTriggerClick: onClick
};

export default ReplaceVideoPoster;


function onClick(element) {
    let ratio = element.offsetWidth / element.offsetHeight;
    novi.media.choose({onSubmit: onSubmitCrop.bind(this,element), type: Types.mediaImage, ratio})
}

function onSubmitCrop(element, path){
    let correctPath = path.replace(/['|"]/g, ``);
    novi.element.setAttribute(element, "data-vide-poster", correctPath);
    novi.page.forceUpdate();
}
