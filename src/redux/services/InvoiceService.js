import apiV2 from "./apiV2";

const getAllInvoices = async (page = 1, size = 8, invoiceCode = "", purchaseBy = "", supplier = "") => {
   return await apiV2.get(`/invoices/filter?page=${page}&size=${size}&invoiceCode=${invoiceCode}&purchaseBy=${purchaseBy}&supplier=${supplier}`)
}

const saveInvoice = async (data) => {
   return await apiV2.post(`/invoices`, data)
}

const getInvoiceById = async (id) => {
   return await apiV2.get(`/invoices/${id}`)
}

const InvoiceService = { getAllInvoices, saveInvoice, getInvoiceById };
export default InvoiceService;