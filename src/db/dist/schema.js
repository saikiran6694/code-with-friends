"use strict";
exports.__esModule = true;
exports.verificationTokens = exports.sessions = exports.accounts = exports.users = exports.testing = void 0;
var pg_core_1 = require("drizzle-orm/pg-core");
exports.testing = pg_core_1.pgTable("testing", {
    id: pg_core_1.text("id").notNull().primaryKey(),
    name: pg_core_1.text("name")
});
exports.users = pg_core_1.pgTable("user", {
    id: pg_core_1.text("id").notNull().primaryKey(),
    name: pg_core_1.text("name"),
    email: pg_core_1.text("email").notNull(),
    emailVerified: pg_core_1.timestamp("emailVerified", { mode: "date" }),
    image: pg_core_1.text("image")
});
exports.accounts = pg_core_1.pgTable("account", {
    userId: pg_core_1.text("userId")
        .notNull()
        .references(function () { return exports.users.id; }, { onDelete: "cascade" }),
    type: pg_core_1.text("type").$type().notNull(),
    provider: pg_core_1.text("provider").notNull(),
    providerAccountId: pg_core_1.text("providerAccountId").notNull(),
    refresh_token: pg_core_1.text("refresh_token"),
    access_token: pg_core_1.text("access_token"),
    expires_at: pg_core_1.integer("expires_at"),
    token_type: pg_core_1.text("token_type"),
    scope: pg_core_1.text("scope"),
    id_token: pg_core_1.text("id_token"),
    session_state: pg_core_1.text("session_state")
}, function (account) { return ({
    compoundKey: pg_core_1.primaryKey({
        columns: [account.provider, account.providerAccountId]
    })
}); });
exports.sessions = pg_core_1.pgTable("session", {
    sessionToken: pg_core_1.text("sessionToken").notNull().primaryKey(),
    userId: pg_core_1.text("userId")
        .notNull()
        .references(function () { return exports.users.id; }, { onDelete: "cascade" }),
    expires: pg_core_1.timestamp("expires", { mode: "date" }).notNull()
});
exports.verificationTokens = pg_core_1.pgTable("verificationToken", {
    identifier: pg_core_1.text("identifier").notNull(),
    token: pg_core_1.text("token").notNull(),
    expires: pg_core_1.timestamp("expires", { mode: "date" }).notNull()
}, function (vt) { return ({
    compoundKey: pg_core_1.primaryKey({ columns: [vt.identifier, vt.token] })
}); });
