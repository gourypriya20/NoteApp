import Navbar from "../components/Navbar"
import RateLimitedUI from "../components/RateLimitedUI";
import { useEffect, useState } from "react";
import axiosInstance from "../lib/axios.js";
import toast from "react-hot-toast";
import NotesNotFound from "../components/NotesNotFound.jsx";
import NoteCard from "../components/NoteCard";

import { LoaderIcon } from "lucide-react";


const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);  
  const [notes, setNotes] = useState([])
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    const fetchNotes = async() => {
      try {
        const res = await axiosInstance.get("/notes");
        console.log(res.data);
        setNotes(res.data);
        setIsRateLimited(false);
      } catch (error) {
        console.log("Error fetching notes");

        if(error.response?.status === 429){
          setIsRateLimited(true);
        }else{
          toast.error("failed to load");
        }

      }finally{
        setLoading(false);
      }
    };

    fetchNotes();

  }, [])


  return (
    <div className="min-h-screen bg-base-200/60">
      <Navbar />

      {isRateLimited && <RateLimitedUI />}

      <div className= "max-w-7xl mx-auto p-4 mt-6">
        {/* when the page is loading, check loading = true -> then display "loading..." */}
        {loading && <div className="min-h-screen bg-base-200 flex items-center justify-center">
            <LoaderIcon className="animate-spin size-10"/>
          </div>}
        {/* check if there are notes - checking length of notes array 
        and make sure not ratelimited, then display them*/}
        {notes.length === 0 && !isRateLimited && <NotesNotFound />}
        {notes.length > 0 && !isRateLimited && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {notes.map(
              (note) => (<NoteCard key={note._id} note={note} setNotes={setNotes}/>)
              )}
          </div>
        )}
      </div>

    </div>
  )
}

export default HomePage
