const HeaderMenu = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-4">
            <nav className="flex justify-between">
                <div className="flex space-x-10">
                    {['Home', 'About Me', 'Projects', 'Contact Me'].map((item) => (
                        <a
                            key={item}
                            href="#"
                            className="text-gray-800 hover:bg-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </nav>
        </div>
    );
};

export default HeaderMenu;
