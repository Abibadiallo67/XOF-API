# Nexus SSO (Personal Edition)

Secure personal SSO inspired by OAuth2 / OpenID Connect.

## Features
- Argon2 password hashing
- JWT RS256 (access + refresh)
- OAuth2 Authorization Code + PKCE
- Session management
- RBAC
- Ready for future projects

## Usage
1. Register an app (client_id / redirect_uri)
2. Login via /oauth/authorize
3. Exchange code for tokens
4. Use access token on APIs

## Env
JWT_PRIVATE_KEY
JWT_PUBLIC_KEY
DB_URL
