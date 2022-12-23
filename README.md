このリポジトリは学習用環境のテンプレートです  
以下のモジュールを使用しているのでそれぞれインストールしてください

一気にインストール

デプロイ用

```console
npm i react react-dom styled-components gsap normalize.css
```

開発者用

```console
npm i -D webpack webpack-cli webpack-dev-server clean-webpack-plugin html-webpack-plugin @babel/core @babel/preset-env @babel/preset-react babel-loader css-loader sass sass-loader mini-css-extract-plugin html-loader postcss postcss-loader autoprefixer
```

個別にインストールする場合はこちら

webpack 系

```console
npm i -D webpack webpack-cli webpack-dev-server
```

webpack プラグイン

```console
npm i -D clean-webpack-plugin html-webpack-plugin
```

babel プラグイン

```console
npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader
```

SASS 関連

```console
npm i -D css-loader sass sass-loader mini-css-extract-plugin postcss postcss-loader autoprefixer
```

画像読み込み用

```console
npm i -D html-loader
```

React

```console
npm i react react-dom styled-components
```

gsap

```console
npm i gsap
```
