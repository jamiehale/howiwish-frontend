import { useDispatch, useSelector } from 'react-redux';

const useUsers = () => {

  const users = useSelector()
  return {
    users: [],
  };
};

export default useUsers;
