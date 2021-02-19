import { renderHook } from '@testing-library/react-hooks';
import { useAuth, AuthProvider } from '../../hooks/auth';


describe('Auth hook', () => {
  it('should be able to sign in', () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    result.current.signIn({
      email: 'johndoe@hotmail.com',
      password: '12345'
    });

    expect(result.current.user.email).toEqual('johndoe@hotmail.com');
  });

})
