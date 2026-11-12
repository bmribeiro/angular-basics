import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const mockToken = 'token-jwt-angular-basics';

  // HttpRequest objects are immutable: we must clone the request to add headers
  const authenticatedRequest = req.clone({
    setHeaders: {
      Authorization: `Bearer ${mockToken}`,
    },
  });

  // Passes the modified request to the next interceptor or to the network
  return next(authenticatedRequest);
};
