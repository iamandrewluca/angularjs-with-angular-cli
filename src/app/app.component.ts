import appTemplate from './app.component.html'

// @Inject(['$ccokies']) maybe create decorators like in Angular?
class AppController {
  user: string = null;
  $cookies: ng.cookies.ICookiesService = null;

  constructor($cookies: ng.cookies.ICookiesService) {
    this.$cookies = $cookies
    this.user = 'world';
  }

  onClick() {
    this.$cookies.put('666', '666')
    window.alert(this.user)
  }
}

export const AppComponent = {
  template: appTemplate,
  controller: ['$cookies', AppController],
}
