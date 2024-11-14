export const errorHandler = (err, req , res, next) => {
    let message = 'Internal Server Error' || err.message;
    let status = 500 || err.status

    console.log(err);
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
    }


  const simplifiedError = {
    message: message.split('\n').pop().replace(/^Argument\s*/, ''), 
  };

  res.status(status).send(simplifiedError);
};


