//This one way to represent wrapper function . These functions would be used a lot in our project thats why we inserted this in our utilities folder
//This is represented in promise format
const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req,res,next)).catch((err) => next(err))
    }
}




export {asyncHandler}

// This is another way to represent wrapper function. This is a wrapper function represented in try-catch format
// const asyncHandler = (fn) => async(req,res,next) => {
//     try{
//             await fn(req,res,next)
//     } catch(error){
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// } // this is higher order functions in javascript ()=>{()=>{}} we just removed the outer curly braces in this line
