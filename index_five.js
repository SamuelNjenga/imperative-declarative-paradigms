// Procedural Programming
const myProcedure = () => {
  const article = document.querySelector("article");
  let ArticleOffsetTop;
  if (article !== undefined) {
    ArticleOffsetTop = article.offsetTop;
  }
  const mainMenu = document.querySelector(".MainMenu");
  let MainMenuClientHeight;
  if (mainMenu !== undefined) {
    MainMenuClientHeight = mainMenu.clientHeight;
  }
  const result = ArticleOffsetTop - MainMenuClientHeight;
  return result;
};
