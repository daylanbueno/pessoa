package br.com.pessoa.resource.exception;


import br.com.pessoa.service.exceptions.NegocioException;
import br.com.pessoa.service.exceptions.ObjectNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class ResourceExceptionHandler {

    @ExceptionHandler(ObjectNotFoundException.class)
    public ResponseEntity<StandardError> objectNotFount(ObjectNotFoundException e) {
        StandardError error = new StandardError(HttpStatus.NOT_FOUND.value(), e.getMessage(), System.currentTimeMillis());
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
    }

    @ExceptionHandler(NegocioException.class)
    public ResponseEntity<StandardError> negocioException(NegocioException e) {
        StandardError error = new StandardError(HttpStatus.PRECONDITION_FAILED.value(), e.getMessage(), System.currentTimeMillis());
        return ResponseEntity.status(HttpStatus.PRECONDITION_FAILED).body(error);
    }
    
}
