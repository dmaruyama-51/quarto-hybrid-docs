export async function onRequest(context) {
    const { request } = context;
    
    // Check Basic Authentication header
    const authorization = request.headers.get('authorization');
    
    if (!authorization) {
      return new Response('Unauthorized', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Secure Area"'
        }
      });
    }
    
    // Validate Basic Authentication
    const [scheme, encoded] = authorization.split(' ');
    
    if (!encoded || scheme !== 'Basic') {
      return new Response('Unauthorized', { status: 401 });
    }
    
    const buffer = Uint8Array.from(atob(encoded), character => character.charCodeAt(0));
    const decoded = new TextDecoder().decode(buffer).toString();
    const [username, password] = decoded.split(':');
    
    const CORRECT_USERNAME = context.env.AUTH_USERNAME;
    const CORRECT_PASSWORD = context.env.AUTH_PASSWORD;
    
    // Verify username and password
    if (username !== CORRECT_USERNAME || password !== CORRECT_PASSWORD) {
      return new Response('Unauthorized', { status: 401 });
    }
    
    // If authentication successful, proceed with the request
    return context.next();
  } 