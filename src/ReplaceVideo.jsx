const React = novi.react.React;
const Icons = novi.ui.icons;
const Icon = novi.ui.icon;
const Types = novi.types;
import * as Utils from "./Utils";
const messages = novi.language.getDataByKey("novi-plugin-vide");
const ReplaceVideo = {
    trigger: <Icon>{Icons.ICON_FILM_PLAY}</Icon>,
    tooltip: messages.editor.replaceVideo.tooltip,
    closeIcon: "submit",
    title: messages.editor.replaceVideo.title,
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