function Header() {
    const listItems = navItems.map((navigation) =>
        <li>
            <a href={navigation.link}>{navigation.description}</a>
        </li>
    );
    return (
        <header>
            <h1>Navigation bar</h1>
            <nav>
                <ul>
                    {listItems}
                </ul>
            </nav>
        </header>
    )
}
const navItems = [
    {
        link: "#",
        description: "Home"
    },
    {
        link: "#",
        description: "About"
    },
    {
        link: "#",
        description: "Contact"
    }
];

export default Header;
