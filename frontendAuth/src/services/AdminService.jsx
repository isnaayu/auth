import ApiInstance from "../api/ApiInstance";

export const getAllAdmin = () => {
  return ApiInstance.get("/admins");
};

export const deleteAdmin = (id) => {
  return ApiInstance.delete(`admins/${id}`)
}

export const updateAdmin = async (data) => {
  try {
    const response = await ApiInstance.put(`/admins/with-image`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    // if (!response.ok) {
    //   throw new Error('Failed to update admin');
    // }

    return response;
  } catch (error) {
    console.error('Error updating admin:', error);
    throw error;
  }
};


