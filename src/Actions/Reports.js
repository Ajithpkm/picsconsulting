import * as Constants from '../Constants/Reports';
import API from '../API/Reports';

export const getReports = (currentPage, fromDate, toDate) => {
   return async dispatch => {
      const response = await API.getReportsAPI(currentPage, fromDate, toDate);
      const payload = { "Reports": response.data || [] };
      return dispatch({
         type: Constants.REPORTS,
         payload
      })
   }
}

export const getPathName = (pathName) => {
   return dispatch => {
      const payload = { "pathName": pathName };
      return dispatch({
         type: Constants.PATHNAME,
         payload
      })
   }
}

export const getPageNumber = (pageNumber) => {
   return dispatch => {
      const payload = { "pageNumber": pageNumber };
      return dispatch({
         type: Constants.PAGENUMBER,
         payload
      })
   }
}