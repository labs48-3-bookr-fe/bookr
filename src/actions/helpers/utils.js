export const logout = () => {
  localStorage.removeItem('bookrUser');
}

export const handleResponse = (response) => {
  try{
    if(!response.ok){
      if(response.status === 401){
        logout();
        window.location.reload(true);
      }
      const error = response.statusText;
      return Promise.reject(error);
    }
    return response.json();
  } catch(e){
    return Promise.reject(e);
  }
}