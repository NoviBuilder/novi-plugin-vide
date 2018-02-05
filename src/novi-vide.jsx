const React = novi.react.React;
import ReplaceVideo from "./ReplaceVideo";
import ReplaceVideoPoster from "./ReplaceVideoPoster";
import Settings from "./Settings";
import * as ExcerptFunction from "./ExcerptFunction";
const Language = novi.language;
const Plugin = {
    name: "novi-plugin-vide",
    title: "Novi Vide",
    description: "Novi Vide description",
    version: "1.0.4",
    dependencies: {
        novi: "0.9.0"
    },
    defaults: {
        querySelector: '.novi-vide'
    },
    ui: {
        editor: [ReplaceVideo, ReplaceVideoPoster],
        settings: <Settings />,
    },
    excerpt : ExcerptFunction.validVideo,
    onLanguageChange: onLanguageChange
};

function onLanguageChange(plugin){
    let messages = Language.getDataByKey("novi-plugin-vide");

    plugin.ui.editor[0].title = messages.editor.replaceVideo.title;
    plugin.ui.editor[0].tooltip = messages.editor.replaceVideo.tooltip;

    plugin.ui.editor[1].title = messages.editor.replacePoster.title;
    plugin.ui.editor[1].tooltip = messages.editor.replacePoster.tooltip;

    return plugin;
}

novi.plugins.register(Plugin);