import { Component, OnInit, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mdl-navbar',
  templateUrl: './mdl-navbar.html',
  styleUrls: ['./mdl-navbar.scss']
})
export class MdlNavbarComponent implements OnInit {

  public currentUser: any;
  public menu: any[] = [];
  public userImgUrl = 'assets/img/user.jpg';
  public urlmvn: any;
  @Input() internal

  constructor() { }

  ngOnInit() {
    this.currentUser = JSON.parse(sessionStorage.getItem("currentUserMVN"));
    if (JSON.parse(sessionStorage.getItem('navbar'))) {
      this.menu = JSON.parse(sessionStorage.getItem('navbar')).menu;
    }
    if (sessionStorage.getItem("urlmvn")) {
      this.urlmvn = sessionStorage.getItem("urlmvn");
    }
    if (this.internal) {
      this.currentUser = JSON.parse('{"identity":{"id":"1182220354332917760","idPolicy":"5d42d127-4f06-49b1-b34c-c45fb0e3573e","idDomain":"b402f811-23c6-4c0a-8a4d-283a56caaf03","identityTrustLevel":"LOW","parameters":{"firstname":"makni","birthdate":"","gender":"Homme","ChildrenID":["1182579047205437440","1182221163795841024","1183782823996162048","1184029435737669632","1184039807949471744","1184059425585889280"],"Label":"Identité MVN","birthCity":"","lastname":"yassin","nationality":"Albanie","phone":"+213 9999999999999","e_mail":"yassine.makni@be-softilys.tn","civil_status":"","address_MVN":{}}},"authenticationAccount":{"login":"yassin","email":"yassine.makni@be-softilys.tn","attributes":{"identityId":["1182220354332917760"]},"enabled":true,"requiredActions":[],"emailVerified":true},"authenticationMethod":{"authenticatorProviders":[{"id":"direct-grant-validate-password","description":"Validates the password supplied as a \'password\' form parameter in direct grant request","displayName":"Password"},{"id":"direct-grant-validate-username","description":"Validates the username supplied as a \'username\' form parameter in direct grant request","displayName":"Username Validation"}],"directAuthentication":true}} ');
      this.menu = JSON.parse('{"login":"yassin","lastconnection":"28/10/2019 à 14:54:49","menu":[{"link":"https://front.mvn.rci.bcu.openstack.local/index.html#/validité_carte","label":"Validité carte"},{"link":"https://front.mvn.rci.bcu.openstack.local/bs-front/","label":"Espace Assuré Almerys"}]} ').menu;
      if (sessionStorage.getItem("urlmvn")) {
        this.urlmvn = 'https://front.mvn.rci.bcu.openstack.local';
      }
    }

  }

  logout() { }

  redirect(link) {
    window.location.href = link;
  }

}

@NgModule({
  declarations: [MdlNavbarComponent],
  imports: [CommonModule],
  exports: [MdlNavbarComponent]
})
export class MdlNavbarModule { }