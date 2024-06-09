import { jwtDecode } from 'jwt-decode'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserByCredentialId } from '../services/UserService';
import { setUserLogin } from '../store/reducers/usersSlice';


const Dashboard = () => {
  const userLogin = useSelector((state)=> state.users.userLogin)
  const dispatch = useDispatch()

  const token = localStorage.getItem('token');
  const userlog = jwtDecode(token)
  console.log(userlog.sub)
  console.log(userLogin)

  useEffect(()=> {
    const fetchUser = async() => {
      try {
        const response = await getUserByCredentialId(userlog.sub)
        console.log(response)
        // localStorage.setItem('username', response.data.data.userCredential.username)
        dispatch(setUserLogin(response.data))
      } catch (error) {
        console.log(error)
      }
    }
    fetchUser()
  }, [dispatch])

  return (
    <>Welcome
    </>
    
  )
}

export default Dashboard