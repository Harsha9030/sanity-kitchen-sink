export default {
  widgets: [
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
                  buildHookId: '60c6ed61ee6ca38d6690b211',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-652yz2yh',
                  apiId: 'c793705c-7458-43d8-8fe7-2c7cb7db39c6'
                },
                {
                  buildHookId: '60c6ed6161cb7c4eca525353',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-2siog6d2',
                  apiId: 'a625e88b-4124-4657-8fec-227865a3354b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Harsha9030/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-2siog6d2.netlify.app', category: 'apps'}
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
