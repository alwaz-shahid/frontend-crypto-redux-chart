import { useRouter } from 'next/router';
import Link from 'next/link';
import PropTypes from 'prop-types';


NavLink.propTypes = {
    href: PropTypes.string.isRequired,
    exact: PropTypes.bool
};

NavLink.defaultProps = {
    exact: false
};

function NavLink({ href, exact, children, ...props }) {
    const { pathname } = useRouter();
    const isActive = exact ? pathname.substr(0, 4) === href.substr(0, 4) : pathname.startsWith(href);

    // console.log("href " + href)
    // console.log("pathname " + pathname)
    if (isActive) {
        props.className += ' navlink';
    }
    else if (!isActive) {
        props.className += ' navlinkOff';

    }
    return (
        <Link href={href}>
            <a {...props}>
                {children}
            </a>
        </Link>
    );
}

export default NavLink;