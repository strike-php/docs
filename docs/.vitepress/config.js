export default {
    title: 'Strike Framework',
    description: 'Official docs for the Strike Framework',
    lastUpdated: true,
    themeConfig: {
        algolia: {
            appId: 'D56YHRK1NV',
            apiKey: 'aa2add2f79139eb0f0cfe3b6320a6595',
            indexName: 'strike_docs',
        },
        editLink: {
            pattern: 'https://github.com/strike-php/docs/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
        },
        socialLinks: [
            {icon: 'github', link: 'https://github.com/strike-php/framework'},
        ],
        nav: [
            {text: 'Docs', link: '/getting-started/what-is-strike'},
        ],
        sidebar: [
            {
                text: 'Getting started',
                items: [
                    {text: 'What is Strike', link: '/getting-started/what-is-strike'},
                    {text: 'Installation', link: '/getting-started/installation'},
                    {text: 'Folder structure', link: '/getting-started/folder-structure'},
                ]
            },
            {
                text: 'Routing',
                items: [
                    {text: 'Declaration', link: '/routing/declaration'},
                    {text: 'Handling', link: '/routing/handling'},
                    {text: 'Middleware', link: '/routing/middlewares'},
                    {text: 'Request', link: '/routing/request'},
                    {text: 'Response', link: '/routing/response'},
                ]
            },
            {
                text: 'CLI',
                items: [
                    {text: 'Strike CLI', link: '/cli/strike-cli'},
                    {text: 'Create own CLI Commands', link: '/cli/create-cli-commands'},
                ]
            },
            {
                text: 'Modules',
                items: [
                    {text: 'Overview', link: '/modules/overview'},
                    {text: 'Create own Module', link: '/modules/create-your-own'},
                ]
            },
            {
                text: 'Testing',
                items: [
                    {text: 'PHPUnit', link: '/testing/phpunit'},
                    {text: 'Behat', link: '/testing/behat'},
                ]
            },
            {
                text: 'Development',
                items: [
                    {text: 'Contribute', link: '/contribute'},
                ]
            },
        ]
    }
}
