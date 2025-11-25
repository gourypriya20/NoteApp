import rateLimit from "../config/upstash.js";

const rateLimiter = async (req,res,next)=>{
    try {
        const {success} = await rateLimit.limit("my-rate-limit");//can be userid or ip address
        if (!success){
            return res.status(429).json({
                message:"too many request,pleaase try again later"
            })
        }
        next();
    } catch (error) {
        console.log("ratelimit error, error");
        next(error);
    }

}

export default rateLimiter;