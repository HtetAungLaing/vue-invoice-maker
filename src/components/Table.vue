<template>
  <div class="mt-3">
    <div class="row justify-content-center">
      <div class="col-12 col-lg-8">
        <table class="table gradient border-0 rounded m-0 w-100">
          <thead>
            <tr>
              <th class="text-center">#</th>
              <th class="text-center">Item</th>
              <th class="text-center">Price</th>
              <th class="text-center">Quantity</th>
              <th class="text-center">Cost</th>
              <th class="hideOnPrint">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(record, index) in records" :key="index" class="animate__fadeInDown animate__animated">
              <td class="text-center">{{ index + 1 }}</td>
              <td class="text-center">{{ record.item.name }}</td>
              <td class="text-center">{{ record.item.price }}</td>
              <td class="text-center">{{ record.quantity }}</td>
              <td class="text-center">${{ record.cost }}</td>
              <td class="text-center hideOnPrint">
                <button @click="delRecord(index)" class="btn btn-outline-danger btn-sm">
                  <i class="bi bi-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr v-if="records.length > 0">
              <td colspan="6">
                <div class="d-flex justify-content-around">
                  <h5 class="mb-0">Total</h5>
                  <div>${{ calTotal }}</div>
                </div>
              </td>
            </tr>
            <tr v-else>
              <td colspan="6">No records</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["records", "calTotal"],
  data() {
    return {
      total: "",
    };
  },
  computed: {},
  methods: {
    delRecord(index) {
      this.$emit("delRecord", index);
    },
  },
};
</script>

<style>
@media print {
  .hideOnPrint {
    display: none !important;
  }
}
</style>
