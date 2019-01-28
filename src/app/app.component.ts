import {SwUpdate} from '@angular/service-worker';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Service-Worker-Details';

  public ngOnInit(): void {
    console.log('application updated');

    // if the SwUpdate class is available
    if (this.swUpdate.isEnabled) {
      // available updates (rebuilt project before the page was refreshed)
      this.swUpdate.available.subscribe((event) => {
        console.log('service worker updated');

        console.log('current version is', event.current);
        console.log('available version is', event.available);
      });

      // activated updates, that will be displayed when the user refreshes the page
      this.swUpdate.activated.subscribe(event => {
        console.log('old version was', event.previous);
        console.log('new version is', event.current);
      });

      // call the service worker for checking for updates
      this.swUpdate.checkForUpdate().then(() => {
        // noop
      }).catch((err) => {
        console.error('error when checking for update', err);
      });
    }
  }


  constructor(private swUpdate: SwUpdate) {
  }
}
