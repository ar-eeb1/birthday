/** Replace PHOTOS with your Cloudinary links. WISHES are plain strings. */

export const photos = [
  { url: "https://res.cloudinary.com/dliahmplq/image/upload/v1775374488/IMG-20210219-WA0015_Original_dxpzdp.jpg", width: 800, height: 900 },
  { url: "https://res.cloudinary.com/dliahmplq/image/upload/v1775374488/IMG-20161211-WA0040_Original_pkckpn.jpg", width: 800, height: 900 },
  { url: "https://res.cloudinary.com/dliahmplq/image/upload/v1775374490/IMG_20180428_235341_Original_dc0pja.jpg", width: 800, height: 600 },
  { url: "https://res.cloudinary.com/dliahmplq/image/upload/v1775374490/IMG_20180624_051155_Original_cx8oot.jpg", width: 800, height: 700 },
  { url: "https://res.cloudinary.com/dliahmplq/image/upload/v1775375007/IMG_20180707_212224_Original_vrlpz6.jpg", width: 800, height: 800 },
  { url: "https://res.cloudinary.com/dliahmplq/image/upload/v1775374493/IMG-20231224-WA0099_ejguqb.jpg", width: 800, height: 800 },
];

export const videoUrl = [
  "https://res.cloudinary.com/dliahmplq/video/upload/v1775375402/SnapInsta.to_AQOC_TbalADuwDbEBQbHFFTHOeOeIzm5EcrJID-XLDq9xbNZGAEW8VL4rpHbNILj9Th_wCFuEUnwK98sCu2GJVnePofIbO4mBVGv_C8_kgvy7r.mp4",
  "https://res.cloudinary.com/dliahmplq/video/upload/v1775375009/Snapchat-1425459301_lbm7tb.mp4",
  'https://res.cloudinary.com/dliahmplq/video/upload/v1775375008/VID-20220507-WA0065_u07sed.mp4'
];

export const videos = videoUrl.map(url => ({ url, width: 1080, height: 1920, type: "video" }));

export const wishes = [
  "May this year bring you everything your heart has been quietly wishing for.",
  "You deserve a life as beautiful as the joy you give to everyone around you.",
  "Wishing you a day full of warmth, and a year that takes your breath away.",
  "Age is just a number — what we have shared is timeless. Happy Birthday.",
  "The world is genuinely better with you in it. Never forget that.",
];

export const audioUrl =
  "https://upload.wikimedia.org/wikipedia/commons/8/85/Happy_birthday_to_you_piano.ogg";
