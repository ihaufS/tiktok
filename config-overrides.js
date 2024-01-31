/* config-overrides.js */

const {
    override,
    overrideDevServer, useBabelRc, watchAll
} = require("customize-cra");

module.exports = {
    webpack: override(
        // usual webpack plugin
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useBabelRc()
    ),
    devServer: overrideDevServer(
        // dev server plugin
        watchAll()
    )
};