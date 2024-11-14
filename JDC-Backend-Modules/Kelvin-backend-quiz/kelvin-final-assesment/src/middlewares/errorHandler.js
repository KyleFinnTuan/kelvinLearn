export const errorHandler = (err, req, res, next) => {
  let message = 'Internal Server Error';
  let status = 500;

  console.log(err.name, "this is the name");
  
  console.log(err.message, "this is the message");
  
  const simplifiedErrorMessage = {
    message: message.split('\n').pop().replace(/^Argument\s*/, ''), 
  };

  switch (err.name) {
    case 'PrismaClientValidationError':
      status = 400;
      message = simplifiedErrorMessage;
      break;

    case 'NotFoundError':
      status = 404;
      message = err.message;
      break;

    case 'JsonWebTokenError':
      status = 400;
      message = err.message;
      break;
  }


  res.status(status).send(message);
}