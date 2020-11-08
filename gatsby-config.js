module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "blmDB",
        fieldName: "rose",
        url: "https://s2pk46zzsrbnrkjeysecm3ajju.appsync-api.us-east-1.amazonaws.com/graphql",
        headers: {
          "x-api-key": "da2-4d624ese2zf3db4sbfbsgwczym"
        },
      },
    },
  ],
}