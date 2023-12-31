// Create Token and saving in cookie

const sendToken = (member, statusCode, res) => {
  const token = member.getJWTToken();

  // options for cookie
  // const options = {
  //   expires: new Date(
  //     Date.now() + parseInt(process.env.COOKIE_EXPIRE)* 24 * 60 * 60 * 1000
  //   ),
  //   httpOnly: true,
  // };

  res.status(statusCode)
  // .cookie("token", token, options)
  .json({
    success: true,
    member,
    token,
  });
};

module.exports = sendToken;
