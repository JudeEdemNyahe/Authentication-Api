export default {
  port: 1337,
  dbUri: "mongodb://localhost:27017/Authentication-Api",
  saltworkFactor: 10,
  accessTokenTtl: "15min",
  refreshTokenTtl: "1y",
  publicKey: `-----BEGIN PUBLIC KEY-----
  MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgGZUPm90iD6VPpHNKjxvPjUDEdMg
  kFTEG2VlXweqrlE5tLB7ykMvGOwXJEI9/5ZPZ8wjERLTzsTlSsczmkaR1aOeUNsm
  /pjJ4SXirFsAPcu7k+F5L6Edh5wqusJ/nh62BLPp0g63tyToystKPMzhIm/l+Twd
  i3/HbYDicb78ztXbAgMBAAE=
  -----END PUBLIC KEY-----`,
  privateKey: `-----BEGIN RSA PRIVATE KEY-----
  MIICWgIBAAKBgGZUPm90iD6VPpHNKjxvPjUDEdMgkFTEG2VlXweqrlE5tLB7ykMv
  GOwXJEI9/5ZPZ8wjERLTzsTlSsczmkaR1aOeUNsm/pjJ4SXirFsAPcu7k+F5L6Ed
  h5wqusJ/nh62BLPp0g63tyToystKPMzhIm/l+Twdi3/HbYDicb78ztXbAgMBAAEC
  gYBGAhrZG+vejTLKg4gC4sS3dgsq25uDMsvfehQi5aXvEkDJgVem0UEGvOpkm5AS
  IO9NnSwgKmLLGGgpkudYoot7TINyjTYP2ZWcPn1TFOxnaE/64/rlIsA8NMGIsVsE
  MPsUwVFbmU6fFH3ENzPCRRzRrMT4xrS4CAl5exFrSkkKWQJBAMWKXpbNysAue+9s
  Ac1ipduZixM4Gstwyp1g6LMF+xNlFuGsRoNcA9mb6e09rpVp/UcrJZ39EiCA5ZSD
  lIKhtgUCQQCEnKzOK5SJ8Bx6V54Mh9frBhBUqB2GBXHQasV5SCr3Yt7sd4mxPXol
  JJxIihBRyg0yqAfNvYocJQC54zCpk0JfAkBbR0vb7S3Rzejwwfy3Ne0j4vgzokon
  VXAadqwwBQR2etCu6NcQXdVdmUDnogfo/LfPSe2w6j6VDFqJXJ+kGSstAkBi+2LM
  nKDJeKx48O8qYTbb2PHVjopC38t9CkUNar2PW4ATNoJTBhUmpjX0uwDFW7AQMHVq
  rt/odAIfvaEz4ZO3AkB7vgc2oRHerV8SyFwhD0Y072JX4puUKZjnaISItQIvIKo4
  yyqVQTMEaka0B6Fq5QhKX4+AEDZnP9k4scGVy9Ng
  -----END RSA PRIVATE KEY-----`,
};
