/* globals Docute */

new Docute({
    target: '#docute',
    sourcePath: './docs/',
    nav: [],
    highlight: ['json', 'php', 'csharp'],
    cssVariables(theme) {
        return {
            accentColor: "#62448f",
            headerTextColor: "#62448f",
            linkColor: "#62448f",
            codeFont: "Cascadia Code,SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace"
        }
    },
    sidebar: [
        {
            title: 'The Starless Sky Protocol',
            links: [
                {
                    title: 'Getting Started',
                    link: '/getting-started'
                },
                {
                    title: 'Configuration',
                    link: '/configuration'
                },
                {
                    title: 'Testing',
                    link: '/building-tests'
                },
                {
                    title: 'Security Considerations',
                    link: '/considerations'
                }
            ]
        },
        {
            title: 'The Network',
            links: [
                {
                    title: 'Private and Public keys',
                    link: '/keys'
                },
                {
                    title: 'Messages',
                    link: '/messages'
                },
                {
                    title: 'Signing and Contracts',
                    link: '/contracts'
                },
                {
                    title: 'Public Identity',
                    link: '/public-identity'
                },
                {
                    title: 'The SkyID',
                    link: '/skyid'
                },
                {
                    title: 'Storage',
                    link: '/storage'
                }
            ]
        },
        {
            title: 'REST API',
            links: [
                {
                    title: 'Getting Started with API',
                    link: '/api/getting-started'
                },
                {
                    title: 'Server API',
                    link: '/api/server'
                },
                {
                    title: 'Identities',
                    link: '/api/identities'
                },
                {
                    title: 'Messages',
                    link: '/api/messages'
                },
                {
                    title: 'Contracts',
                    link: '/api/contracts'
                }
            ]
        },
        {
            title: '.NET SDK API',
            links: [
                {
                    title: 'Getting Started with .NET',
                    link: '/dotnet-sdk/getting-started'
                },
                {
                    title: 'Identities Provider',
                    link: '/dotnet-sdk/identities'
                },
                {
                    title: 'Contracts Provider',
                    link: '/dotnet-sdk/contracts'
                },
                {
                    title: 'Messages Provider',
                    link: '/dotnet-sdk/messages'
                }
            ]
        }
    ]
})