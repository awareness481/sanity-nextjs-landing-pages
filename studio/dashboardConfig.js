export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5f7b6dd423e1f030673cedc0',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-piigk7r9',
                  apiId: '2dbd6c5f-20ec-4faa-b407-09129b7f3d32'
                },
                {
                  buildHookId: '5f7b6dd44c790531264a4fc2',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-q5go6hhe',
                  apiId: '2faf7530-c5a1-4749-80d6-42bca3c4590c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/awareness481/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-q5go6hhe.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
