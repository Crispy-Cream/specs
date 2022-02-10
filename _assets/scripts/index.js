async function ChangeTheme() {
  let i = await document.documentElement.style.getPropertyValue("--main");

  if (i === "" || i === "#ffffff") {
    /**
     * --main: #0F0E0E;
     * --txt: #e2e5e6;
     * --links: #004aad;
     * --button: #004aad;
     * --cardb: #252429;
     * --ul: #c2c3bd;
     */

    document.documentElement.style.setProperty("--main", "#0F0E0E");
    document.documentElement.style.setProperty("--txt", "#fffaff");
    document.documentElement.style.setProperty("--links", "#004aad");
    document.documentElement.style.setProperty("--button", "#004aad");
    document.documentElement.style.setProperty("--cardb", "#252429");
    document.documentElement.style.setProperty("--ul", "#c2c3bd");

    console.log("Changed Theme to Dark Mode");
  } else {
    /**
     * --main: #ffffff;
     * --txt: #000000;
     * --links: #0000ff;
     * --button: #0000ff;
     * --cardb: #e9e9e9;
     * --ul: #000000;
     */

    document.documentElement.style.setProperty("--main", "#ffffff");
    document.documentElement.style.setProperty("--txt", "#000000");
    document.documentElement.style.setProperty("--links", "#0000ff");
    document.documentElement.style.setProperty("--button", "#0000ff");
    document.documentElement.style.setProperty("--cardb", "#e9e9e9");
    document.documentElement.style.setProperty("--ul", "#000000");

    console.log("Changed Theme to Light Mode");
  }
}
