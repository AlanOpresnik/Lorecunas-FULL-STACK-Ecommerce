import { useBanner } from '../context/BannerContext';

export const useBannerData = () => {
  const { banners, loading, postBanner } = useBanner();
  return { banners, loading, postBanner };
};