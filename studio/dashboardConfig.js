export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '5ff7adefe9c8c34d6ad56f97',
                  title: 'Sanity Studio',
                  name: 'sanity-czilla-test-studio',
                  apiId: 'de896cdf-20fe-49aa-a5bc-e7292c8b435b'
                },
                {
                  buildHookId: '5ff7adef21c56d54dc6e6eb7',
                  title: 'Blog Website',
                  name: 'sanity-czilla-test',
                  apiId: 'be6f72d2-9948-401a-874f-237462e3ba5e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ryno-cmueller/sanity-czilla-test',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-czilla-test.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
