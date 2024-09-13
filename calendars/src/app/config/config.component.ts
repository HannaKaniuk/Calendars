import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Config, ConfigService } from './config.service';

@Component({
  standalone: true,
  selector: 'app-config',
  templateUrl: './config.component.html',
  imports: [ CommonModule ],
  providers: [ ConfigService ],
  styles: ['.error { color: #b30000; }']
})
export class ConfigComponent {
  error: any;
  headers: string[] = [];
  config: Config | undefined;

  constructor(private configService: ConfigService) {}
  clear() {
    this.config = undefined;
    this.error = undefined;
    this.headers = [];
  }

  showConfig() {
    this.configService.getConfig()
      .subscribe({
        next: data => this.config = { ...data }, 
        error: error => this.error = error,
      });
  }
  showConfig_v1() {
    this.configService.getConfig_1()
      .subscribe(data => this.config = {
          heroesUrl: data.heroesUrl,
          textfile:  data.textfile,
          date: data.date,
      });
  }

  showConfig_untyped_response() {
    this.configService.getConfig_untyped_response()
      .subscribe(data => this.config = {
          heroesUrl: (data as any).heroesUrl,
          textfile:  (data as any).textfile,
          date: (data as any).date,
      });
    }



  showConfig_v2() {
    this.configService.getConfig()
      
      .subscribe(data => this.config = { ...data });
  }

  showConfigResponse() {
    this.configService.getConfigResponse()
      
      .subscribe(resp => {
        
        const keys = resp.headers.keys();
        this.headers = keys.map(key =>
          `${key}: ${resp.headers.get(key)}`);

        this.config = { ...resp.body! };
      });
  }
  makeError() {
    this.configService.makeIntentionalError().subscribe({ error: error => this.error = error.message });
  }

  getType(val: any): string {
    return val instanceof Date ? 'date' : Array.isArray(val) ? 'array' : typeof val;
  }
}
