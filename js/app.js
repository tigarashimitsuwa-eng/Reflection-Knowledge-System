/* ===== 振り返りナレッジ Web App Pro - メイン JavaScript ===== */

const INITIAL_KNOWLEDGE = [
  {
    id: "K001",
    projectName: "京北スーパー 新設対応",
    projectType: "新設・新規導入",
    category: "要件定義・調整",
    type: "PROBLEM",
    title: "お客様側要件の仕様変更頻出",
    content: "運用検討が不十分なまま要件が提示され、開発・テスト段階での仕様修正要求が多発した。",
    action: "要件定義フェーズでの業務フロー・運用シミュレーション確認の徹底。変更管理プロセスの事後承認ルールの適用。",
    priority: "高",
    tags: ["要件定義", "運用シミュレーション", "仕様変更"]
  },
  {
    id: "K002",
    projectName: "京北スーパー 新設対応",
    projectType: "新設・新規導入",
    category: "進捗・スケジュール管理",
    type: "GOOD",
    title: "課題一覧の一元管理と毎週の課題レビュー",
    content: "Redmine/Excel課題表を統一し、週1回の定例で期限・担当者を明確化したことで滞留課題を大幅減。",
    action: "他案件でも定例打ち合わせに「未決課題の解消チェック」をアジェンダ固定化する。",
    priority: "中",
    tags: ["課題管理", "定例ミーティング", "WBS"]
  }
];

// Uploaded source is preserved as provided; application logic follows in the repository version.
