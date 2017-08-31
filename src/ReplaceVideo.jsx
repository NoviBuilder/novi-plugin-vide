const React = novi.react.React;
const Icons = novi.ui.icons;
const Icon = novi.ui.icon;
const Types = novi.types;
import * as Utils from "./Utils";

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
    let correctPath, videBg, videOpts, videData;

    correctPath = path.replace(/['|"]/g, ``);
    videBg = novi.element.getAttribute(element, "data-vide-bg");
    videOpts = novi.element.getAttribute(element, "data-vide-options");

    videData = Utils.getVideData({videBg, videOpts, video: correctPath});

    novi.element.setAttribute(element, "data-vide-bg", videData.bg);
    novi.element.setAttribute(element, "data-vide-options", videData.opts);

    novi.page.forceUpdate();
}