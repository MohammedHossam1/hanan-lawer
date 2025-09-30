import Cookies from "js-cookie";

const ACCESS_TOKEN_KEY = "access_token";
const REFRESH_TOKEN_KEY = "refresh_token";

/** Save tokens in cookies */
export const setTokens = (access_token: string, refresh_token: string) => {
    Cookies.set(ACCESS_TOKEN_KEY, access_token, { expires: 7 });
    Cookies.set(REFRESH_TOKEN_KEY, refresh_token, { expires: 7 });
};

/** Get tokens from cookies */
export const getTokens = () => {
    return {
        access_token: Cookies.get(ACCESS_TOKEN_KEY) || null,
        refresh_token: Cookies.get(REFRESH_TOKEN_KEY) || null,
    };
};

/** Remove tokens from cookies (logout) */
export const clearTokens = () => {
    Cookies.remove(ACCESS_TOKEN_KEY);
    Cookies.remove(REFRESH_TOKEN_KEY);
};
