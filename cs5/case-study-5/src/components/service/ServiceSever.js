import axios from "axios";

export async function addService(service) {
  await axios.post("http://localhost:8080/services", service);
}

export async function getListService() {
  const res = await axios.get("http://localhost:8080/services");
  return res.data;
}

export async function deleteService(id) {
  await axios.delete("http://localhost:8080/services/"+id);
}
export async function getListServiceName() {
    const res = await axios.get("http://localhost:8080/serviceName");
    return res.data;
  }
  export async function editService(service) {
    await axios.put("http://localhost:8080/services/"+ service.id, service);
  }
  export async function getFindById(id) {
    const res = await axios.get("http://localhost:8080/services/"+ id);
    return res.data;
  }

  export async function getListCustomer() {
    
    const rs = await axios.get("http://localhost:8080/customers");
    return rs.data;
  }

