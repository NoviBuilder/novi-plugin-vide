module.exports=function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return e[i].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var o=n(1),r=i(o),a=n(2),l=i(a),s=n(3),u=i(s),c=n(4),p=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(c),d=novi.react.React,v={name:"novi-plugin-vide",title:"Novi Vide",description:"Novi Vide description",version:"1.0.0",dependencies:{},defaults:{querySelector:".novi-vide"},ui:{editor:[r.default,l.default],settings:d.createElement(u.default,null)},excerpt:p.validVideo};novi.plugins.register(v)},function(e,t){"use strict";function n(e){l.fileUpload({path:novi.video.directory,accept:s,messages:{submit:"Upload an video",title:"Upload an video",body:'Click on "Choose File" to upload your video.'},onSubmitClick:i.bind(this,e)})}function i(e,t,n){var i=t.replace(/['|"]/g,"");novi.element.setAttribute(e,"data-vide-path",i),novi.page.forceUpdate()}Object.defineProperty(t,"__esModule",{value:!0});var o=novi.react.React,r=novi.ui.icons,a=novi.ui.icon,l=novi.modal,s=novi.types.videos,u={trigger:o.createElement(a,null,r.ICON_FILM_PLAY),tooltip:"Replace Video",closeIcon:"submit",title:"Replace Video",onTriggerClick:n};t.default=u},function(e,t){"use strict";function n(e){a.fileUpload({path:novi.video.directory,accept:l,messages:{submit:"Upload Poster",title:"Upload poster",body:'Click on "Choose File" to upload your poster.'},onSubmitClick:i.bind(this,e)})}function i(e,t,n){if(n.underLimit)return o(e,t);var i=e.offsetWidth/e.offsetHeight;a.imageCrop({path:t,aspect:i,x:0,y:0,width:100,height:100,onCrop:o.bind(this,e,t)})}function o(e,t){var n=t.replace(/['|"]/g,"");novi.element.setAttribute(e,"data-vide-poster",n),novi.page.forceUpdate()}Object.defineProperty(t,"__esModule",{value:!0});var r=(novi.react.React,novi.ui.icons),a=novi.modal,l=novi.types.images,s={trigger:r.ICON_BG_IMAGE,tooltip:"Replace Poster Image",closeIcon:"submit",title:"Replace Poster",onTriggerClick:n};t.default=s},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=novi.react.React,l=novi.react.Component,s=novi.ui.input,u=novi.ui.button,c=function(e){function t(e){n(this,t);var o=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return o.state={settings:e.settings},o.saveSettings=o.saveSettings.bind(o),o.onChange=o.onChange.bind(o),o}return o(t,e),r(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({settings:e.settings})}},{key:"render",value:function(){return a.createElement("div",null,a.createElement("span",{style:{letterSpacing:"0,0462em"}},"Vide Plugin"),a.createElement("div",{style:{fontSize:13,color:"#6E778A",marginTop:21}},"Apply this plugin to elements which are matching selector:"),a.createElement(s,{style:{marginTop:10,width:340},value:this.state.settings.querySelector,onChange:this.onChange}),a.createElement("div",{style:{marginTop:30}},a.createElement(u,{type:"primary",messages:{textContent:"Save Settings"},onClick:this.saveSettings})))}},{key:"onChange",value:function(e){var t=e.target.value;this.setState({settings:{querySelector:t}})}},{key:"saveSettings",value:function(){novi.plugins.settings.update("novi-plugin-vide",this.state.settings)}}]),t}(l);t.default=c},function(e,t){"use strict";function n(e){return null!==i(e)}function i(e){return novi.element.getAttribute(e,"data-vide-path")}Object.defineProperty(t,"__esModule",{value:!0}),t.validVideo=n}]);