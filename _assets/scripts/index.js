async function ChangeTheme() {
  let i = await document.documentElement.style.getPropertyValue("--main");
  if (i === "#ffffff") {
    /*
  --main: #16181d;
  --txt: #e5e5fa;
  --links: #4e78d9;
  --button: #4e78d9;
  --cardb: #252429;
  --ul: #525863l
*/
    document.documentElement.style.setProperty("--main", "#16181d");
    document.documentElement.style.setProperty("--txt", "#e5e5fa");
    document.documentElement.style.setProperty("--links", "#4e78d9");
    document.documentElement.style.setProperty("--button", "#4e78d9");
    document.documentElement.style.setProperty("--cardb", "#252429");
    document.documentElement.style.setProperty("--ul", "#525863");
    console.log("Changed Theme to Dark Mode");
  } else {
    /*
  --main: #ffffff;
  --txt: #000000;
  --links: #0000ff;
  --button: #0000ff;
  --cardb: #e9e9e9;
  --ul: #000000;
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
