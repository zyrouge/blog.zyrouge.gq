import "prismjs/themes/prism.css";
import "saber-highlight-css/default.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "./assets/styles.css";

export default ({ setHead }) => {
    setHead({
        link: [
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,800;1,400&family=Fira+Code&display=swap'
            },
            {
                rel: 'icon',
                href: '/images/favicon.png'
            }
        ]
    })
}
