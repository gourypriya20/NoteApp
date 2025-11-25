import { ZapIcon } from "lucide-react"

const RateLimitedUI = () => {
  return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
            <div className="bg-primary/10 border border-primary/30 rounded-2xl shadow-lg p-4 sm:p-6 md:p-8">
                <div className="flex flex-col items-center justify-center gap-4 md:gap-6">
                    <div className="flex-shrink-0 flex items-center justify-center bg-primary/20 p-3 sm:p-4 rounded-full">
                        <ZapIcon className="size-8 sm:size-10 text-primary" />
                    </div>
                    <div className="flex-1 text-center">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">
                        You are sending too many requests
                        </h3>
                        <p className="text-sm sm:text-base text-base-content mb-1">
                        You have surpassed the rate limit. Please wait a moment
                        </p>
                        <p className="text-xs sm:text-sm text-base-content/70">
                        Try again later
                        </p>
                    </div>
                </div>
            </div>
        </div>

  )
}

export default RateLimitedUI
