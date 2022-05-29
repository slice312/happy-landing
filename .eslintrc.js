module.exports = {
    parserOptions: {
        sourceType: "module",
        allowImportExportEverywhere: true,
        ecmaVersion: 11,
        ecmaFeatures: {
            jsx: true
        }
    },
    rules: {
        semi: ["error", "always"],
        quotes: ["warn", "double"], // строковые литеры в кавычках
        "comma-dangle": ["warn"],
        "no-multiple-empty-lines": 0,
        indent: ["warn", 4, {SwitchCase: 1}]
    }
};
