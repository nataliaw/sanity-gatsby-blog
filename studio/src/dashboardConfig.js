export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e57881160d36a96cc9431c5',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-u4s9f76y',
                  apiId: '87e761e0-2a89-4702-9703-1564bf4dd3e6'
                },
                {
                  buildHookId: '5e578812ccf24393b3178162',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-4hxr4sgg',
                  apiId: '51920120-86f0-4992-b99e-ce03136c391c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nataliaw/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-4hxr4sgg.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
