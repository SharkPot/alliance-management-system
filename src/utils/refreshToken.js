export const refreshTokenSetup = (res) => {
    let refreshTiming = calculateRefreshTime(res.tokenObj.expires_in);

    const refreshToken = async() => {
        const newAuthRes = await res.reloadAuthResponse();
        refreshTiming = calculateRefreshTime(newAuthRes.expires_in);
        console.log('refreshToken:newAuthRes',newAuthRes);
        console.log('refreshToken:newAuthRes.id_token',newAuthRes.id_token);
        setTimeout(refreshToken,refreshTiming);
    }
    setTimeout(refreshToken,refreshTiming);
}

function calculateRefreshTime (expires_in) {
    return (expires_in || 3600 - 5 * 60) * 1000;
}