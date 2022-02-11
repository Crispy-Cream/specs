async function ChangeTheme() {
  let i = await document.documentElement.style.getPropertyValue("--main");

  if (i === "" || i === "#ffffff") {
    /**
     * --main: #081421;
     * --txt: #d3d7de;
     * --links: #2796ec;
     * --button: #2796ec;
     * --cardb: #e9e9e9;
     * --ul: #bdbdbd; 
     */

    document.documentElement.style.setProperty("--main", "#081421");
    document.documentElement.style.setProperty("--txt", "#d3d7de");
    document.documentElement.style.setProperty("--links", "#2796ec");
    document.documentElement.style.setProperty("--button", "#2796ec");
    document.documentElement.style.setProperty("--cardb", "#e9e9e9");
    document.documentElement.style.setProperty("--ul", "#bdbdbd");

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

  /** OLD DARK MODE THEME
   * --main: #0F0E0E;
   * --txt: #e2e5e6;
   * --links: #004aad;
   * --button: #004aad;
   * --cardb: #252429;
   * --ul: #c2c3bd;
   */
}