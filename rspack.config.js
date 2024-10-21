module.exports = {
    entry: '/src/index.ts',
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: [/node_modules/],
                loader: 'builtin:swc-loader',
                options: {
                    jsc: {
                        parser: {
                            syntax: 'typescript'
                        }
                    }
                },
                type: 'javascript/auto'
            }
        ]
    },
    resolve: {
        extensions: [".js", ".ts"]
    }
}