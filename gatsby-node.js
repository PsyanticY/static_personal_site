const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const noteTemplate = path.resolve('./src/templates/note.js')
    const res = await graphql(`
        query {
            allContentfulNotes {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)

    res.data.allContentfulNotes.edges.forEach((edge) => {
        createPage({
            component: noteTemplate,
            path: `/notes/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })
}