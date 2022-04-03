<template>
  <div class="row justify-content-center align-items-center">
    <div class="col-12">
      <div>
        <h3 class="text-center text-primary mb-5">Invoice Maker</h3>
      </div>
    </div>
    <div class="col-12 col-lg-8">
      <div class="d-flex justify-content-between">
        <p class="mb-0 text-black-50 small">
          <small>Invoice Number : </small>
          {{ invoiceNumber }}
        </p>
        <a href="" target="blank" class="btn btn-sm btn-primary hideOnPrint">New Invoice<i class="bi bi-file-earmark-diff"></i></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["invoiceNumber"],
};
</script>

<style lang="scss" scoped></style>
