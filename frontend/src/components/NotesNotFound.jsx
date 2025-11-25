import { Link } from "react-router";
import { PlusIcon,NotebookIcon } from "lucide-react";

const NotesNotFound = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="flex flex-col items-center justify-center gap-4 md:gap-6">
            
            <div className="flex-shrink-0 flex items-center justify-center bg-accent/20 p-3 sm:p-4 rounded-full">
                <NotebookIcon className="size-8 sm:size-10 text-accent" />
            </div>

            <div className="flex-1 text-center">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">
                    Start Creating Notes
                </h3>

                <p className="text-sm sm:text-base text-base-content mb-1">
                    No notes where found
                </p>
                
                <Link to={'/create'} className="btn btn-ghost text-accent">
                    <span>Create a Note</span>
                    <PlusIcon className='size-5'/>
                </Link>
            </div>
        
        </div>
    </div> 
  )
}

export default NotesNotFound
