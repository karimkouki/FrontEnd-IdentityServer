export class Client {

    id :string
    enabled: Boolean;
    clientId: string;
    protocolType:string;
    requireClientSecret: Boolean;
    requireConsent: Boolean;
    allowRememberConsent: Boolean;
    alwaysIncludeUserClaimsInIdToken: Boolean;
    requirePkce: Boolean;
    allowPlainTextPkce: Boolean;
    allowAccessTokensViaBrowser: Boolean;
    backChannelLogoutSessionRequired: Boolean;
    allowOfflineAccess: Boolean;
    identityTokenLifetime: Number;
    accessTokenLifetime: Number;
    authorizationCodeLifetime: Number;
    absoluteRefreshTokenLifetime: Number;
    slidingRefreshTokenLifetime: Number;
    refreshTokenUsage: Number;
    updateAccessTokenClaimsOnRefresh: Boolean;
    refreshTokenExpiration: Number;
    accessTokenType: Number;
    enableLocalLogin: Boolean;
    includeJwtId: Boolean;
    alwaysSendClientClaims: Boolean;
    clientClaimsPrefix: string;
}
