import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'


function Navbar() {
  const navigate = useNavigate()

    const { usuario, handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout()
        alert('Usuário deslogado com sucesso')
        navigate('/login')
    }

    let navbarComponent

    if(usuario.token !== "") {
      navbarComponent = (
        <div className='w-full bg-red-500 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <Link to='/home' className='text-2xl font-bold uppercase ml-10'>Vevs Blog</Link>

            <div className='flex gap-4'>
              <Link to='/postagens' className='hover:bg-red-300 hover:rounded-full px-2 py-2'>Postagens</Link>
              <Link to='/temas' className='hover:bg-red-300 hover:rounded-full px-2 py-2'>Temas</Link>
              <Link to='/cadastroTema' className='hover:bg-red-300 hover:rounded-full px-2 py-2'>Cadastrar tema</Link>
              <Link to='/perfil' className='hover:bg-red-300 hover:rounded-full px-2 py-2'>Perfil</Link>
              <Link to='' onClick={logout} className='hover:bg-red-300 hover:rounded-full px-2 py-2 mr-10'>Sair</Link>
            </div>
          </div>
        </div>
      )
    }

  return (
    <>
      {navbarComponent}
    </>
  )
}

export default Navbar