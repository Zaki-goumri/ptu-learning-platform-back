import { WrongArgumentError } from "../errors.js";
const getRefreshTokenPath = (admin) => {
    const { refreshTokenPath, rootPath } = admin.options;
    const normalizedRefreshTokenPath = refreshTokenPath.replace(rootPath, "");
    return normalizedRefreshTokenPath.startsWith("/")
        ? normalizedRefreshTokenPath
        : `/${normalizedRefreshTokenPath}`;
};
const MISSING_PROVIDER_ERROR = '"provider" has to be configured to use refresh token mechanism';
export const withRefresh = (router, admin, auth) => {
    const refreshTokenPath = getRefreshTokenPath(admin);
    const { provider } = auth;
    router.post(refreshTokenPath, async (request, response) => {
        var _a;
        if (!provider) {
            throw new WrongArgumentError(MISSING_PROVIDER_ERROR);
        }
        const updatedAuthInfo = await provider.handleRefreshToken({
            data: (_a = request.fields) !== null && _a !== void 0 ? _a : {},
            query: request.query,
            params: request.params,
            headers: request.headers,
        }, { req: request, res: response });
        let admin = request.session.adminUser;
        if (!admin) {
            admin = {};
        }
        if (!admin._auth) {
            admin._auth = {};
        }
        admin._auth = Object.assign(Object.assign({}, admin._auth), updatedAuthInfo);
        request.session.adminUser = admin;
        request.session.save(() => {
            response.send(admin);
        });
    });
};
