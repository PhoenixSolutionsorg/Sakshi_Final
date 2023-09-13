const Account = {
    signIn : {
        url : '/signIn',
        method : 'POST'
    },
    signUp : {
        url : '/signUp',
        method : 'POST'
    },
    viewAccount : (id)=> ({
        url : `/myAccount/${id}`,
        method : 'GET'
    })
  };
  export default Account;