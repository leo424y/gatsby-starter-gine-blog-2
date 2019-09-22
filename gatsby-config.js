module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/flyis/34d4b6550acd4b8e9045ec6c08d4485e?v=1b396d9928634d1590caddd32afcea46"
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/flyis/27af4d00fbfe4fb298769ee0f508f372?v=d6f987df65634ca7827fb83fa581788f"
            }
        }
    ],
}
