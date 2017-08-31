module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _ReplaceVideo = __webpack_require__(1);

	var _ReplaceVideo2 = _interopRequireDefault(_ReplaceVideo);

	var _ReplaceVideoPoster = __webpack_require__(3);

	var _ReplaceVideoPoster2 = _interopRequireDefault(_ReplaceVideoPoster);

	var _Settings = __webpack_require__(4);

	var _Settings2 = _interopRequireDefault(_Settings);

	var _ExcerptFunction = __webpack_require__(5);

	var ExcerptFunction = _interopRequireWildcard(_ExcerptFunction);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var React = novi.react.React;


	var Plugin = {
	    name: "novi-plugin-vide",
	    title: "Novi Vide",
	    description: "Novi Vide description",
	    version: "1.0.2",
	    dependencies: {
	        novi: "0.8.4"
	    },
	    defaults: {
	        querySelector: '.novi-vide'
	    },
	    ui: {
	        editor: [_ReplaceVideo2.default, _ReplaceVideoPoster2.default],
	        settings: React.createElement(_Settings2.default, null)
	    },
	    excerpt: ExcerptFunction.validVideo
	};

	novi.plugins.register(Plugin);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _Utils = __webpack_require__(2);

	var Utils = _interopRequireWildcard(_Utils);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var React = novi.react.React;
	var Icons = novi.ui.icons;
	var Icon = novi.ui.icon;
	var Types = novi.types;


	var ReplaceVideo = {
	    trigger: React.createElement(
	        Icon,
	        null,
	        Icons.ICON_FILM_PLAY
	    ),
	    tooltip: "Replace Video",
	    closeIcon: "submit",
	    title: "Replace Video",
	    onTriggerClick: onClick
	};

	exports.default = ReplaceVideo;


	function onClick(element) {
	    novi.media.choose({ onSubmit: onSumbit.bind(this, element), type: Types.mediaVideo });
	}

	function onSumbit(element, path) {
	    var correctPath = void 0,
	        videBg = void 0,
	        videOpts = void 0,
	        videData = void 0;

	    correctPath = path.replace(/['|"]/g, "");
	    videBg = novi.element.getAttribute(element, "data-vide-bg");
	    videOpts = novi.element.getAttribute(element, "data-vide-options");

	    videData = Utils.getVideData({ videBg: videBg, videOpts: videOpts, video: correctPath });

	    novi.element.setAttribute(element, "data-vide-bg", videData.bg);
	    novi.element.setAttribute(element, "data-vide-options", videData.opts);

	    novi.page.forceUpdate();
	}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.basename = basename;
	exports.getFileInfo = getFileInfo;
	exports.getVideData = getVideData;
	function isComplexDataBg(value) {
	    var regexp = new RegExp(/\s*(mp4\s*:|ogv\s*:|webm\s*:)/g);
	    return regexp.test(value);
	}

	function getDataBg(oldValue, videoPath, posterPath) {
	    var newValue = void 0,
	        poster = void 0;
	    poster = oldValue.match(/poster\s*\:\s*[^\,]*/i)[0];
	    if (videoPath) {
	        switch (getFileInfo(videoPath).extension) {
	            case "mp4":
	                {
	                    newValue = "mp4: " + videoPath + ", " + poster;
	                    break;
	                }
	            case "ogv":
	                {
	                    newValue = "ogv: " + videoPath + ", " + poster;
	                    break;
	                }
	            case "webm":
	                {
	                    newValue = "webm: " + videoPath + ", " + poster;
	                    break;
	                }
	        }
	    }
	    if (posterPath) {
	        newValue = oldValue.replace(poster, "poster: " + posterPath);
	    }
	    return newValue;
	}

	function basename(path) {
	    if (path) {
	        return path.split("/").pop();
	    }
	    return null;
	}

	function getFileInfo(path) {
	    var baseName = basename(path);
	    var index = void 0;
	    for (var i = baseName.length; i >= 0; i--) {
	        if (baseName.charCodeAt(i) === 46) {
	            index = i;
	            break;
	        }
	    }
	    return {
	        name: baseName.substring(0, index),
	        extension: baseName.substring(index + 1)
	    };
	}

	function getVideData(_ref) {
	    var videBg = _ref.videBg,
	        videOpts = _ref.videOpts,
	        poster = _ref.poster,
	        video = _ref.video;

	    var videData = {};

	    // if poster change
	    if (poster) {
	        if (videOpts) {
	            var regexp = new RegExp(/posterType\s*\:\s*[a-z]*/g);
	            videData.opts = videOpts.replace(regexp, "posterType: " + getFileInfo(poster).extension);
	        } else {
	            videData.opts = "posterType: " + getFileInfo(poster).extension;
	        }
	    }

	    // if change video
	    else {
	            if (videOpts) {
	                videData.opts = videOpts; // if video change and options already set
	            } else {
	                videData.opts = "posterType: detect"; // if video change and options not set yet
	            }
	        }

	    // if data-vide-bg set as json
	    if (isComplexDataBg(videBg)) {
	        videData.bg = getDataBg(videBg, video, poster);
	    }
	    // if data-vide-bg set as one value
	    else {
	            if (poster) {
	                videData.bg = "mp4: " + videBg + ".mp4, ogv: " + videBg + ".ogv, webm: " + videBg + ".webm, poster: " + poster;
	            } else {
	                switch (getFileInfo(video).extension) {
	                    case "mp4":
	                        {
	                            videData.bg = "mp4: " + video + ", poster: " + videBg;
	                            break;
	                        }
	                    case "ogv":
	                        {
	                            videData.bg = "ogv: " + video + ", poster: " + videBg;
	                            break;
	                        }
	                    case "webm":
	                        {
	                            videData.bg = "webm: " + video + ", poster: " + videBg;
	                            break;
	                        }
	                }
	            }
	        }

	    return videData;
	}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _Utils = __webpack_require__(2);

	var Utils = _interopRequireWildcard(_Utils);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var React = novi.react.React;
	var Icons = novi.ui.icons;
	var Types = novi.types;


	var ReplaceVideoPoster = {
	    trigger: Icons.ICON_BG_IMAGE,
	    tooltip: "Replace Poster Image",
	    closeIcon: "submit",
	    title: "Replace Poster",
	    onTriggerClick: onClick
	};

	exports.default = ReplaceVideoPoster;


	function onClick(element) {
	    var ratio = element.offsetWidth / element.offsetHeight;
	    novi.media.choose({ onSubmit: onSubmitCrop.bind(this, element), type: Types.mediaImage, ratio: ratio });
	}

	function onSubmitCrop(element, path) {
	    var correctPath = void 0,
	        videBg = void 0,
	        videOpts = void 0,
	        videData = void 0;

	    correctPath = path.replace(/['|"]/g, "");
	    videBg = novi.element.getAttribute(element, "data-vide-bg");
	    videOpts = novi.element.getAttribute(element, "data-vide-options");

	    videData = Utils.getVideData({ videBg: videBg, videOpts: videOpts, poster: correctPath });

	    novi.element.setAttribute(element, "data-vide-bg", videData.bg);
	    novi.element.setAttribute(element, "data-vide-options", videData.opts);

	    novi.page.forceUpdate();
	}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = novi.react.React;
	var Component = novi.react.Component;
	var Input = novi.ui.input;
	var Button = novi.ui.button;

	var Settings = function (_Component) {
	    _inherits(Settings, _Component);

	    function Settings(props) {
	        _classCallCheck(this, Settings);

	        var _this = _possibleConstructorReturn(this, (Settings.__proto__ || Object.getPrototypeOf(Settings)).call(this));

	        _this.state = {
	            settings: props.settings
	        };
	        _this.saveSettings = _this.saveSettings.bind(_this);
	        _this.onChange = _this.onChange.bind(_this);
	        return _this;
	    }

	    _createClass(Settings, [{
	        key: "componentWillReceiveProps",
	        value: function componentWillReceiveProps(props) {
	            this.setState({
	                settings: props.settings
	            });
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            return React.createElement(
	                "div",
	                null,
	                React.createElement(
	                    "span",
	                    { style: { letterSpacing: "0,0462em" } },
	                    "Vide Plugin"
	                ),
	                React.createElement(
	                    "div",
	                    { style: { fontSize: 13, color: "#6E778A", marginTop: 21 } },
	                    "Apply this plugin to elements which are matching selector:"
	                ),
	                React.createElement(Input, { style: { marginTop: 10, width: 340 }, value: this.state.settings.querySelector, onChange: this.onChange }),
	                React.createElement(
	                    "div",
	                    { style: { marginTop: 30 } },
	                    React.createElement(Button, { type: "primary", messages: { textContent: "Save Settings" }, onClick: this.saveSettings })
	                )
	            );
	        }
	    }, {
	        key: "onChange",
	        value: function onChange(e) {
	            var value = e.target.value;
	            this.setState({
	                settings: {
	                    querySelector: value
	                }
	            });
	        }
	    }, {
	        key: "saveSettings",
	        value: function saveSettings() {
	            novi.plugins.settings.update("novi-plugin-vide", this.state.settings);
	        }
	    }]);

	    return Settings;
	}(Component);

	exports.default = Settings;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.validVideo = validVideo;
	function validVideo(element) {
	    var videoPath = getAction(element);
	    return videoPath !== null;
	}

	function getAction(element) {
	    var videoPath = novi.element.getAttribute(element, 'data-vide-bg');
	    return videoPath;
	}

/***/ })
/******/ ]);