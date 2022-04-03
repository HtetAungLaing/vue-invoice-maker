<template>
  <div class="hideOnPrint">
    <div class="row mt-3 justify-content-center align-items-center">
      <div class="col-12 col-lg-8">
        <form @submit.prevent="search">
          <div class="row align-items-end">
            <div class="col-8 col-md-9">
              <label for="" class="form-label">Enter invoice's KEY to find your invoice.</label>
              <input required v-model="invoiceKey" type="text" name="" class="form-control" id="" placeholder="e.g. UCd3Vbf2DW9sIFx93QJK" />
            </div>
            <div class="col-4 col-md-3">
              <button class="btn btn-sm btn-primary w-100">
                <span v-if="isSearching" class="spinner-grow spinner-grow-sm text-secondary me-2" role="status" aria-hidden="true"></span>
                <i v-else class="bi bi-search-heart"></i>
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "@/firebase/config";
export default {
  data() {
    return {
      invoiceKey: "",
      isSearching: false,
    };
  },
  methods: {
    async search() {
      this.isSearching = true;
      let key = this.invoiceKey;
      let res = await db.collection("invoices").doc(key).get();
      let recordData = res.data();
      this.$emit("recordData", recordData);
      this.isSearching = false;
    },
  },
};
</script>

<style scoped></style>
