const React = novi.react.React;
import ReplaceVideo from "./ReplaceVideo";
import ReplaceVideoPoster from "./ReplaceVideoPoster";
import Settings from "./Settings";
import * as ExcerptFunction from "./ExcerptFunction";

const Plugin = {
    name: "novi-plugin-vide",
    title: "Novi Vide",
    description: "Novi Vide description",
    version: "1.0.0",
    dependencies: {
    },
    defaults: {
        querySelector: '.novi-vide'
    },
    ui: {
        editor: [ReplaceVideo, ReplaceVideoPoster],
        settings: <Settings />,
    },
    excerpt : ExcerptFunction.validVideo
};

novi.plugins.register(Plugin);