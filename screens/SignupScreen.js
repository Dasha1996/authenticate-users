import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { AuthContext } from '../store/auth-context';
import { createUser } from '../util/auth';
import {useState, useContext} from 'react';
import { Alert } from 'react-native';

function SignupScreen() {
    const [isAuthenticating, setIsAuthenticating] = useState(false);

    const authCtx = useContext(AuthContext)
    
    async function signUpHandler({email,password}) {
        setIsAuthenticating(true);
        try {
            const token = await createUser(email, password);
            authCtx.authenticate(token);
        } catch(error) {
            Alert.alert('Athentication failed', 'Could not register you, check your credentials')
            setIsAuthenticating(false);
        }
    }

    if(isAuthenticating) {
        return <LoadingOverlay message="Creating user..." />
    }
  return <AuthContent  onAuthenticate={signUpHandler}/>;
}

export default SignupScreen;