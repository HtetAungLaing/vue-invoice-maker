<template>
  <div class="row">
    <div class="col-12 col-g-8 mt-3 d-flex justify-content-center hideOnPrint">
      <button class="btn btn-secondary hideOnPrint" @click="printInvoice">Print <i class="bi bi-printer"></i></button>
      <button class="btn btn-secondary hideOnPrint ms-2" @click="saveToDb" :disabled="isSaved">
        Upload
        <span v-if="isUploading" class="spinner-grow spinner-grow-sm text-primary" role="status" aria-hidden="true"></span>
        <i v-else class="bi bi-cloud-arrow-up"></i>
      </button>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import { db, timestamp } from "../firebase/config";
export default {
  props: ["invoiceNumber", "records", "calTotal"],
  data() {
    return {
      isSaved: false,
      isUploading: false,
      id: null,
    };
  },
  methods: {
    printInvoice() {
      window.print();
    },

    saveToDb() {
      Swal.fire({
        title: "Are you sure?",
        text: "Invoice can't be edited anymore after uploaded",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#9c89b8",
        cancelButtonColor: "#f0a6ca",
        confirmButtonText: "Yes, uploaded it",
      }).then((result) => {
        if (result.isConfirmed) {
          let save = async () => {
            let data = { invoiceNumber: this.invoiceNumber, created_at: timestamp(), recordData: this.records, total: this.calTotal };
            console.log(this.calTotal);
            // if (this.records.length == this.oldData.length) {
            //   alert("already uploaded");
            // } else {
            //   if (!confirm("After uploaded to cloud, this invoice can't be edited anymore, sure to upload?")) {
            //     return false;
            //   }
            // // }
            this.isUploading = true;
            let res = await db.collection("invoices").add(data);
            this.id = await res.id;
            console.log(res);
            console.log(this.id);
            this.isSaved = true;
            this.$emit("savedToCloud", res.id);
            this.isUploading = false;
            Swal.fire({
              title: "Successfully Uploaded",
              icon: "success",
            });
          };

          save();
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
