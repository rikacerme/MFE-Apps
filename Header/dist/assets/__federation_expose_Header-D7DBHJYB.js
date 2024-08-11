import { importShared } from './__federation_fn_import-DO-sB0c8.js';
import { d as delegateEvents, t as template } from './web-CXZ_Ebed.js';

var _tmpl$ = /* @__PURE__ */ template(`<header><div class=icon-container><img src=icon.png alt=Icon></div><div><button>Login</button><button>User Profile`);
const {createSignal} = await importShared('solid-js');
const Header = () => {
  const [count, setCount] = createSignal(0);
  return (() => {
    var _el$ = _tmpl$(), _el$2 = _el$.firstChild, _el$3 = _el$2.nextSibling, _el$4 = _el$3.firstChild, _el$5 = _el$4.nextSibling;
    _el$4.$$click = () => setCount(count() - 1);
    _el$5.$$click = () => setCount(count() + 1);
    return _el$;
  })();
};
delegateEvents(["click"]);

export { Header, Header as default };
