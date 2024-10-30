export const errorHandler = (err, req , res, next) => {
    let message = 'Internal Server Error' || err.message;
    let status = 500 || err.status
    
    console.log(err.name);
    console.log(err.message);


    switch (err.name) {
        case 'PrismaClientValidationError':
            status = 400;
            message = err.message;
            break;

        case 'NotFoundError':
            status = 404;
            message = err.message;
            break;
    
        case 'IdNotFound':
            status = 403;
            message = err.message;
            break;


    }

    res.status(status).send({ message });
}



