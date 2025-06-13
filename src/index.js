// import '../page/adminpage/js/dataibu.js';
// import "./page/adminpage/js/dataibu.js";


const currentPath = window.location.pathname;

if (currentPath.includes('dashboard.html')) {
  import('./css/dashboard.css');
} else if (currentPath.includes('dataibu.html')) {
  import('./css/dataibu.css');
} else if (currentPath.includes('dataanak.html')) {
  import('./css/dataanak.css');
} else if (currentPath.includes('landingpage.html')) {
  import('./css/landingpage.css');
} else if (currentPath.includes('login.html')) {
  import('./css/login.css');
} else if (currentPath.includes('DashboardUser.html')){
  import('./css/DashboardUser.css');
} else if (currentPath.includes('GrowEats.html')) {
  import('./css/GrowEats.css');
} else if (currentPath.includes('GrowCheck.html')) {
  import('./css/GrowCheck.css');
} else if (currentPath.includes('datalayanananak.html')) {
  import('./css/datalayanananak.css');
} else if(currentPath.includes('datalayananibu.html')) {
  import('./css/datalayananibu.css');
}  else if(currentPath.includes('registeruser.html')) {
  // import('./css/registeruser.css');
}
