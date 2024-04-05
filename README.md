// https://github.com/yarnpkg/yarn/issues/5500#issuecomment-1409763038
# Desciption
- This project purpose to shows the placement of  the bin that collects recyclable clothing in Seoul
- You know, it's harder than you thought to find a bin when you throw out recyclable clothing.
- Search your address, you can find the addresses of the nearest clothing bins
- You can get information about Seoul collectable clothes policy

# Built with
- node: v20.11.1
- yarn: v3.6.4
- typescript: 5.3.3
- reactjs: v18.2.0
- nextjs: v14.1.2

# Dotenv handling for Clothing bin

## Usage

Setup a `.env` file in the root of your project.

1. Add a NEXT_PUBLIC_NAVER_CLIENT_ID and a domain.

2. Add a version and a base url to use server.

```jsx
## Clothing bin application info

NEXT_PUBLIC_APPLICATION_NAME=clothing_bin
NEXT_PUBLIC_VERSION=0.1.0

## Naver map API
## https://console.ncloud.com/naver-service/application

NEXT_PUBLIC_NAVER_CLIENT_ID=get client id from your application anthentication info in naver map



## Kakao map API
## https://developers.kakao.com/console/app/769825

NEXT_PUBLIC_KAKAOMAP_APPKEY=get javascript key from your application anthentication info in kakao developers


## Government Open api
## https://www.data.go.kr/iim/main/mypageMain.do

NEXT_PUBLIC_GO_DATA_BASE_URL=https://api.odcloud.kr/api
NEXT_PUBLIC_GO_DATA_ENCODING_KEY=
NEXT_PUBLIC_GO_DATA_DECODING_KEY=
```

3. Add NEXT_PUBLIC_KAKAOMAP_APPKEY

## Use Https
 You need to set https when you test on local environment. Naver and Kakao API request HTTPS.
If you use HTTP to use thier APIs, you meet CORS error.

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
