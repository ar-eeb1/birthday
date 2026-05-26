/** Replace PHOTOS with your Cloudinary links. WISHES are plain strings. */

export const photos = [
  { url: "https://res.cloudinary.com/dliahmplq/image/upload/v1779797913/WhatsApp_Image_2026-05-25_at_8.01.56_PM_2_bqzwxs.jpg", width: 800, height: 900 },
  { url: "https://res.cloudinary.com/dliahmplq/image/upload/v1779797913/WhatsApp_Image_2026-05-25_at_8.01.56_PM_dxc9en.jpg", width: 800, height: 900 },
  { url: "https://res.cloudinary.com/dliahmplq/image/upload/v1779797913/WhatsApp_Image_2026-05-25_at_8.01.56_PM_1_s4gmjx.jpg", width: 800, height: 900 },
  { url: "https://res.cloudinary.com/dliahmplq/image/upload/v1779797913/WhatsApp_Image_2026-05-25_at_8.01.55_PM_tmgv6f.jpg", width: 800, height: 900 },
];

export const videoUrl = [
  "https://res.cloudinary.com/dliahmplq/video/upload/v1779797915/WhatsApp_Video_2026-05-25_at_8.01.55_PM_1_nkpmzy.mp4",
  "https://res.cloudinary.com/dliahmplq/video/upload/v1779797914/WhatsApp_Video_2026-05-25_at_8.01.55_PM_oy14ty.mp4",
  "https://res.cloudinary.com/dliahmplq/video/upload/v1779797914/WhatsApp_Video_2026-05-25_at_8.01.54_PM_q2bqqx.mp4",
  "https://res.cloudinary.com/dliahmplq/video/upload/v1779797914/WhatsApp_Video_2026-05-25_at_8.01.53_PM_qxieub.mp4",
];

export const videos = videoUrl.map(url => ({ url, width: 1080, height: 1920, type: "video" }));

export const wishes = [
  `Happy Birthday meri jaan ❤️
Tu meri life ki sabse beautiful feeling hai.
Tere saath har moment special lagta hai,

aaj ka din sabse zyada special hai 🎂✨
Bas hamesha aise hi haste rehna,

teri smile meri favorite cheez hai 😊
Thank you meri life me aane ke liye,

tu sach me meri happiest place hai 💖
I love you so much,

aur I pray tera har sapna pura ho 🎉💕`,
];

export const audioUrl =
  "https://upload.wikimedia.org/wikipedia/commons/8/85/Happy_birthday_to_you_piano.ogg";
