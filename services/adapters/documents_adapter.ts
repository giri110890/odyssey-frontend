import axiosInstance from "./axiosInstance.js";
import AppConfig from "../../config/application.config";

const deleteDocument = async (userInfo, formId) => {
    try {
      const { data } = await axiosInstance.delete(
        AppConfig.svc + `delete/file/`,
        {
          params: {
            property_manager_id: userInfo.id,
            form_name: formId
          },
        }
      );
      return data;
    } catch (error) {
  
    }
  }

const DocumentsAdapter = {
    deleteDocument
  };
  export default DocumentsAdapter;