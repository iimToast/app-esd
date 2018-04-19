import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { MonComptePage } from '../mon-compte/mon-compte';
import { HomePage } from '../home/home';
import { FavorisPage } from '../favoris/favoris';
import { BestOfPage } from '../best-of/best-of';
import { ReglagesPage } from '../reglages/reglages';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FavorisPage;
  tab3Root = MonComptePage;
  tab4Root = BestOfPage;
  tab5Root = ReglagesPage;

  constructor() {

  }
}
