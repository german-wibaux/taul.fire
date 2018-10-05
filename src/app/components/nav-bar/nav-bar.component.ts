import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute, 
    private authService: AuthService) { }

  ngOnInit() {
  }

  

  onAnchorClick ( ) {
    this.route.fragment.subscribe ( f => {
      const element = document.querySelector ( "#" + f )      
      if ( element ) element.scrollIntoView ( )
    });    
  }

  onAlertClick() {
    alert('Esta seccion todavia no se encuentra disponible');
  }

  

  onLogout() {
    this.authService.logout();
  }

}
