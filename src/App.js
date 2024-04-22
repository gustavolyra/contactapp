import { useEffect, useRef, useState } from 'react';
import Header from './components/Header'
import UserList from './components/UserList'
import {getUsers, saveUser} from './api/UserService'
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const modalRef = useRef();
  const [data, setData] = useState({});
  const [currentPage, setCurrentPage] = useState(0);
  

  const getAllUsers = async (page=0, size=10)=>{
    try{
      setCurrentPage(page);
      const {data} = await getUsers(page,size);
      setData(data);
      console.log(data);
    }catch(error){
      console.log(error);
    }
  }


    const toggleModal = show => show ? modalRef.current.showModal() : modalRef.current.close();

  useEffect(() => {
    getAllUsers();
  }, []);


  return (
    <>
    <Header toggleModal={toggleModal} nbOfUser={data.totalElements} />
    <main className='main'>
      <div className='container'>
      <Routes>
        <Route path='/' element={<Navigate to={'/users'}/>}/>
        <Route path="/users" element={<UserList data={data} currentPage={currentPage} getAllUsers={getAllUsers}/>}/>
      </Routes>
      </div>
    </main>
</>
  );
}

export default App;
