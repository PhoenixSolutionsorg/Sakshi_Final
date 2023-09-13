import auth from './auth';
import account from './account';
import product from './product';

const AccessControll = {
    ...auth,
    ...account,
    ...product,
        
};

export default AccessControll;