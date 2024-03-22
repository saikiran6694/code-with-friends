"use client";
"use strict";
exports.__esModule = true;
exports.Header = void 0;
var mode_toggle_1 = require("@/components/mode-toggle");
var button_1 = require("@/components/ui/button");
var react_1 = require("next-auth/react");
exports.Header = function () {
    var session = react_1.useSession();
    return (React.createElement("header", null,
        session.data ? (React.createElement(button_1.Button, { onClick: function () {
                react_1.signOut();
            } }, "Sign Out")) : (React.createElement(button_1.Button, { onClick: function () { return react_1.signIn("google"); } }, "Sign In")),
        React.createElement(mode_toggle_1.ModeToggle, null)));
};
