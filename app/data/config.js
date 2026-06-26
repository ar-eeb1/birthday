/** Replace PHOTOS with your Cloudinary links. WISHES are plain strings. */

export const photos = [
  { url: "https://res.cloudinary.com/dliahmplq/image/upload/v1782513768/IMG_20180428_235147_Original_w3hedp.jpg", width: 800, height: 900 },
  { url: "https://res.cloudinary.com/dliahmplq/image/upload/v1782513842/IMG_4544_a9cplw.jpg", width: 800, height: 900 },
  { url: "https://res.cloudinary.com/dliahmplq/image/upload/v1782513845/IMG_20180629_004015_Original_jrc1yx.jpg", width: 800, height: 900 },
  { url: "https://res.cloudinary.com/dliahmplq/image/upload/v1782514372/IMG_20180629_004124_Original_a7qf0d.jpg", width: 800, height: 900 },
  { url: "https://res.cloudinary.com/dliahmplq/image/upload/v1782514371/IMG-20201231-WA0006_Original_mv2eo8.jpg", width: 800, height: 900 },
  { url: "https://res.cloudinary.com/dliahmplq/image/upload/v1782514372/IMG_20180624_061333_Original_y31slk.jpg", width: 800, height: 900 },
  { url: "https://res.cloudinary.com/dliahmplq/image/upload/v1782514372/IMG_20180624_061350_Original_mlqca2.jpg", width: 800, height: 900 },

];

export const videoUrl = [
  "https://res.cloudinary.com/dliahmplq/video/upload/v1782513789/Snapchat-428007834_kfv5z5.mp4",
  "https://res.cloudinary.com/dliahmplq/video/upload/v1782513782/VID_20201231_201543_zhn5qe.mp4",
  "https://res.cloudinary.com/dliahmplq/video/upload/v1782513780/VID-20260210-WA0027_zdeiai.mp4",
  "https://res.cloudinary.com/dliahmplq/video/upload/v1782514372/VID-20180702-WA0028_wfjhw5.mp4",
];

export const videos = videoUrl.map(url => ({ url, width: 1080, height: 1920, type: "video" }));

export const wishes = [
  `Happy Birthday Khizra! 😍

From all our childhood memories to all the moments we have shared in our 20s, U have always been more than just a cousin, you have been my best friend, my partner-in-crime, someone who knows every chapter of my life. Thanks for always being there, for understanding without me having to explain and for making life so much brighter.

I wish you all the happiness, good health, success and all the love you deserve this year. May all your dreams come true. May your smile never disappear.

No matter where life takes us, no matter how old we get, once again. Happy birthday again! 🎂🎉❤️
`]

export const audioUrl = "/happy-birthday.mp3";
