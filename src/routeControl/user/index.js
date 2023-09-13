import auth from './auth';
import account from './account';
import product from './product';
import contact from './contact';

const AccessControll = {
    ...auth,
    ...account,
    ...product,
    ...contact,
            
};

export default AccessControll;