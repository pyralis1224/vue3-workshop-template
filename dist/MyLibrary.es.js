import { ref as _, openBlock as l, createElementBlock as r, toDisplayString as s } from "vue";
const a = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [c, n] of e)
    o[c] = n;
  return o;
}, p = {
  __name: "HelloWorld",
  setup(t) {
    const e = _(0), o = () => {
      e.value++;
    };
    return (c, n) => (l(), r("button", {
      type: "button",
      onClick: o
    }, "count is " + s(e.value), 1));
  }
}, d = /* @__PURE__ */ a(p, [["__scopeId", "data-v-8afefce5"]]);
export {
  d as HelloWord
};
