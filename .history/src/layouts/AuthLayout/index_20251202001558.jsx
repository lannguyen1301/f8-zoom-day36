function AuthLayout() {
    return (
        <>
            <Header />
            <main>
                <AuthSidebart />
                <Outlet />
            </main>
            <Footer />
        </>
    );
}
export default AuthLayout;
