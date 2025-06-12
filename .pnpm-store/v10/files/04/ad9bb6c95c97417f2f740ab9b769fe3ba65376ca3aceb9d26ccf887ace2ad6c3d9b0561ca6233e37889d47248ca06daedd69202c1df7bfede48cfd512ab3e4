const getLogoutPath = (admin) => {
    const { logoutPath, rootPath } = admin.options;
    const normalizedLogoutPath = logoutPath.replace(rootPath, "");
    return normalizedLogoutPath.startsWith("/")
        ? normalizedLogoutPath
        : `/${normalizedLogoutPath}`;
};
export const withLogout = (router, admin, auth) => {
    const logoutPath = getLogoutPath(admin);
    const { provider } = auth;
    router.get(logoutPath, async (request, response) => {
        if (provider) {
            try {
                await provider.handleLogout({ req: request, res: response });
            }
            catch (error) {
                console.error(error); // fail silently and still logout
            }
        }
        request.session.destroy(() => {
            response.redirect(admin.options.loginPath);
        });
    });
};
