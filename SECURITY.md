# Security Features

This portfolio website implements comprehensive security best practices:

## Content Security Policy (CSP)
- Strict CSP headers configured in `/src/security/csp.ts`
- Prevents XSS attacks by controlling resource loading
- Restricts inline scripts and styles where possible

## HTTP Security Headers
- **X-Frame-Options**: DENY - Prevents clickjacking attacks
- **X-Content-Type-Options**: nosniff - Prevents MIME type sniffing
- **X-XSS-Protection**: Enables browser XSS filtering
- **Referrer-Policy**: Controls referrer information leakage
- **Permissions-Policy**: Restricts access to browser features

## Input Validation & Sanitization
- All user inputs are sanitized (see `/src/utils/sanitize.ts`)
- Email validation prevents malformed email addresses
- URL validation ensures only HTTP/HTTPS protocols
- HTML escaping prevents XSS via user content

## HTTPS & Secure Communications
- All external API calls use HTTPS
- Upgrade insecure requests enforced via CSP
- Secure cookie settings (if cookies are used)

## Dependency Security
- Regular dependency audits with `pnpm audit`
- Keep dependencies up to date
- Use lock files to prevent supply chain attacks

## Data Protection
- No sensitive data stored in localStorage/sessionStorage
- API keys should be stored in environment variables
- Form data is not persisted without user consent

## Best Practices Implemented
1. React's built-in XSS protection through JSX escaping
2. No use of `dangerouslySetInnerHTML`
3. External links use `rel="noopener noreferrer"`
4. Input validation on all form fields
5. Type safety with TypeScript
6. Secure random generation for tokens
7. Rate limiting considerations for API calls

## Deployment Security
- Enable HTTPS in production
- Configure security headers at the server level
- Use environment variables for sensitive configuration
- Implement rate limiting at the CDN/server level
- Enable DDoS protection
- Regular security audits and penetration testing

## Reporting Security Issues
If you discover a security vulnerability, please email security concerns to the repository maintainer.
