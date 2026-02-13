export const DELAYS = {
  pageLoad: 3000,
  imageLoad: 2000,
  contentRender: 1000,
  navigation: 1500,
};

export async function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}
