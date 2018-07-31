import { HttpHeaders } from '@angular/common/http';
export let httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Cache-Control': 'no-cache',
    })
  };