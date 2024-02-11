import axios from 'axios';
import * as Constants from '../Constants/Api';


export const Reports = {

   async getReportsAPI(currentPage, fromDate, toDate) {
      let user = JSON.parse(localStorage.getItem('currentLoggedInUser'));
      const token = user.token;
      const url = `${Constants.API}/question/master/report`;
      const param = {
         offset: currentPage === 1 ? 0 : currentPage > 0 ? (currentPage - 1) * 10 : currentPage * 10,
         limit: 10,
         search: '',
         status: 0,
         from_date: fromDate,
         to_date: toDate
      }
      const response = axios.post(url, param, { headers: { "Authorization": `Bearer ${token}` } });
      return response;
   }

}

export default Reports;