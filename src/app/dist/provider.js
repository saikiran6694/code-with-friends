"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("next-auth/react");
var theme_provider_1 = require("@/components/theme-provider");
var Providers = function (_a) {
    var children = _a.children;
    return (react_1["default"].createElement(react_2.SessionProvider, null,
        react_1["default"].createElement(theme_provider_1.ThemeProvider, { attribute: "class", defaultTheme: "system", enableSystem: true, disableTransitionOnChange: true }, children)));
};
exports["default"] = Providers;
