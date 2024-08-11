import { importShared } from './__federation_fn_import-DO-sB0c8.js';
import { d as delegateEvents, i as insert, t as template } from './web-CXZ_Ebed.js';

var _tmpl$ = /* @__PURE__ */ template(`<button> - `);
const {createSignal} = await importShared('solid-js');

const Button = (props) => {
  const [count, setCount] = createSignal(0);
  return (() => {
    var _el$ = _tmpl$(), _el$2 = _el$.firstChild;
    _el$.$$click = () => setCount(count() + 1);
    insert(_el$, () => props.text, _el$2);
    insert(_el$, count, null);
    return _el$;
  })();
};
delegateEvents(["click"]);

export { Button as default };
