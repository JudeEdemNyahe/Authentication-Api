export default {
  port: 1337,
  dbUri: "mongodb://localhost:27017/Authentication-Api",
  saltworkFactor: 10,
  accessTokenTtl: "15min",
  refreshTokenTtl: "1y",
  publicKey: `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCEjcmiK5e2sKQmuS5I3ekBIcpH
uY16l4K74ERJ8aU+yJSfQtDxMqB8ZdX1EczYbyntzV7HeT74cM/77ScvkD/xexXC
Ti1fyBCyiY+AqNj+u64jiD50tiyOeqcyi10082jRo0DGPkCGam7TE3Tt2gQOIpBK
Zyvzb/f1pSXdplz1oQIDAQAB
-----END PUBLIC KEY-----`,
  privateKey: `-----BEGIN RSA PRIVATE KEY-----
MIICXQIBAAKBgQCEjcmiK5e2sKQmuS5I3ekBIcpHuY16l4K74ERJ8aU+yJSfQtDx
MqB8ZdX1EczYbyntzV7HeT74cM/77ScvkD/xexXCTi1fyBCyiY+AqNj+u64jiD50
tiyOeqcyi10082jRo0DGPkCGam7TE3Tt2gQOIpBKZyvzb/f1pSXdplz1oQIDAQAB
AoGAeHgMatDHn4fGiFMAl8TmwNqe5rTiuin87RcTuUhe8EKHoH6vOqbSaHx9Ca/V
xlaxeqiNnSi6bDzLKaENXhLxqP4VbnjZuEVCPLDP6Hw0aNKNsOKySbTmfvTkvuY2
GNZmAAcFYYYr3T8FpOsBvP1vr4QhOIeOMAuNXiiELvzNG6kCQQD5AGJN+i/gETcd
W/8w7X42w+/DbEW7deRxiw+I4UHA94hgZ8EBW9b1iOjs0qPF97YaVYjEESKKLcDI
TJYHHUKXAkEAiEeKE9C9bY/Pg353dBlzyMUnz10Glv+CDs1CjZ/tvrfrGpPfB7qp
YBmwarQZuGTT79kM6xXU/Y+BTLDhW9rohwJBAOi7giaODIdqr9ACN8A8inaXppdK
sNapN08lAe0XVcUN1+r7rvsdIwq137fSnX6grBVrEvznYxgx8XmFk8isgZsCQEOA
E78+3CTBX4qFAIvL85KVPOOz8wilo/jK6FUXyv11QYkXhxff9/b2onAnprmzj1o0
ivaCCM5S3ztqPSVvJ08CQQDERL6DTUvYsSV1IPAt9LwJxTrKTZ4v35gnDLrQehd8
hdfSJUAMbyhPU6Req+PdyTGni1MxrSqBVL/p+CwJWWQJ
-----END RSA PRIVATE KEY-----`,
};
