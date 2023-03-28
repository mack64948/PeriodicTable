"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var web_1 = require("@react-spring/web");
var styles_module_css_1 = require("./styles.module.css");
var pages = [
    function (_a) {
        var style = _a.style;
        return <web_1.animated.div style={__assign(__assign({}, style), { background: 'lightpink' })}>A</web_1.animated.div>;
    },
    function (_a) {
        var style = _a.style;
        return <web_1.animated.div style={__assign(__assign({}, style), { background: 'lightblue' })}>B</web_1.animated.div>;
    },
    function (_a) {
        var style = _a.style;
        return <web_1.animated.div style={__assign(__assign({}, style), { background: 'lightgreen' })}>C</web_1.animated.div>;
    },
];
function IntroCarousel() {
    var _a = (0, react_1.useState)(0), index = _a[0], set = _a[1];
    var onClick = function () { return set(function (state) { return (state + 1) % 3; }); };
    var transRef = (0, web_1.useSpringRef)();
    var transitions = (0, web_1.useTransition)(index, {
        ref: transRef,
        keys: null,
        from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' }
    });
    (0, react_1.useEffect)(function () {
        transRef.start();
    }, [index]);
    return (<div className={"flex fill ".concat(styles_module_css_1["default"].container)} onClick={onClick}>
      {transitions(function (style, i) {
            var Page = pages[i];
            return <Page style={style}/>;
        })}
    </div>);
}
exports["default"] = IntroCarousel;
