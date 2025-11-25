import { PenSquareIcon, Trash2Icon } from "lucide-react"
import { Link } from "react-router"
import { formatDate } from "../lib/utils.js"
import axiosInstance from "../lib/axios.js"
import toast from "react-hot-toast"


const NoteCard = ({ note,setNotes }) => {

  const handleDelete = async (e,id) => {
    e.preventDefault();

    if(!window.confirm("Are you sure you want to delete this note?")){
      return;
    }

    try {
      await axiosInstance.delete(`/notes/${id}`);
      setNotes((prev) => prev.filter(
        note => note._id !== id
      ));//deletes the required note and reloads page wwithout the deleted note
      toast.success("Note deleted successfully!");

    } catch (error) {
      console.log("Failed to delete the note ", error);
      toast.error("Failed to delete");
    }

  };

  return (
    <Link to={`/note/${note._id}`} className = "card bg-secondary-content shadow-md hover:scale-105 duration-200 border-b-4 border-r-2 border-solid border-info">
      <div className="card-body">
        <h5 className="card-title text-primary text-[18px]">{note.title}</h5>
        <p className="text-secondary/60 line-clamp-3 text-sm">{note.content}</p>
        <div className="card-actions justify-between items-center mt-4">
          <span className="text-sm text-info/80">
            {formatDate(new Date(note.createdAt))}
          </span>
          <div className="flex items-center gap-1 text-primary ">
            <PenSquareIcon className="size-4"/>
            
            <button className="btn btn-ghost btn-xs text-error hover:scale-100" onClick={(e)=>handleDelete(e,note._id)}>
              <Trash2Icon className="size-4"/>
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default NoteCard
