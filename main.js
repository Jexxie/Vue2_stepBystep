var Event = new Vue();

Vue.component("coupon", {
  template: `<input style="width:300px;" type="text" placeholder="enter your coupon code" @blur="onCouponApplied">`,

  methods: {
    onCouponApplied() {
      Event.$emit("applied");
    }
  }
});

new Vue({
  el: "#root",
  data: {
    couponApplied: false
  },
  created() {
    Event.$on("applied", () => alert("Handling it!"));
  }
});
