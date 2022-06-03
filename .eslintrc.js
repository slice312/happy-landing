module.exports = {
    parserOptions: {
        sourceType: "module",
        allowImportExportEverywhere: true,
        ecmaVersion: 13
    },
    plugins: ["import"],
    rules: {
        semi: ["error", "always"],
        quotes: ["warn", "double"],
        "comma-dangle": ["warn"],
        "no-multiple-empty-lines": "off",
        indent: ["warn", 4, {SwitchCase: 1}],
        "import/no-relative-parent-imports": "error"
    }
};