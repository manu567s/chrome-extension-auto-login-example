// This script gets injected into any opened page
// whose URL matches the pattern defined in the manifest
// (see "content_script" key).
// Several foreground scripts can be declared
// and injected into the same or different pages.

console.log("This prints to the console of the page (injected only if the page url matched)")
tryLogin()

async function tryLogin() {
  while (window.location.href.includes('sign-in')) {
    console.log('try login!')
    let account = document.getElementById('signInUsername')
    let pass = document.getElementById('signInPassword')
    let submit = document.querySelector('.signin-submit')
    if (account && pass && submit) {
      // submit.disabled=false
      trigger('change', account, '616668164')
      trigger('change', pass, 'envato123')

      await wait(500)
      submit.click()
      await wait(10000)
    }
    await wait(500)
  }
}

function wait(mili) {
  return new Promise(resovle => setTimeout(resovle, mili))
}

function trigger(type, el, txt) {
  el.focus();
  for(let i=0;i<el.value.length;i++){
    document.execCommand('delete');
  }
  document.execCommand('insertText', false, txt);
  el.dispatchEvent(new Event(type, { bubbles: true }));
}