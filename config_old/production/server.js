module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: 'https://api.mizoapologia.org',
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'ed599f60450428266885538ff33c97a3'),
    },
  },
});