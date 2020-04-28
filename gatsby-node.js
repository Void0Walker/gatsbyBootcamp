const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")
    console.log(JSON.stringify(node, undefined, 4))
  }
  // Transform the new node here and create a new node or
  // create a new node field.
}
