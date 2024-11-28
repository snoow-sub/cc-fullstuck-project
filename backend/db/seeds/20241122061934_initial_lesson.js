/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // 既存のデータを削除
  await knex("lesson").del();
  //インクリメントリセット
  await knex.raw("select setval(pg_get_serial_sequence('lesson', 'id'), MAX(id)) FROM lesson");
  // 初期データを挿入
  await knex("lesson").insert([
    {
      id: 1,
      store_id: 1,
      title: "初心者向けヨガ教室",
      date: "2024-11-29",
      start_time: "10:00:00",
      end_time: "12:00:00",
      location: "東京都", // 修正
      description: "リラクゼーションを中心とした初心者向けヨガクラスです。",
      imagePath: [
        "https://discoveru-s3.s3.us-east-1.amazonaws.com/001_1.png",
        "https://discoveru-s3.s3.us-east-1.amazonaws.com/001_2.png",
      ],
      movie_id: ["EzN2a2HZkHs"],
      review: 4.9,
      indicator: 85.0,
    },
    {
      id: 2,
      store_id: 1,
      title: "生け花教室",
      date: "2024-11-30",
      start_time: "14:00:00",
      end_time: "15:30:00",
      location: "東京都", // 修正
      description: "生け花の基本を学び、美しいアレンジメントを作ります。",
      imagePath: [
        "https://discoveru-s3.s3.us-east-1.amazonaws.com/002_1.png",
        "https://discoveru-s3.s3.us-east-1.amazonaws.com/002_2.png",
      ],
      movie_id: ["wTlgbB4tmyk"],
      review: 3.8,
      indicator: 70.5,
    },
    {
      id: 3,
      store_id: 2,
      title: "料理教室",
      date: "2024-11-30",
      start_time: "16:00:00",
      end_time: "18:00:00",
      location: "東京都", // 修正
      description: "初心者向け料理教室で簡単な家庭料理を学びます。",
      imagePath: [
        "https://discoveru-s3.s3.us-east-1.amazonaws.com/003_1.png",
        "https://discoveru-s3.s3.us-east-1.amazonaws.com/003_2.png",
      ],
      movie_id: ["eWPKGjPvY24"],
      review: 3.5,
      indicator: 78.0,
    },
    {
      id: 4,
      store_id: 3,
      title: "刺繍教室",
      date: "2024-11-30",
      start_time: "10:00:00",
      end_time: "12:00:00",
      location: "東京都", // 修正
      description: "初心者向け刺繍レッスンで可愛いデザインを作ります。",
      imagePath: [
        "https://discoveru-s3.s3.us-east-1.amazonaws.com/004_1.png",
        "https://discoveru-s3.s3.us-east-1.amazonaws.com/004_2.png",
      ],
      movie_id: ["qwVl8JczTu0"],
      review: 4.0,
      indicator: 72.0,
    },
    {
      id: 5,
      store_id: 2,
      title: "テニススクール",
      date: "2024-12-01",
      start_time: "09:00:00",
      end_time: "10:30:00",
      location: "東京都", // 修正
      description: "初心者向けテニスレッスンで基本的なスキルを学びます。",
      imagePath: [
        "https://discoveru-s3.s3.us-east-1.amazonaws.com/005_1.png",
        "https://discoveru-s3.s3.us-east-1.amazonaws.com/005_2.png",
      ],
      movie_id: ["ZNVbmXq0Jfo"],
      review: 3.7,
      indicator: 75.0,
    },
    {
      id: 6,
      store_id: 1,
      title: "初心者向けアウトドアハイキング",
      date: "2024-12-01",
      start_time: "11:00:00",
      end_time: "14:00:00",
      location: "東京都", // 修正
      description: "初心者向けのハイキングで自然を楽しみながら運動しましょう。",
      imagePath: [
        "https://discoveru-s3.s3.us-east-1.amazonaws.com/006_1.png",
        "https://discoveru-s3.s3.us-east-1.amazonaws.com/006_2.png",
      ],
      movie_id: ["VeTm3nDB7iU"],
      review: 3.6,
      indicator: 85.0,
    },
    {
      id: 7,
      store_id: 2,
      title: "リフレッシュヨガ",
      date: "2024-12-01",
      start_time: "16:00:00",
      end_time: "18:00:00",
      location: "東京都", // 修正
      description: "心身をリフレッシュさせるヨガセッションです。",
      imagePath: [
        "https://discoveru-s3.s3.us-east-1.amazonaws.com/007_1.png",
        "https://discoveru-s3.s3.us-east-1.amazonaws.com/007_2.png",
      ],
      movie_id: ["yPX0p3qtGg4"],
      review: 4.8,
      indicator: 88.5,
    },
    {
      id: 8,
      store_id: 3,
      title: "夜ヨガセッション",
      date: "2024-12-01",
      start_time: "19:00:00",
      end_time: "20:30:00",
      location: "東京都", // 修正
      description: "リラックスした夜のヨガで一日の疲れを癒します。",
      imagePath: [
        "https://discoveru-s3.s3.us-east-1.amazonaws.com/008_1.png",
        "https://discoveru-s3.s3.us-east-1.amazonaws.com/008_2.png",
      ],
      movie_id: ["Z5uaxJBUGeM"],
      review: 4.9,
      indicator: 92.5,
    },
    {
      id: 9,
      store_id: 1,
      title: "英会話教室",
      date: "2024-12-01",
      start_time: "15:00:00",
      end_time: "16:30:00",
      location: "東京都", // 修正
      description: "初心者向け英会話教室で日常会話を学びます。",
      imagePath: [
        "https://discoveru-s3.s3.us-east-1.amazonaws.com/009_1.png",
        "https://discoveru-s3.s3.us-east-1.amazonaws.com/009_2.png",
      ],
      movie_id: ["GSTjkeEXdsA"],
      review: 4.7,
      indicator: 80.0,
    },
    {
      id: 10,
      store_id: 2,
      title: "プログラミング基礎",
      date: "2024-12-03",
      start_time: "10:00:00",
      end_time: "12:00:00",
      location: "千葉県", // サンプル別地域
      description: "初心者向けのプログラミング講座で基本的なスキルを習得。",
      imagePath: [
        "https://discoveru-s3.s3.us-east-1.amazonaws.com/0010_1.png",
        "https://discoveru-s3.s3.us-east-1.amazonaws.com/0010_2.png",
      ],
      movie_id: ["d4UMUHVpbCI"],
      review: 4.5,
      indicator: 85.0,
    },
    {
      id: 11,
      store_id: 3,
      title: "カラオケレッスン",
      date: "2024-12-03",
      start_time: "13:00:00",
      end_time: "15:00:00",
      location: "埼玉県",
      description: "初心者向けのカラオケレッスンで歌唱力を向上させます。",
      imagePath: [
        "https://discoveru-s3.s3.us-east-1.amazonaws.com/0011_1.png",
        "https://discoveru-s3.s3.us-east-1.amazonaws.com/0011_2.png",
      ],
      movie_id: ["Hy2_ai9ldkA"],
      review: 4.0,
      indicator: 75.0,
    },
    {
      id: 12,
      store_id: 1,
      title: "写真撮影教室",
      date: "2024-12-04",
      start_time: "10:00:00",
      end_time: "12:00:00",
      location: "神奈川県",
      description: "初心者向けの写真撮影クラスで構図や基本操作を学びます。",
      imagePath: [
        "https://discoveru-s3.s3.us-east-1.amazonaws.com/0012_1.png",
        "https://discoveru-s3.s3.us-east-1.amazonaws.com/0012_2.png",
      ],
      movie_id: ["tQK0BTmluKo"],
      review: 4.6,
      indicator: 88.0,
    },
    {
      id: 13,
      store_id: 2,
      title: "初心者向けスイミング",
      date: "2024-12-05",
      start_time: "15:00:00",
      end_time: "16:30:00",
      location: "茨城県",
      description: "初心者向けスイミングクラスで基本を習得します。",
      imagePath: [
        "https://discoveru-s3.s3.us-east-1.amazonaws.com/0013_1.png",
        "https://discoveru-s3.s3.us-east-1.amazonaws.com/0013_2.png",
      ],
      movie_id: ["Egc4mPetg-o"],
      review: 3.9,
      indicator: 72.5,
    },
    {
      id: 14,
      store_id: 3,
      title: "初心者向けボルダリング",
      date: "2024-12-06",
      start_time: "10:00:00",
      end_time: "12:30:00",
      location: "千葉県",
      description: "初心者向けのボルダリングクラスで体を動かし、楽しみます。",
      imagePath: [
        "https://discoveru-s3.s3.us-east-1.amazonaws.com/0014_1.png",
        "https://discoveru-s3.s3.us-east-1.amazonaws.com/0014_2.png",
      ],
      movie_id: ["kND5qMSarZg"],
      review: 4.8,
      indicator: 90.0,
    },
    {
      id: 15,
      store_id: 1,
      title: "ペイント教室",
      date: "2024-12-07",
      start_time: "14:00:00",
      end_time: "16:00:00",
      location: "自宅",
      description: "初心者向けペイントクラスで絵を描く楽しさを体験。",
      imagePath: [
        "https://discoveru-s3.s3.us-east-1.amazonaws.com/0015_1.png",
        "https://discoveru-s3.s3.us-east-1.amazonaws.com/0015_2.png",
      ],
      movie_id: ["EXQ3X0VuIjM"],
      review: 4.3,
      indicator: 85.0,
    },
    {
      id: 16,
      store_id: 2,
      title: "瞑想とマインドフルネス",
      date: "2024-12-07",
      start_time: "17:00:00",
      end_time: "18:30:00",
      location: "神奈川県",
      description: "初心者向けの瞑想レッスンで心をリフレッシュ。",
      imagePath: [
        "https://discoveru-s3.s3.us-east-1.amazonaws.com/0016_1.png",
        "https://discoveru-s3.s3.us-east-1.amazonaws.com/0016_2.png",
      ],
      movie_id: ["2noZdKKi9DU"],
      review: 4.9,
      indicator: 92.0,
    },
    {
      id: 17,
      store_id: 3,
      title: "日本茶教室",
      date: "2024-12-08",
      start_time: "11:00:00",
      end_time: "12:30:00",
      location: "茨城県",
      description: "初心者向けの日本茶教室で茶道の基本を学びます。",
      imagePath: [
        "https://discoveru-s3.s3.us-east-1.amazonaws.com/0017_1.png",
        "https://discoveru-s3.s3.us-east-1.amazonaws.com/0017_2.png",
      ],
      movie_id: ["qIXyu-BexSk"],
      review: 4.7,
      indicator: 87.5,
    },
    {
      id: 18,
      store_id: 1,
      title: "初心者向けドローン操作",
      date: "2024-12-08",
      start_time: "13:00:00",
      end_time: "15:00:00",
      location: "東京都",
      description: "ドローンの基本操作を学ぶ初心者向け講座。",
      imagePath: [
        "https://discoveru-s3.s3.us-east-1.amazonaws.com/0018_1.png",
        "https://discoveru-s3.s3.us-east-1.amazonaws.com/0018_2.png",
      ],
      movie_id: ["y-GzZAhWj9g"],
      review: 4.5,
      indicator: 90.0,
    },
    {
      id: 19,
      store_id: 2,
      title: "初心者向けランニング",
      date: "2024-12-09",
      start_time: "07:00:00",
      end_time: "08:30:00",
      location: "埼玉県",
      description: "初心者向けランニングで基本のフォームを習得。",
      imagePath: [
        "https://discoveru-s3.s3.us-east-1.amazonaws.com/0019_1.png",
        "https://discoveru-s3.s3.us-east-1.amazonaws.com/0019_2.png",
      ],
      movie_id: ["UDWK4gvzCVE"],
      review: 3.8,
      indicator: 75.0,
    },
    {
      id: 20,
      store_id: 3,
      title: "初心者向けスキー",
      date: "2024-12-09",
      start_time: "09:00:00",
      end_time: "11:30:00",
      location: "自宅",
      description: "初心者向けスキークラスで雪山を楽しみます。",
      imagePath: [
        "https://discoveru-s3.s3.us-east-1.amazonaws.com/0020_1.png",
        "https://discoveru-s3.s3.us-east-1.amazonaws.com/0020_2.png",
      ],
      movie_id: ["0PSW9ZRLASc"],
      review: 4.0,
      indicator: 80.0,
    },
  ]);
  //インクリメントリセット
  await knex.raw("select setval(pg_get_serial_sequence('lesson', 'id'), MAX(id)) FROM lesson");
};
