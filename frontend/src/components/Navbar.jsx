import { Link } from "react-router";
import { PlusIcon } from "lucide-react";

const Navbar = () => {
  return (
    <header className='bg-primary-content/0 border-b border-primary-content'>
        <div className='mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-3 p-4'>
            <Link to={'/'}>
              <h1 className='text-3xl font-bold text-primary font-mono tracking-tighter' > 
                NoteApp
              </h1>
            </Link>
            <div className='flex items-center'>
                <Link to={'/create'} className="btn btn-primary">
                <PlusIcon className='size-5'/>
                <span>New Note</span>
                </Link> 
            </div>
        </div>
    </header>
  )
}

export default Navbar
