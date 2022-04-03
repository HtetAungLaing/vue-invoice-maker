<template>
  <Modal :record="record" v-if="showModal" @closeModal="showModal = false"></Modal>
  <div class="d-flex justify-content-center align-items-center wrapper">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-8">
          <div class="invoice-card shadow px-1 py-2 p-md-3 mx-0 mx-md-2 rounded-3 w-100">
            <Invoice :invoice-number="invoiceNumber"></Invoice>
            <FindForm @recordData="recordData"></FindForm>
            <Form :items="items" @newRecord="records.push($event)" :isSaved="isSaved"></Form>
            <ShowId :invoiceId="invoiceId" v-if="showShowId"></ShowId>
            <Table :records="records" :calTotal="calTotal" @delRecord="delRecord"></Table>
            <Print :invoiceNumber="invoiceNumber" :calTotal="calTotal" @savedToCloud="saved" :records="records"></Print>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "./components/Modal";
import Print from "./components/Print";
import ShowId from "./components/ShowId";
import FindForm from "./components/FindForm";
import Form from "./components/Form";
import Table from "./components/Table";
import Invoice from "./components/Invoice";
export default {
  components: {
    Modal,
    Print,
    ShowId,
    FindForm,
    Form,
    Table,
    Invoice,
  },
  data() {
    return {
      items: [
        { id: 1, name: "R7-5700G", price: 430 },
        { id: 2, name: "R7-5800X", price: 529 },
        { id: 3, name: "RX6600 XT", price: 680 },
        { id: 4, name: "RX6700 XT", price: 1010 },
        { id: 5, name: "8GB DDR3", price: 42 },
        { id: 6, name: "8GB DDR4", price: 46 },
        { id: 7, name: "HDD 6TB", price: 220 },
        { id: 8, name: "NVME 512GB", price: 90 },
        { id: 9, name: "AOC IPS Panel", price: 390 },
        { id: 10, name: "LG 23.5", price: 209 },
      ],
      records: [],
      isSaved: false,
      invoiceId: "",
      showShowId: false,
      record: "",
      showModal: false,
    };
  },
  methods: {
    delRecord(index) {
      let filterRecord = this.records.filter((record, ind) => ind !== index);
      this.records = filterRecord;
    },

    saved(id) {
      this.isSaved = true;
      this.invoiceId = id;
      this.showShowId = true;
    },

    recordData(record) {
      this.record = record;
      this.showModal = true;
      console.log(record);
    },
  },
  computed: {
    invoiceNumber() {
      let d = new Date();
      let dateCode = d.getDate() + "" + (d.getMonth() + 1) + "" + d.getFullYear();
      let random = Math.floor(Math.random() * 10000);
      return dateCode + "-" + random;
    },
    calTotal() {
      return this.records.reduce((pv, cv) => pv + cv.cost, 0);
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  min-height: 100vh;
}
</style>
