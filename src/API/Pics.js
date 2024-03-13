import axios from 'axios';
import * as Constants from '../Constants/Api';


export const Pics = {

   async gethomedata() {
      const url = `${Constants.PICS_API}/cms/home`;
      const response = axios.get(url);
      return response;
   },

   async getheaderandfooterdata() {
      const url = `${Constants.PICS_API}/cms/headerandfooter`;
      const response = axios.get(url);
      return response;
   },

   async getaboutusdata() {
      const url = `${Constants.PICS_API}/cms/aboutus`;
      const response = axios.get(url);
      return response;
   },

   async getprivacypolicydata() {
      const url = `${Constants.PICS_API}/cms/privacypolicy`;
      const response = axios.get(url);
      return response;
   },

   async gettermsandconditiondata() {
      const url = `${Constants.PICS_API}/cms/termsandcondition`;
      const response = axios.get(url);
      return response;
   },

   async getuniversitydata() {
      const url = `${Constants.PICS_API}/home/university`;
      const response = axios.get(url);
      return response;
   },

   async getcountrydata(data) {
      const url = `${Constants.PICS_API}/university/list?country=${data}`;
      const response = axios.get(url);
      return response;
   },

   async postcontactdata(payload) {
      const url = `${Constants.PICS_API}/contact`;
      const response = axios.post(url, payload);
      return response;
   },

   async getfaqdata() {
      const url = `${Constants.PICS_API}/cms/faq`;
      const response = axios.get(url);
      return response;
   },

   async getfaqcategorydata() {
      const url = `${Constants.PICS_API}/faq/category`;
      const response = axios.get(url);
      return response;
   },

   async getfaqlistdata(id, searchInput) {
      const url = `${Constants.PICS_API}/faq/list`;
      const response = axios.get(url, {
         params: {
            category_id: id,
            search: searchInput
         }
      });
      return response;
   }

}

export default Pics;