# action-game-cross-app

## インストール

### 必要なもの

環境構築が楽になるので、Chocolatey と Scoop の導入がおすすめ。

- Chocolatey
  - https://chocolatey.org/install
- Scoop
  - https://scoop.sh/

以下を導入すること

- Git
  - `cinst -y git` または
  - `scoop install git`
- Node.js
  - `cinst -y nodejs` または
  - `scoop install nodejs`
- Android Studio
  - `cinst -y androidstudio`
- Gradle
  - `scoop install gradle`
- VSCode
  - `cinst -y vscode`
  - 拡張機能 [LiveServer](https://blanche-toile.com/tools/vscode-live-server) で `www/index.html` を実行することでホットリロード可能なテストプレイ環境を構築可能

### 手順

1. `git clone --depth 1 https://github.com/katai5plate/action-game-cross-app.git`
2. プロジェクトを VSCode で開き、ターミナルを開く
3. `npm i && npm start install`

### Android Studio を使用した Android 開発環境の構築

#### 必要な環境のインストール

1. Android Studio と Gradle をインストール (`cinst -y androidstudio` `scoop install gradle`)
2. 初回起動時の設定を完了させる
3. 新しいプロジェクトまたは既存のプロジェクトを開いた状態にする
4. `Tools -> SDK Manager` を選択
5. `SDK Platforms` で動作対象の `Android XX.X (X)` がインストールされていない場合はインストールする
6. `SDK Tools` で `Hide Obsolete Packages` チェックを切り `SDK build-tools` と `Android SDK Tools (Obsolete)` がインストールされていない場合はインストールする

- 2022-01-06 現在、Android SDK 30.0.3 以上かつ 31 以外のものであれば OK

#### project.config.yml の設定

1. プロジェクト内の `example-project.config.yml` を `project.config.yml` にリネーム
2. ファイルを開き、全ての項目を埋める

## 使用方法

### コマンド

- `npm start build`
  - `src` ディレクトリのソースをビルド
- `npm start dev`
  - `src` ディレクトリのソースを監視しリアルタイムにビルド
- `npm start tp-nw`
  - 実行ファイルでのテストプレイ
- `npm start tp-android`
  - Android 実機でテストプレイ (要 USB デバッグ)
