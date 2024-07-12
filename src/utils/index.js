const assetPath = import.meta.env.VITE_ASSET_PATH || '';

function getAssetPath(path) {
  return `${assetPath}${path}`;
}

export const heroImg = getAssetPath("/assets/images/hero.jpeg");

export const heroVideo = getAssetPath("/assets/videos/hero.mp4");
export const smallHeroVideo = getAssetPath("/assets/videos/smallHero.mp4");
export const highlightFirstVideo = getAssetPath("/assets/videos/highlight-first.mp4");
export const highlightSecondVideo = getAssetPath("/assets/videos/hightlight-third.mp4");
export const highlightThirdVideo = getAssetPath("/assets/videos/hightlight-sec.mp4");
export const highlightFourthVideo = getAssetPath("/assets/videos/hightlight-fourth.mp4");
export const exploreVideo = getAssetPath("/assets/videos/explore.mp4");
export const frameVideo = getAssetPath("/assets/videos/frame.mp4");

export const appleImg = getAssetPath("/assets/images/apple.svg");
export const searchImg = getAssetPath("/assets/images/search.svg");
export const bagImg = getAssetPath("/assets/images/bag.svg");
export const watchImg = getAssetPath("/assets/images/watch.svg");
export const rightImg = getAssetPath("/assets/images/right.svg");
export const replayImg = getAssetPath("/assets/images/replay.svg");
export const playImg = getAssetPath("/assets/images/play.svg");
export const pauseImg = getAssetPath("/assets/images/pause.svg");

export const yellowImg = getAssetPath("/assets/images/yellow.jpg");
export const blueImg = getAssetPath("/assets/images/blue.jpg");
export const whiteImg = getAssetPath("/assets/images/white.jpg");
export const blackImg = getAssetPath("/assets/images/black.jpg");
export const explore1Img = getAssetPath("/assets/images/explore1.jpg");
export const explore2Img = getAssetPath("/assets/images/explore2.jpg");
export const chipImg = getAssetPath("/assets/images/chip.jpeg");
export const frameImg = getAssetPath("/assets/images/frame.png");
