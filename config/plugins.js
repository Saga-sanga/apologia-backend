module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: 'mizo.apologia@gmail.com',
        defaultReplyTo: 'mizoapologetics@gmail.com',
      },
    },
  },
  // ...
});