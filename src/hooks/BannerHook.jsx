import { useBanner } from '../context/BannerContext';

export const useBannerData = () => {
  const { banners, loading } = useBanner();
  return { banners, loading };
};