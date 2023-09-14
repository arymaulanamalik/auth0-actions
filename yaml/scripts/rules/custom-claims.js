function (user, context, callback) {
  context.accessToken['https://schemas.zerohr.com/type'] = 'user';
  return callback(null, user, context);
}