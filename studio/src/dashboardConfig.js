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
                  buildHookId: '5f95fbaf0a3951a6f793a203',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-2mcx5en7',
                  apiId: '3ffea928-dde9-4480-b5e1-21079555a614'
                },
                {
                  buildHookId: '5f95fbaffc396a34bcd6eba3',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-814w642p',
                  apiId: '2bf73003-6668-40b3-901c-0c4299beda9f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/a2galassi/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-814w642p.netlify.app', category: 'apps' }
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
