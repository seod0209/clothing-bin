// https://github.com/yarnpkg/yarn/issues/5500#issuecomment-1409763038

# Dotenv handling for Twinit

## Usage

Setup a `.env` file in the root of your project.

1. Add a NEXT_PUBLIC_NAVER_CLIENT_ID and a domain.

2. Add a version and a base url to use server.

```jsx
VERSION = '';
BASE_URL = '';
```

3. Add NEXT_PUBLIC_KAKAOMAP_APPKEY

## use Https

### Setting up the Key File

### Get `server.pem`

(1) Create server.key and server.crt

```jsx
openssl req -new -x509 -days 365 -nodes -keyout server.key -out server.crt
```

(1) Conver key and crt file to pem file

```jsx
# key
openssl rsa -in server.key -text > key.pem
# crt
openssl x509 -inform PEM -in server.crt > cert.pem
```
