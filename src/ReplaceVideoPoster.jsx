const React = novi.react.React;
const Icons = novi.ui.icons;
const Types = novi.types;
import * as Utils from "./Utils";

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
    let correctPath, videBg, videOpts, videData;

    correctPath = path.replace(/['|"]/g, ``);
    videBg = novi.element.getAttribute(element, "data-vide-bg");
    videOpts = novi.element.getAttribute(element, "data-vide-options");


    videData = Utils.getVideData({videBg, videOpts, poster: correctPath});

    novi.element.setAttribute(element, "data-vide-bg", videData.bg);
    novi.element.setAttribute(element, "data-vide-options", videData.opts);

    novi.page.forceUpdate();
}
