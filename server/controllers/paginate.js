exports.paginateResult = (input) => {
    const limit = 10
    return (req, res, next) => {
        //page number and result per page limit
        const page = Number(req.query.page)
        const limit = 5

        //start and end of page 
        const startIndex = (page - 1) * limit
        const endIndex = page * limit

        const result = {}

        //check if next page exist
        if (endIndex < input.length) {
            result.next = {
                page: page +1
            }
        }

        //check if previous page exist 
        if (startIndex > 0) {
            result.previous = {
                page: page - 1 
            }
        }

        result.result = input.slice(startIndex, endIndex)

        //save it to res to send back to client

        res.paginateResult = result
        //next()
    }
}

