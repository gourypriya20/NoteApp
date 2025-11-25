import { useState,useEffect } from "react";
import { Link, useNavigate,useParams  } from "react-router";

import toast from "react-hot-toast";
import { ArrowLeftIcon, LoaderIcon, Trash2Icon } from "lucide-react";

import axiosInstance from "../lib/axios";

const NoteDetailsPage = () => {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();

  const {id} = useParams();

  const handleDelete = async() =>{
    if(!window.confirm("Are you sure you want to delete this note?")){
      return;
    }
    try {
      await axiosInstance.delete(`/notes/${id}`);
      navigate("/");
      toast.success("Note Deleted successfully!");      
    } catch (error) {
      console.log("error deleting note ",error);
      toast.error("Unable to delete note");
    }
  };

  const handleSave = async() =>{
    if(!note.title.trim()){
      toast.error("Can't save a note without title");
      return;
    }

    setSaving(true);
    try {
      await axiosInstance.put(`/notes/${id}`,note)
      toast.success("Note Saved Successfully");
    } catch (error) {
      console.log("Error saving note ",error);
      toast.error("Unable to Save note");
    }finally{
      setSaving(false);
    }

  };


  useEffect(() => {
    const fetchNote = async() => {
      try {
        const res = await axiosInstance.get(`/notes/${id}`);
        setNote(res.data);
      } catch (error) {
        console.log("error fetching note details", error);
        toast.error("Couldn't fetch the note");
      } finally{
        setLoading(false);
      }
    };

    fetchNote();
  }, [id]);
  console.log( { note });

  if(loading){
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <LoaderIcon className="animate-spin size-10"/>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <Link to="/" className="btn btn-ghost">
              <ArrowLeftIcon className="size-5"/>
            </Link>
            <button onClick={handleDelete} className="btn btn-ghost text-error ">
              <Trash2Icon className="size-6"/>
            </button>
          </div>

          <div className="card bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  {/* <span className="label-text">Title</span> */ }
                </label>
                <input 
                  type="text"
                  placeholder="Note Title"
                  className="input input-lg font-bold text-2xl text-center text-primary focus:outline-none focus:border-0"
                  value = {note.title}
                  onChange={(e) => setNote({
                    ...note,title: e.target.value
                  })}
                />

              </div>

              <div className="form-control">
                <label className="label">
                  {/*<span className="label-text">Content</span> */}
                </label>
                <textarea
                  placeholder="Start writing your note"
                  className="textarea h-40 focus:outline-none focus:border-0"
                  value = {note.content}
                  onChange={(e) => setNote({
                    ...note , content: e.target.value
                  })}
                />
                
              </div>

              <div className="card-actions justify-end">
                <button className="btn btn-primary" disabled={saving} onClick={handleSave} >
                  {saving ? "Saving..." : "Save Note"}
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default NoteDetailsPage
