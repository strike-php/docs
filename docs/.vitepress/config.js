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
                ]
            },
            {
                text: 'CLI',
                items: [
                    {text: 'Create CLI Commands', link: '/cli/create-cli-commands'},
                ]
            },
        ]
    }
}
