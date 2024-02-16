const { default: Header } = require("./Header")

const Layout = ({ children }) => {
    return (
        <>
            <Header  />
            <main>
                {children}
            </main>
        </>
    )
}

export default Layout