<template>
  <!-- Modal -->
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content gradient">
        <div v-if="record == undefined">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">No record found !</h5>
          </div>
          <div class="modal-body">Wrong invoice key or no such related invoice</div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="closeModal">Close</button>
          </div>
        </div>
        <div v-else>
          <div class="modal-header hideOnPrint">
            <h5 class="modal-title" id="staticBackdropLabel">Invoice record found !</h5>
          </div>
          <div class="modal-body">
            <p class="small text-black-50">Invoice Number {{ record.invoiceNumber }}</p>
            <p class="small text-black-50">Created - {{ record.created_at.toDate() }}</p>
            <table class="table m-0 w-100 gradient border-0">
              <thead>
                <tr>
                  <th class="text-center">#</th>
                  <th class="text-center">Item</th>
                  <th class="text-center">Price</th>
                  <th class="text-center">Quantity</th>
                  <th class="text-center">Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(recordData, index) in recordDatas" :key="index">
                  <td class="text-center">{{ index + 1 }}</td>
                  <td class="text-center">{{ recordData.item.name }}</td>
                  <td class="text-center">{{ recordData.item.price }}</td>
                  <td class="text-center">{{ recordData.quantity }}</td>
                  <td class="text-center">${{ recordData.cost }}</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="5">
                    <div class="d-flex justify-content-around">
                      <h5 class="mb-0">Total - ${{ record.total }}</h5>
                      <div></div>
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div class="modal-footer hideOnPrint">
            <div>
              <button class="btn btn-sm btn-secondary" @click="print"><i class="bi bi-printer"></i> Print</button>
              <button type="button" class="btn btn-sm ms-2 btn-primary" data-bs-dismiss="modal" @click="closeModal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["record"],
  data() {
    return {};
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
    print() {
      window.print();
    },
  },
  computed: {
    recordDatas() {
      return this.record.recordData;
    },
  },
  mounted() {
    var myModal = new bootstrap.Modal(document.getElementById("staticBackdrop"));
    myModal.show();
  },
};
</script>

<style>
@media print {
  .modal-content {
    width: 100vw !important;
    height: 100vh !important;
  }
}
</style>
