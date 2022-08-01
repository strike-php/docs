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
                    {text: 'Installation', link: '/installation'},
                    {text: 'Configuration', link: '/configuration'},
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
                    {text: 'Caching', link: '/routing/caching'},
                ]
            },
            {
                text: 'CLI',
                items: [
                    {text: 'Create CLI Commands', link: '/cli/create-cli-commands'},
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
                text: 'Development',
                items: [
                    {text: 'Contribute', link: '/contribute'},
                ]
            },
        ]
    }
}
