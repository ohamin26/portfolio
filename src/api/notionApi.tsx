export const fetchNotionPage = async (pageId: string) => {
  const response = await fetch(`https://notion-api.splitbee.io/v1/page/${pageId}`);
  const resJson = await response.json();
  return resJson;
};
