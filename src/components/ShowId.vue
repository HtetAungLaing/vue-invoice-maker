<template>
  <hr />
  <div class="hideOnPrint">
    <div class="row mt-3 justify-content-center">
      <div class="col-12 col-md-8">
        <p class="fw-bolder mb-0">Your uploaded invoice's KEY</p>
        <div class="mb-3 small text-black-50">Save following id in safe place to find your invoice later</div>
        <div class="">
          <h6>
            <span class="text-dark">{{ invoiceId }}</span>
            <span v-if="isCopied" class="badge bg-secondary ms-2 text-black p-2 copy-btn" @click="copy">Copied <i class="bi bi-clipboard-check"></i></span>
            <span v-else class="badge bg-secondary ms-2 text-black p-2 copy-btn" @click="copy">Copy</span>
          </h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["invoiceId"],
  data() {
    return {
      isCopied: false,
    };
  },
  methods: {
    copy() {
      navigator.clipboard.writeText(this.invoiceId);
      this.isCopied = true;
    },
  },
};
</script>

<style lang="scss" scoped></style>
