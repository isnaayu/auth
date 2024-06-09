import ApiInstance from "../api/ApiInstance";

export const userOrder = () => {
  return ApiInstance.post('/order')
}

export const getUserByCredentialId = (credentialId) => {
  return ApiInstance.get(`/customer/${credentialId}`)
}

