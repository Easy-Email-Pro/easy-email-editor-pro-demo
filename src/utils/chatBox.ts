export const chatBox = {
  show: () => {
    (window as any).$crisp?.push(["do", "chat:show"]);
  },
  hide: () => {
    (window as any).$crisp?.push(["do", "chat:hide"]);
  },
  open: () => {
    (window as any).$crisp?.push(["do", "chat:open"]);
  },
  send: (messages: string) => {
    (window as any).$crisp?.push(["do", "message:send", ["text", messages]]);
  },
  openWithMessage(messages: string) {
    (window as any).$crisp?.push(["do", "chat:open"]);
    (window as any).$crisp?.push(["do", "message:send", ["text", messages]]);
  },
  openArticle(articleId: string, lang: string) {
    (window as any).$crisp?.push([
      "do",
      "helpdesk:article:open",
      [lang, articleId],
    ]);
  },
  openSearch() {
    (window as any).$crisp?.push(["do", "helpdesk:search"]);
  },
  searchArticle(search_query: string) {
    chatBox.openSearch();
    (window as any).$crisp?.push(["do", "helpdesk:query", [search_query]]);
  },
};
