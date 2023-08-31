import axios from "axios";
// -------------------Service---------------------------------
export async function addService(service) {
  await axios.post("http://localhost:8080/services", service);
}

export async function getListService() {
  const res = await axios.get("http://localhost:8080/services");
  return res.data;
}

export async function deleteService(id) {
  await axios.delete("http://localhost:8080/services/" + id);
}
export async function getListServiceName() {
  const res = await axios.get("http://localhost:8080/serviceName");
  return res.data;
}
export async function editService(service) {
  await axios.put("http://localhost:8080/services/" + service.id, service);
}
export async function getFindById(id) {
  const res = await axios.get("http://localhost:8080/services/" + id);
  return res.data;
}
// search service
export async function searchService(serviceName) {
  const rs = await axios.get("http://localhost:8080/services/?serviceName_like=" + serviceName)
  return rs.data
}
// Paginate services 
export async function paginationService(page, limit) {
  const response = await axios.get(
    `http://localhost:8080/services?_page=${page}&_limit=${limit}`
  );
  console.log(JSON.stringify(response));
  return response.data;
}
// -------------------------Customer------------------------------
export async function getListCustomer() {
  const rs = await axios.get("http://localhost:8080/customers");
  return rs.data;
}
// Add customer
export async function addCustomer(customer) {
  await axios.post("http://localhost:8080/customers", customer);
}
// Delete customer
export async function deleteCustomer(id) {
  await axios.delete("http://localhost:8080/customers/" + id);
}
// Find Id customer
export async function getFindByIdCustomer(id) {
  const res = await axios.get("http://localhost:8080/customers/" + id);
  return res.data;
}
// Edit customer
export async function editCustomer(customer) {
  await axios.put("http://localhost:8080/customers/" + customer.id, customer);
}
// search customer
export async function searchCustomerName(name) {
  const rs = await axios.get("http://localhost:8080/customers/?name_like=" + name)
  return rs.data
}

// Paginate customers
export async function paginationCustomers(page, limit) {
  const response = await axios.get(
    `http://localhost:8080/customers?_page=${page}&_limit=${limit}`
  );
  console.log(JSON.stringify(response));
  return response.data;
}
// ---------------------------Contract-----------------------------------
export async function getListContract() {
  const rs = await axios.get("http://localhost:8080/contracts");
  return rs.data;
}
// Add Contract
export async function addContract(contract) {
  const rs = await axios.post("http://localhost:8080/contracts", contract);
  return rs.data
}
// Delete customer
export async function deleteContract(id) {
  await axios.delete("http://localhost:8080/contracts/" + id);
}
// Edit contract
export async function editContract(contract) {
  await axios.put("http://localhost:8080/contracts/" + contract.id, contract);
}
// Find Id contract
export async function getFindByIdContract(id) {
  const res = await axios.get("http://localhost:8080/contracts/" + id);
  return res.data;
}
// search contract
export async function searchContractByCode(contractCode) {
  const rs = await axios.get("http://localhost:8080/contracts/?contracCode_like=" + contractCode)
  return rs.data
}
// Paginate contracts 
export async function paginationContract(page, limit) {
  const response = await axios.get(
    `http://localhost:8080/contracts?_page=${page}&_limit=${limit}`
  );
  console.log(JSON.stringify(response));
  return response.data;
}
