Vue.component("coupon", {
  template: `<input style="width:300px;" type="text" placeholder="enter your coupon code" @blur="onCouponApplied">`,

  methods: {
    onCouponApplied() {
      this.$emit("coupon-was-applied");
    }
  }
});

new Vue({
  el: "#root",
  data: {
    couponApplied: false
  },
  methods: {
    onCouponApplied() {
      this.couponApplied = true;
    }
  }
});

new Vue({
  el: "#root"
});
