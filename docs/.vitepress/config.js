export default {
    title: 'Strike Framework',
    description: 'Just playing around.',
    themeConfig: {
        socialLinks: [
            {icon: 'github', link: 'https://github.com/strike-php/framework'},
        ],
        sidebar: [
            {
                text: 'Getting started',
                items: [
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
