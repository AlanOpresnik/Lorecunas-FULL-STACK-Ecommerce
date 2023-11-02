import React from 'react'
import { Link } from 'react-router-dom'

const asideCategory = () => {
  return (
    <div className='flex flex-col'>
        <h1 className='font-bold border-b-4'>Categorias</h1>
        <div className='flex flex-col  py-4 '>
            <Link className='p-1 border-b-2 hover:text-[#FE98CB]' to={"/category"}>Roperos</Link>
            <Link className='p-1 border-b-2 hover:text-[#FE98CB]' to={"/category"}>Cunas Funcionales</Link>
            <Link className='p-1 border-b-2 hover:text-[#FE98CB]' to={"/category"}>Instructivos</Link>
            <Link className='p-1 border-b-2 hover:text-[#FE98CB]' to={"/category"}>Acolchados y chichoneras</Link>
            <Link className='p-1 border-b-2 hover:text-[#FE98CB]' to={"/category"}>Dormitorios Completos</Link>
            <Link className='p-1 border-b-2 hover:text-[#FE98CB]' to={"/category"}>Cajoneras</Link>
            <Link className='p-1 border-b-2 hover:text-[#FE98CB]' to={"/category"}>HOT/SALE</Link>
            <Link className='p-1 border-b-2 hover:text-[#FE98CB]' to={"/category"}>OFERTAS</Link>
            <Link className='p-1 border-b-2 hover:text-[#FE98CB]' to={"/category"}>DECORACION</Link>
        </div>
    </div>
  )
}

export default asideCategory