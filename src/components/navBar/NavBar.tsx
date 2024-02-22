import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'



function Navbar() {
  const navigate = useNavigate()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {
      handleLogout()
      alert('Usuário deslogado com sucesso')
      navigate('/login')
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let navbarComponent
  

  return (
    <>
     <div className='w-full bg-red-300 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
          <Link to='/home' className='text-2xl font-bold uppercase ml-4'>Vevs Blog</Link>

            <div className='flex gap-4'>
            <div className='hover:bg-red-400 rounded-md px-2 py-1'>Postagens</div>
            <Link to='/temas' className='hover:bg-red-400 rounded-md px-2 py-1'>Temas</Link>
            <Link to='/cadastroTema' className='hover:bg-red-400 rounded-md px-2 py-1'>Cadastrar tema</Link>
              <div className='hover:bg-red-400 rounded-md px-2 py-1'>Perfil</div>
              <Link to='' onClick={logout} className='hover:bg-red-400 rounded-md px-2 py-1 mr-6'>Sair</Link>
             
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar