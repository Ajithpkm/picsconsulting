import * as Constants from '../Constants/Pics';
import API from '../API/Pics';

export const gethomedata = () => {
   return async dispatch => {
      const response = await API.gethomedata();
      const payload = { "HOMEPICSDATA": response.data || [] };
      return dispatch({
         type: Constants.HOMEPICSDATA,
         payload
      })
   }
}

export const getheaderandfooterdata = () => {
   return async dispatch => {
      const response = await API.getheaderandfooterdata();
      const payload = { "HEADANDFOOTERPICSDATA": response.data || [] };
      return dispatch({
         type: Constants.HEADANDFOOTERPICSDATA,
         payload
      })
   }
}

export const getaboutusdata = () => {
   return async dispatch => {
      const response = await API.getaboutusdata();
      const payload = { "ABOUTSPICSDATA": response.data || [] };
      return dispatch({
         type: Constants.ABOUTSPICSDATA,
         payload
      })
   }
}

export const getprivacypolicydata = () => {
   return async dispatch => {
      const response = await API.getprivacypolicydata();
      const payload = { "PRIVACYPICSDATA": response.data || [] };
      return dispatch({
         type: Constants.PRIVACYPICSDATA,
         payload
      })
   }
}

export const gettermsandconditiondata = () => {
   return async dispatch => {
      const response = await API.gettermsandconditiondata();
      const payload = { "TERMSPICSDATA": response.data || [] };
      return dispatch({
         type: Constants.TERMSPICSDATA,
         payload
      })
   }
}

export const getuniversitydata = () => {
   return async dispatch => {
      const response = await API.getuniversitydata();
      const payload = { "UNIVERSITYPICSDATA": response.data || [] };
      return dispatch({
         type: Constants.UNIVERSITYPICSDATA,
         payload
      })
   }
}

export const getcountrydata = (data) => {
   return async dispatch => {
      const response = await API.getcountrydata(data);
      const payload = { "COUNTRYPICSDATA": response.data || [] };
      return dispatch({
         type: Constants.COUNTRYPICSDATA,
         payload
      })
   }
}

export const postcontactdata = (data) => {
   return async dispatch => {
      const response = await API.postcontactdata(data);
      const payload = { "CONTACTPICSDATA": response.data };
      return dispatch({
         type: Constants.CONTACTPICSDATA,
         payload
      })
   }
}

export const getfaqdata = () => {
   return async dispatch => {
      const response = await API.getfaqdata();
      const payload = { "FAQPICSDATA": response.data || [] };
      return dispatch({
         type: Constants.FAQPICSDATA,
         payload
      })
   }
}

export const getfaqcategorydata = () => {
   return async dispatch => {
      const response = await API.getfaqcategorydata();
      const payload = { "FAQCATEGORYPICSDATA": response.data || [] };
      return dispatch({
         type: Constants.FAQCATEGORYPICSDATA,
         payload
      })
   }
}

export const getfaqlistdata = (id,searchInput) => {
   return async dispatch => {
      const response = await API.getfaqlistdata(id,searchInput);
      const payload = { "FAQLISTPICSDATA": response.data || [] };
      return dispatch({
         type: Constants.FAQLISTPICSDATA,
         payload
      })
   }
}