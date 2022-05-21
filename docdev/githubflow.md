## GitHubFlow
* スクラムマスターにてプロジェクトを作成
  ```
  プルリクエストがマージされた後、ヘッドブランチを自動的に削除
  ☑︎Automatically delete head branches 
  ```
* レビュアにてイシューを作成して開発者をアサイン
* 開発者にて、ローカルリポジトリでmainブランチの最新のソースをプル
  ```
  mainブランチに切替
  $ git checkout main

  mainブランチの最新ソースをリモートリポジトリからプル
  $ git pull
  ```
* 開発者にて、イシュー用の新しいブランチを切る
  ```
  featureブランチを新規作成してブランチ切替
  $ git checkout -b feature/fixLoginLogic
  ```
* 開発者にて、コーディング / コミット / プッシュ
  ```
  開発時にはコミット
  $ git add
  $ git commit

  featureブランチをリモートリポジトリへプッシュ
  $ git push origin HEAD
  ```
* 開発者にて、リモートリポジトリでプルリクエスト
  ```
  マージする際にイシューもクローズするコメント付与
  $ close #9
  ```
* レビュアにて、コードレビュー / 承認
* レビュアにて、mainブランチへマージ
* 開発者にて、ローカルリポジトリでmainブランチの最新のソースをプル
  ```
  mainブランチに切替
  $ git checkout main

  mainブランチの最新ソースをリモートリポジトリからプル
  $ git pull
  ```
* 開発者にて、ローカルリポジトリで不要ブランチ削除
  ```
  現在のブランチがmainであるか確認
  $ git branch                 
    feature/funcE
  * main

  ローカルリポジトリの不要ブランチを削除
  $ git branch -D feature/funcE

  不要ブランチが削除されていることを確認
  $ git branch                 
  * main
  ```
