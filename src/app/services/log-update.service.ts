import {Injectable} from "@angular/core";
import {SwUpdate} from "@angular/service-worker";
/**
 * Created by monjapuggel on 28.01.19.
 */

/**
 * observe available and activated updates of the service worker.
 * the outcome is logged to the console.
 */

@Injectable()
export class LogUpdateService {

  /**
   * track the updates provided by the service worker
   * @param {SwUpdate} updates
   */
  constructor(updates: SwUpdate) {
    // available updates (rebuilt project before the page was refreshed)
    updates.available.subscribe(event => {
      console.log('current version is', event.current);
      console.log('available version is', event.available);
    });

    // activated updates, that will be displayed when the user refreshes the page
    updates.activated.subscribe(event => {
      console.log('old version was', event.previous);
      console.log('new version is', event.current);
    });
  }
}
