const router = async () => {
    const routes = [
        { path: '/', view: () => console.log('Viewing Game Page') },
        { path: '/about', view: () => console.log('Viewing About Page') },
        { path: '/best-score', view: () => console.log('Viewing Best Score Page') },
        { path: '/settings', view: () => console.log('Viewing Settings Page') },
    ]
}