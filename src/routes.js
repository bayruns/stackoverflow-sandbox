import { LandingPage } from 'pages';

//Constants for pages to be used across any page that has routes or redirects
const ROUTES = {
    LANDING: {
        URL: '/',
        DISPLAY_NAME: 'Landing Page',
        COMPONENT: LandingPage,
        IS_EXACT: true,
        IS_NAV: false
    },    
}

export default ROUTES;