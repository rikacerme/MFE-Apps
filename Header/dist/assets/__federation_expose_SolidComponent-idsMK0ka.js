import { importShared } from './__federation_fn_import-DO-sB0c8.js';
import { i as insert, t as template } from './web-CXZ_Ebed.js';
import { createMemo } from './__federation_shared_solid-js-f9AvF4Qv.js';

var _tmpl$ = /* @__PURE__ */ template(`<fieldset><div>Solid component.`), _tmpl$2 = /* @__PURE__ */ template(`<div>with children.<fieldset><h3>React children show up here:</h3><div>`), _tmpl$3 = /* @__PURE__ */ template(`<div>with no children.`);
const {children:solidChildren} = await importShared('solid-js');

const SolidComponent = (props) => {
  const getChildren = solidChildren(() => props.children);
  return (() => {
    var _el$ = _tmpl$(); _el$.firstChild;
    insert(_el$, (() => {
      var _c$ = createMemo(() => !!getChildren());
      return () => _c$() ? (() => {
        var _el$3 = _tmpl$2(), _el$4 = _el$3.firstChild, _el$5 = _el$4.nextSibling, _el$6 = _el$5.firstChild, _el$7 = _el$6.nextSibling;
        insert(_el$7, getChildren);
        return _el$3;
      })() : _tmpl$3();
    })(), null);
    return _el$;
  })();
};

export { SolidComponent, SolidComponent as default };
