module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '106385eae32744443a51a9c53d9fab15'),
  },
});
