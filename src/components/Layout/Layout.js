//Font Awesome configuration
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import "@fortawesome/fontawesome-svg-core/styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

import styles from "./Layout.module.scss";

const Layout = ({ Component, pageProps }) => {
    const { layout, content, topMenu, bottomMenu } = styles;

    return (
        <section className={layout}>
            <nav className={topMenu}>Menu</nav>

            <section className={content}>
                <Component {...pageProps} />
            </section>

            <nav className={bottomMenu}>
                <div>
                    <FontAwesomeIcon icon={faHouse} />
                </div>
                <div>...</div>
                <div>Profile</div>
            </nav>
        </section>
    );
};

export default Layout;
