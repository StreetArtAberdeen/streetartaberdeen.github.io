/**
 * @copyright   (C) 2018 Open Source Matters, Inc. <https://www.joomla.org>
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */(l=>{l.addEventListener("DOMContentLoaded",()=>{[].slice.call(l.querySelectorAll('input[type="password"]')).forEach(e=>{const o=e.parentNode.querySelector(".input-password-toggle");o&&o.addEventListener("click",()=>{const t=o.firstElementChild,c=o.lastElementChild;e.type==="password"?(t.classList.remove("icon-eye"),t.classList.add("icon-eye-slash"),e.type="text",e.focus(),c.innerText=Joomla.Text._("JHIDEPASSWORD")):e.type==="text"&&(t.classList.add("icon-eye"),t.classList.remove("icon-eye-slash"),e.type="password",e.focus(),c.innerText=Joomla.Text._("JSHOWPASSWORD"))});const s=e.parentNode.querySelector(".input-password-modify");s&&s.addEventListener("click",()=>{!s.classList.contains("locked")===!0?(s.classList.add("locked"),e.value="",e.setAttribute("disabled",""),s.innerText=Joomla.Text._("JMODIFY")):(s.classList.remove("locked"),e.removeAttribute("disabled"),e.focus(),s.innerText=Joomla.Text._("JCANCEL"))})})})})(document);
